<script setup lang="ts">
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";

interface Props{
  tag?: 'button' | 'a' | 'div'
  type?: 'primary' | 'secondary'
  text: string
  size?: 'small' | 'normal'
}
const props = withDefaults(defineProps<Props>(), {
  tag: 'button',
  type: 'primary',
  size: 'normal',
})
</script>

<template>
  <component
      :is="props.tag"
      :class="['button', {
        'button--small': props.size === 'small',
        'button--primary': props.type === 'primary',
        'button--secondary': props.type === 'secondary'
      }]"
      :style="$slots['prefix'] ? 'padding-right: 24px' : ''"
  >
    <span v-if="$slots['prefix']" class="button__prefix">
      <slot name="prefix"/>
    </span>
    <TypographyBase
        tag="span"
        size="p"
        weight="black"
        :color="props.type === 'primary' ? 'non-color' : 'accent'"
        class="button__text"
    >{{props.text}}</TypographyBase>
  </component>
</template>

<style lang="scss">
@import "styles";
</style>
