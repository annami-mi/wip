<script setup lang="ts">
import {usePriceStore} from "@/entities/Price";
import {computed, inject} from "vue";
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";
// @ts-ignore
import DropIcon from "@/shared/assets/image/drop-2.svg?component"
// @ts-ignore
import CashIcon from "@/shared/assets/image/cash.svg?component"
import {Transaction} from "@/entities/Transaction/model/types.ts";

const priceStore = usePriceStore()
const currencyName = computed(() => priceStore.currencyName)
const unitName = computed(() => priceStore.unitNameCut)

const transaction = inject('transaction') as Transaction
</script>

<template>
  <TypographyBase size="h2" color="text-primary" weight="black" class="order-price-options">
    <CashIcon style="margin-right: 12px"/>
    {{transaction.price}} {{currencyName}}<span style="display: inline-block; margin: 0 16px 0 9px">for</span>
    <DropIcon style="margin-right: 8px"/>{{transaction.unitValue}}{{unitName}}
  </TypographyBase>
</template>

<style lang="scss">
@import "styles";
</style>
