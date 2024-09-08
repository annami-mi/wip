<script setup lang="ts">
// @ts-ignore
import WarningIcon from "@/shared/assets/image/warning.svg?component"
</script>

<template>
  <div class="warning">
    <WarningIcon class="warning__icon"/>
    <div>
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
