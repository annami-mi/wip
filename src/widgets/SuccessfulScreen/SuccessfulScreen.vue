<script setup lang="ts">
import {FooterSection} from "@/shared/ui-kit/data-display/FooterSection";
import {ButtonBase} from "@/shared/ui-kit/buttons/ButtonBase";
import {HeaderSection} from "@/shared/ui-kit/data-display/HeaderSection";
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";
interface Props{
  handlerAction: any
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <HeaderSection>
      <template #title>Appuyez sur le bouton <TypographyBase tag="span" size="h1" color="success" weight="black">vert</TypographyBase> de la machine Kaynann pour commencer le remplissage.</template>
    </HeaderSection>
    <div class="successful-screen__body">
      <img src="@/shared/assets/image/image-2.png" alt="successful" class="successful-page__screen__image">
    </div>
    <FooterSection>
      <ButtonBase @click="props.handlerAction" text="Ajouter plus d'argent" type="secondary"/>
    </FooterSection>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
