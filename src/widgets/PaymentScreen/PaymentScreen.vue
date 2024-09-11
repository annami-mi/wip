<script setup lang="ts">

import {HeaderSection} from "@/shared/ui-kit/data-display/HeaderSection";
import {PaymentTabList} from "@/features/select-payment/ui/PaymentTabList";
import {usePriceStore} from "@/entities/Price";
import {computed, inject} from "vue";
import {Transaction} from "@/entities/Transaction/model/types.ts";

const priceStore = usePriceStore()
const currencyName = computed(() => priceStore.currencyName)
const unitName = computed(() => priceStore.unitName)
const transaction = inject('transaction') as Transaction

interface Props {
  handlerNext: (number:number) => void
  handlerPrev: (number:number) => void
}

const props = defineProps<Props>()
</script>

<template>
  <div class="payment-screen">
    <HeaderSection>
      <template #title>Payment</template>
      <template #description>You’ll pay {{transaction.price}} {{currencyName}} for {{ transaction.price }} {{unitName}}</template>
    </HeaderSection>
    <PaymentTabList :handler-next="props.handlerNext" :handler-prev="props.handlerPrev"/>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
