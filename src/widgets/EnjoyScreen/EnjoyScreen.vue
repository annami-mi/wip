<script setup lang="ts">

import {FooterSection} from "@/shared/ui-kit/data-display/FooterSection";
import {ButtonBase} from "@/shared/ui-kit/buttons/ButtonBase";
import {HeaderSection} from "@/shared/ui-kit/data-display/HeaderSection";

interface Props{
  handlerAction: any
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <HeaderSection>
      <template #title>Profitez de votre eau potable</template>
      <template #description>N'oubliez pas de retirer la bouteille</template>
    </HeaderSection>
    <div class="enjoy-screen__body">
      <img src="@/shared/assets/image/image-5.png" alt="successful" class="enjoy-screen__body__image">
    </div>
    <FooterSection>
      <ButtonBase @click="props.handlerAction" text="Merci de recommencer" type="primary"/>
    </FooterSection>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
