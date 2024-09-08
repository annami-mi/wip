<script setup lang="ts">
import {FooterSection} from "@/shared/ui-kit/data-display/FooterSection";
import {ButtonBase} from "@/shared/ui-kit/buttons/ButtonBase";
import {HeaderSection} from "@/shared/ui-kit/data-display/HeaderSection";
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";
</script>

<template>
  <div>
    <HeaderSection>
      <template #title>Press <TypographyBase tag="span" size="h1" color="success" weight="black">Green</TypographyBase> button on Kaynann ATM to start the filling</template>
    </HeaderSection>
    <div class="successful-screen__body">
      <img src="@/shared/assets/image/image-2.png" alt="successful" class="successful-page__screen__image">
    </div>
    <FooterSection>
      <ButtonBase text="Add more funds" type="secondary"/>
    </FooterSection>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
