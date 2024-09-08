<script setup lang="ts">

import {TheHeader} from "@/widgets/TheHeader";

interface Props{
  displayHeader: boolean,
}
const props = defineProps<Props>()
</script>

<template>
  <div class="layout-primary">
    <TheHeader v-if="props.displayHeader"/>
    <div v-else></div>
    <div class="body">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
