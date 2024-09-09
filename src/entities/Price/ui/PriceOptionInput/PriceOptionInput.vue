<script setup lang="ts">
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";
import {computed} from "vue";
import { vMaska } from 'maska'

interface Props{
  label: string
  mask?: any,
  inputmode: 'numeric' | 'decimal',
  maxlength?: string
  isReadonly?: boolean
}
const props = defineProps<Props>()
const value = defineModel<string>({default: ''})
const inputMask = computed(() => props.mask)

</script>

<template>
  <div class="price-option-input">
    <input
        :readonly="props.isReadonly"
        ref="inputEl"
        type='text'
        v-model="value"
        class="price-option-input__input"
        :maxlength="props.maxlength"
        :inputmode="props.inputmode"
        v-maska:[inputMask]
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
