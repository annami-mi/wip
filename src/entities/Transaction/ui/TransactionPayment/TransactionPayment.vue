<script setup lang="ts">
import {inject} from "vue";
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";
import {Transaction} from "@/entities/Transaction/model/types.ts";

const transaction = inject('transaction') as Transaction
</script>

<template>
  <div class="order-payment">
    <img :src="transaction.payment.image" :alt="transaction.payment.name" class="order-payment__image">
    <TypographyBase size="h2" color="text-primary" weight="black">{{transaction.payment.name}}</TypographyBase>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
