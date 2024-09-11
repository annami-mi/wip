<script setup lang="ts">
import {HeaderSection} from "@/shared/ui-kit/data-display/HeaderSection";
import {PriceForm} from "@/features/get-price/ui/PriceForm";

interface Props {
  handlerNext: (number:number) => void
}
const props = defineProps<Props>()
</script>

<template>
  <div class="price-screen">
    <HeaderSection>
      <template #title>Amount</template>
      <template #description>Enter or select desired water amount</template>
    </HeaderSection>
    <PriceForm :handler-next="props.handlerNext"/>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
