<script setup lang="ts">
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";

interface Props{
  tag?: 'button' | 'a' | 'div' | 'span'
  text: string
}
const props = withDefaults(defineProps<Props>(), {
  tag: 'a',
})
</script>

<template>
  <component
      :is="props.tag"
      class="button-link"
  >
    <span class="button-link__prefix">
      <slot name="prefix"/>
    </span>
    <TypographyBase
        tag="span"
        color="accent"
        size="p"
        weight="black"
        class="button-link__text"
    >{{props.text}}</TypographyBase>
  </component>
</template>

<style lang="scss">
@import "styles";
</style>
