<script setup lang="ts">

import {LayoutPrimary} from "@/shared/ui-kit/layouts/LayoutPrimary";
import {computed, onMounted, provide, reactive} from "vue";
import {LoaderScreen} from "@/widgets/LoaderScreen";
import {PriceForm} from "@/features/get-price/ui/PriceForm";
import {PaymentTabList} from "@/features/select-payment/ui/PaymentTabList";
import {TransactionConfirmScreen} from "@/widgets/TransactionConfirmScreen";
import {usePaymentStore} from "@/entities/Payment";
import {TransactionScreen} from "@/widgets/TransactionScreen";
import {LayoutSecondary} from "@/shared/ui-kit/layouts/LayoutSecondary";
import {Transaction} from "@/entities/Transaction/model/types.ts";

const state = reactive({
  activeScreen: 0,
  animation: 'slide-scale-fade',
})

const displayHeader = computed(() => {
  return state.activeScreen !== 0;
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
  price: 100,
  unitValue: 2,
  payment: paymentStore.paymentList[0]
})

provide('transaction', transaction)

onMounted(() => {
  setTimeout(() => {
    state.activeScreen = 1
  }, 2000)
})

const layout = computed(() => {
  if(state.activeScreen !== 0){
    return LayoutPrimary
  } else {
    return LayoutSecondary
  }
})
</script>

<template>
    <component :is="layout" :display-header="displayHeader">
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
        <TransactionScreen v-else-if="state.activeScreen === 4"/>
      </transition>
    </component>
</template>

<style scoped>

</style>
