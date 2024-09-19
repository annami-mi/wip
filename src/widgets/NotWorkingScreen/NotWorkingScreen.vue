<script setup lang="ts">
import {FooterSection} from "@/shared/ui-kit/data-display/FooterSection";
import {ButtonBase} from "@/shared/ui-kit/buttons/ButtonBase";
import {HeaderSection} from "@/shared/ui-kit/data-display/HeaderSection";

interface Props{
  handlerAction: () => Promise<void>
}
const props = defineProps<Props>()
</script>

<template>
  <div class="not-working-screen">
    <HeaderSection>
      <template #title>Cette machine ne fonctionne pas actuellement.</template>
      <template #description>Veuillez réessayer plus tard ou utiliser une autre machine.</template>
    </HeaderSection>
    <div class="not-working-screen__body">
      <img src="@/shared/assets/image/image-3.png" alt="not-working" class="not-working-screen__body__image">
    </div>
    <FooterSection>
      <ButtonBase @click="props.handlerAction" text="Merci de réessayer" type="primary"/>
    </FooterSection>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
