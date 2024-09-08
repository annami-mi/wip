<script setup lang="ts">
import {computed, inject} from "vue";
import {usePriceStore} from "@/entities/Price";
import {HeaderSection} from "@/shared/ui-kit/data-display/HeaderSection";
import {FooterSection} from "@/shared/ui-kit/data-display/FooterSection";
import {ButtonBase} from "@/shared/ui-kit/buttons/ButtonBase";
import {Payment, PaymentCard, usePaymentStore} from "@/entities/Payment";
import {Transaction} from "@/entities/Transaction/model/types.ts";

interface Props {
  handlerNext: (number:number) => void
  handlerPrev: (number:number) => void
}

const props = defineProps<Props>()

const priceStore = usePriceStore()
const currencyName = computed(() => priceStore.currencyName)
const unitName = computed(() => priceStore.unitName)
const onContinue = () => {
  props.handlerNext(2)
}
const onBack = () => {
  props.handlerPrev(2)
}

const paymentStore = usePaymentStore()
const paymentList = computed(() => paymentStore.paymentList)

const transaction = inject('transaction') as Transaction

const selectPayment = (payment:Payment) => {
  transaction.payment = payment
}
</script>

<template>
  <div class="payment-tab-list">
    <HeaderSection>
      <template #title>Payment</template>
      <template #description>You’ll pay {{transaction.price}} {{currencyName}} for {{ transaction.price }} {{unitName}}</template>
    </HeaderSection>

    <div class="payment-tab-list__tabs">
      <PaymentCard
          v-for="payment in paymentList"
          :key="payment.id"
          :payment="payment"
          :is-selected="transaction.payment.name === payment.name"
          @click="selectPayment(payment)"
      />
    </div>

    <FooterSection>
      <ButtonBase @click="onBack" text="Back" type="secondary"/>
      <ButtonBase @click="onContinue" text="Continue" type="primary"/>
    </FooterSection>
  </div>
</template>

<style scoped lang="scss">
@import "styles";
</style>
