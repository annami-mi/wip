<script setup lang="ts">
interface Props{
  tag?: 'div' | 'span' | 'a' | 'p' | 'h1' | 'h2'
  weight: 'regular' | 'semibold' | 'black'
  size: 'h1' | 'h2' | 'p' | 'small'
  color: 'accent' | 'text-primary' | 'text-secondary' | 'success' | 'non-color'
}
const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
})

</script>

<template>
  <component
      :is="props.tag"
      :class="['typography', {
        'typography--black' : props.weight === 'black',
        'typography--semibold' : props.weight === 'semibold',
        'typography--h1' : props.size === 'h1',
        'typography--h2' : props.size === 'h2',
        'typography--p' : props.size === 'p',
        'typography--small' : props.size === 'small',
        'typography--accent' : props.color === 'accent',
        'typography--text-primary' : props.color === 'text-primary',
        'typography--text-secondary' : props.color === 'text-secondary',
        'typography--non-color' : props.color === 'non-color',
        'typography--success' : props.color === 'success',
      }]"
  >
    <slot/>
  </component>
</template>

<style lang="scss">
@import "styles";
</style>
