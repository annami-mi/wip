<script setup lang="ts">

import {Payment} from "@/entities/Payment";
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";

interface Props{
  payment: Payment,
  isSelected: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <div :class="['payment-card', {'payment-card--selected': props.isSelected} ]">
    <img :src="payment.image" :alt="payment.name" class="payment-card__image">
    <TypographyBase size="p" color="text-primary" weight="semibold" class="payment-card__title">{{props.payment.name}}</TypographyBase>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
