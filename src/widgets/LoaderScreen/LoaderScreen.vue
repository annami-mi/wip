<script setup lang="ts">
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";
import {LoaderLine} from "@/shared/ui-kit/data-display/LoaderLine";
</script>

<template>
    <div class="loader-screen">
      <div>
        <LoaderLine class="loader-screen__line"/>
        <TypographyBase
            :size="'h2'"
            :weight="'black'"
            :tag="'div'"
            class="loader-screen__title"
            color="text-primary"
        >Connecting to ATM</TypographyBase>
      </div>
    </div>
</template>

<style lang="scss">
@import "styles";
</style>
