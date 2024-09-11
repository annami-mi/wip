<script setup lang="ts">

import {LayoutPrimary} from "@/shared/ui-kit/layouts/LayoutPrimary";
import {onBeforeUnmount, onMounted, provide, reactive, watch} from "vue";
import {LoaderScreen} from "@/widgets/LoaderScreen";
import {TransactionConfirmScreen} from "@/widgets/TransactionConfirmScreen";
import {usePaymentStore} from "@/entities/Payment";
import {Transaction} from "@/entities/Transaction/model/types.ts";
import {SessionApi} from "@/entities/Session"
import {useRoute} from "vue-router";
import {usePriceStore} from "@/entities/Price";
import {NotWorkingScreen} from "@/widgets/NotWorkingScreen";
import {TransactionWaitingScreen} from "@/widgets/TransactionWaitingScreen";
import {UnsuccessfulScreen} from "@/widgets/UnsuccessfulScreen";
import {useDebounce} from "@/shared/libs/useDebounce.ts";
import {checkDeviseResponse} from "@/entities/Session/api/repository.ts";
import {PriceScreen} from "@/widgets/PriceScreen";
import {PaymentScreen} from "@/widgets/PaymentScreen";
import {scrollToTop} from "@/shared/libs/scroll.ts";

const animationSlideNext = 'slide-left-fade'
const animationSlidePrev = 'slide-right-fade'

const state = reactive({
  isLoading: true,
  activeScreen: 1,
  animation: 'slide-scale-fade',
})

const paymentStore = usePaymentStore()
const transaction = reactive<Transaction>({
  price: '',
  unitValue: '',
  payment: paymentStore.paymentList[0]
})

watch(() => transaction.price, () => debounceUpdateUnitValue())

const updateUnitValue = () => transaction.unitValue = priceStore.getUnitValuePerCost(transaction.price)

const debounceUpdateUnitValue = useDebounce(() => updateUnitValue(), 500)

provide('transaction', transaction)

const route = useRoute();
const priceStore = usePriceStore()

const setPrice = (data: checkDeviseResponse["data"]) => {
  transaction.price = '300'
  priceStore.costPerUnit  = data.price
  priceStore.currencyName = data.currencyCode.toUpperCase()
  priceStore.ATMNumber = data.number
}

const checkDevice = async () => {
  const id = route.params.id as string
  try{
    state.isLoading = true
    const {data} = await SessionApi.checkDevice({deviceId: id})
    if(data.success){
      setPrice(data.data)
      updateUnitValue()
    } else {
      state.activeScreen = -1
    }
  } catch (e){
    state.activeScreen = -1
  } finally {
    state.isLoading = false
  }
}

onMounted(async () => {
  await checkDevice()
})

onBeforeUnmount(() => {
  state.activeScreen = 1
})

const toScreen = (to: number) => {
  const from = state.activeScreen
  state.animation = from < to || to === -1 || to ===-2 ? animationSlideNext : animationSlidePrev
  state.activeScreen = to
  scrollToTop()
}
</script>

<template>
    <LayoutPrimary :display-header="!state.isLoading && state.activeScreen !== -1">
      <transition :name="state.animation" mode="out-in">
        <LoaderScreen v-if="state.isLoading"/>
        <NotWorkingScreen
            v-else-if="state.activeScreen === -1"
            :handler-action="checkDevice"
        />
        <PriceScreen
            v-else-if="state.activeScreen === 1"
            :handler-next="() => toScreen(2)"
        />
        <PaymentScreen
            v-else-if="state.activeScreen === 2"
            :handler-prev="() => toScreen(1)"
            :handler-next="() => toScreen(3)"
        />
        <TransactionConfirmScreen
            v-else-if="state.activeScreen === 3"
            :handler-next="() => toScreen(4)"
            :handler-prev="() => toScreen(2)"
            :handler-change-payment="() => toScreen(2)"
            :handler-change-price-option="() => toScreen(1)"
        />
        <TransactionWaitingScreen
            v-else-if="state.activeScreen === 4"
            :handler-error="() => toScreen(-2)"
        />
        <UnsuccessfulScreen
            v-else-if="state.activeScreen === -2"
            title="Oooops..."
            description="something went wrong"
            :handler-action="() => toScreen(4)"
        />
      </transition>
    </LayoutPrimary>
</template>

<style scoped>

</style>
