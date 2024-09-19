<script setup lang="ts">
import {computed, inject} from "vue";
import {FooterSection} from "@/shared/ui-kit/data-display/FooterSection";
import {ButtonBase} from "@/shared/ui-kit/buttons/ButtonBase";
import {Payment, PaymentCard, usePaymentStore} from "@/entities/Payment";
import {Transaction} from "@/entities/Transaction/model/types.ts";

interface Props {
  handlerNext: (number:number) => void
  handlerPrev: (number:number) => void
}

const props = defineProps<Props>()


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
      <ButtonBase @click="onBack" text="Retour" type="secondary"/>
      <ButtonBase @click="onContinue" text="Continuer" type="primary"/>
    </FooterSection>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
