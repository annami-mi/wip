<script setup lang="ts">

import {HeaderSection} from "@/shared/ui-kit/data-display/HeaderSection";
import {ButtonBase} from "@/shared/ui-kit/buttons/ButtonBase";
import {FooterSection} from "@/shared/ui-kit/data-display/FooterSection";
</script>

<template>
<div>
  <HeaderSection>
    <template #title>Payment unsuccessful</template>
    <template #description>Try to pay another amount or use another payment provider.</template>
  </HeaderSection>
  <div class="unsuccessful-screen__body">
    <img src="@/shared/assets/image/image-4.png" alt="unsuccessful" class="unsuccessful-screen__body__image">
  </div>
  <FooterSection>
    <ButtonBase text="Try again" type="primary"/>
  </FooterSection>
</div>
</template>

<style lang="scss">
@import "styles";
</style>
