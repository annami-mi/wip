<script setup lang="ts">

import {LayoutPrimary} from "@/shared/ui-kit/layouts/LayoutPrimary";
import {computed, onMounted, provide, reactive, watch} from "vue";
import {LoaderScreen} from "@/widgets/LoaderScreen";
import {PriceForm} from "@/features/get-price/ui/PriceForm";
import {PaymentTabList} from "@/features/select-payment/ui/PaymentTabList";
import {TransactionConfirmScreen} from "@/widgets/TransactionConfirmScreen";
import {usePaymentStore} from "@/entities/Payment";
import {LayoutSecondary} from "@/shared/ui-kit/layouts/LayoutSecondary";
import {Transaction} from "@/entities/Transaction/model/types.ts";
import {SessionApi} from "@/entities/Session"
import {useRoute} from "vue-router";
import {usePriceStore} from "@/entities/Price";
import {NotWorkingScreen} from "@/widgets/NotWorkingScreen";
import {TransactionWaitingScreen} from "@/widgets/TransactionWaitingScreen";
import {UnsuccessfulScreen} from "@/widgets/UnsuccessfulScreen";
import {useDebounce} from "@/shared/libs/useDebounce.ts";

const state = reactive({
  activeScreen: 0,
  animation: 'slide-scale-fade',
})

const useAnimationNext = () => {
  state.animation = 'slide-left-fade'
}

const useAnimationPrev = () => {
  state.animation = 'slide-right-fade'
}

const handlePrevScreen = (from:number) => {
  state.activeScreen = from - 1
  useAnimationPrev()
}

const handleNextScreen = (from:number) => {
  state.activeScreen = from + 1
  useAnimationNext()
}

const paymentStore = usePaymentStore()

const transaction = reactive<Transaction>({
  price: '',
  unitValue: '',
  payment: paymentStore.paymentList[0]
})

watch(() => transaction.price, () => {
  const update = useDebounce(() => {
    transaction.unitValue = priceStore.getUnitValuePerCost(transaction.price)
  }, 500)
  update()
})

provide('transaction', transaction)

const route = useRoute();
const priceStore = usePriceStore()
const checkDevice = async () => {
  const ref = route.query.ref as string
  try{
    state.activeScreen = 0
    const {data} = await SessionApi.checkDevice({deviceId: ref})
    if(data.success){
      transaction.price = data.data.price.toString()
      priceStore.costPerUnit  = data.data.price
      priceStore.unitName = data.data.currencyCode
      priceStore.ATMNumber = data.data.number
      handleNextScreen(0)
    } else {
      // state.activeScreen = -1
      state.activeScreen = 1
    }
  } catch (e){
    // state.activeScreen = -1
    state.activeScreen = 1
  }
}
onMounted(() => {
  checkDevice()
  transaction.price = '60'
})

const layout = computed(() => {
  switch (state.activeScreen){
    case 0:
    case -1:
      return LayoutSecondary
    default:
      return LayoutPrimary
  }
})
</script>

<template>
    <component :is="layout">
      <transition :name="state.animation" mode="out-in">
        <LoaderScreen v-if="state.activeScreen === 0"/>
        <PriceForm v-else-if="state.activeScreen === 1" :handler-next="handleNextScreen"/>
        <PaymentTabList v-else-if="state.activeScreen === 2" :handler-next="handleNextScreen" :handler-prev="handlePrevScreen"/>
        <TransactionConfirmScreen
            v-else-if="state.activeScreen === 3"
            :handler-next="handleNextScreen"
            :handler-prev="handlePrevScreen"
            :handler-change-payment="() => handlePrevScreen(3)"
            :handler-change-price-option="() => handlePrevScreen(2)"
        />
        <TransactionWaitingScreen
            v-else-if="state.activeScreen === 4"
            :handler-error="handlePrevScreen(-1)"
        />
        <NotWorkingScreen
            v-else-if="state.activeScreen === -1"
            :handler-action="checkDevice"
        />
        <UnsuccessfulScreen
            v-else-if="state.activeScreen === -2"
            title="Oooops..."
            description="something went wrong"
            :handler-action="handleNextScreen"
        />
      </transition>
    </component>
</template>

<style scoped>

</style>
