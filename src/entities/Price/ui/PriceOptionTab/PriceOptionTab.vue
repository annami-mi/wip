<script setup lang="ts">
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";
import {TabBase} from "@/shared/ui-kit/data-display/TabBase";
import {Price, usePriceStore} from "@/entities/Price";
import {computed, inject} from "vue";
import {Transaction} from "@/entities/Transaction/model/types.ts";

const priceStore = usePriceStore()
const currencyName = computed(() => priceStore.currencyNameCut)
const unitName = computed(() => priceStore.unitNameCut)
const priceList = computed(() => priceStore.priceList)
const transaction = inject('transaction') as Transaction

const selectPrice = (item: Price) => {
  transaction.price = item.price
  transaction.unitValue = item.unitValue
}
</script>

<template>
  <TabBase @click="selectPrice(item)" v-for="item in priceList" :key="item.unitValue">
    <div class="price-form__tab-content">
      <TypographyBase tag="span" size="h2" color="text-primary" weight="black">{{item.price}}<TypographyBase style="padding-left: 2px" size="p" color="text-primary" weight="black" tag="span">{{currencyName}}</TypographyBase></TypographyBase>
      <TypographyBase tag="span" size="p" color="text-primary" weight="semibold">{{item.unitValue}} {{unitName}}</TypographyBase>
    </div>
  </TabBase>
</template>

<style scoped lang="scss">

</style>
