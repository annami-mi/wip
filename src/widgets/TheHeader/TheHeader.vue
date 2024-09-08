<script setup lang="ts">

import {ButtonLink} from "@/shared/ui-kit/buttons/ButtonLink";
// @ts-ignore
import DropIcon from "@/shared/assets/image/drop.svg?component";
// @ts-ignore
import TelIcon from "@/shared/assets/image/tel.svg?component";
import {HELP_TEL} from "@/shared/config";
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";
import {computed} from "vue";
import {usePriceStore} from "@/entities/Price";

const priceStore = usePriceStore()
const costPerUnit = computed(() => priceStore.costPerUnit)
const unitName = computed(() => priceStore.unitNameCut)
const ATMNumber = computed(() => priceStore.ATMNumber)
const currencyName = computed(() => priceStore.currencyName)
</script>

<template>
  <header class="header">
    <div class="header__left">
      <DropIcon/>
      <div class="header__price">
        <TypographyBase tag="div" size="p" color="text-primary" weight="semibold">ATM {{ATMNumber}}</TypographyBase>
        <TypographyBase tag="div" size="small" color="text-primary" weight="regular">1 {{unitName}} = {{costPerUnit}} {{currencyName}}</TypographyBase>
      </div>
    </div>
    <div class="header__right">
      <ButtonLink tag="a" :href="`tel:${HELP_TEL}`" text="Help">
        <template #prefix>
          <TelIcon/>
        </template>
      </ButtonLink>
    </div>
  </header>
</template>

<style lang="scss">
@import "styles";
</style>
