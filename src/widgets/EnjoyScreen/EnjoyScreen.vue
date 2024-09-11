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
      <template #title>Enjoy your clear water</template>
      <template #description>Don’t forget to remove the bottle</template>
    </HeaderSection>
    <div class="enjoy-screen__body">
      <img src="@/shared/assets/image/image-5.png" alt="successful" class="enjoy-screen__body__image">
    </div>
    <FooterSection>
      <ButtonBase @click="props.handlerAction" text="Start again" type="primary"/>
    </FooterSection>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
