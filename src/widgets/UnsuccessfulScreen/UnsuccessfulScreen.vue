<script setup lang="ts">
import {HeaderSection} from "@/shared/ui-kit/data-display/HeaderSection";
import {ButtonBase} from "@/shared/ui-kit/buttons/ButtonBase";
import {FooterSection} from "@/shared/ui-kit/data-display/FooterSection";

interface Props{
  title: string,
  description:string,
  handlerAction: any
}

const props = defineProps<Props>()

</script>

<template>
<div>
  <HeaderSection>
    <template #title>{{props.title}}</template>
    <template #description>{{props.description}}</template>
  </HeaderSection>
  <div class="unsuccessful-screen__body">
    <img src="@/shared/assets/image/image-4.png" alt="unsuccessful" class="unsuccessful-screen__body__image">
  </div>
  <FooterSection>
    <ButtonBase @click="props.handlerAction(2)" text="Merci de réessayer" type="primary"/>
  </FooterSection>
</div>
</template>

<style lang="scss">
@import "styles";
</style>
