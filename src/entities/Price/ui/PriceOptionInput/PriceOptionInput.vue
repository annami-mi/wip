<script setup lang="ts">
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";

interface Props{
  label: string
}
const props = defineProps<Props>()
const value = defineModel<number>({default: 0})
</script>

<template>
  <div class="price-option-input">
    <input
        readonly
        ref="inputEl"
        type='text'
        v-model="value"
        inputmode="numeric"
        class="price-option-input__input"
        maxlength="3"
    >
    <TypographyBase
        size="small"
        color="text-secondary"
        tag="span"
        weight="regular"
        class="price-option-input__label"
    >
      {{ props.label }}
    </TypographyBase>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
