<script setup lang="ts">

import {TypographyBase} from "@/shared/ui-kit/TypographyBase";
</script>

<template>
  <div class="header-section">
    <TypographyBase
        v-if="$slots['title']"
        tag="h1"
        size="h1"
        color="text-primary"
        weight="black"
        class="header-section__title"
    ><slot name="title"/></TypographyBase>

    <TypographyBase
        v-if="$slots['description']"
        tag="p"
        size="p"
        color="text-primary"
        weight="regular"
        class="header-section__description"
    ><slot name="description"/></TypographyBase>

    <div v-if="$slots['slot']" class="header-section__slot">
      <slot name="slot"/>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
