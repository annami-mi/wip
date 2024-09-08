<script setup lang="ts">
import {LayoutPrimary} from "@/shared/ui-kit/layouts/LayoutPrimary";
import SuccessfulScreen from "@/widgets/SuccessfulScreen/SuccessfulScreen.vue";
</script>

<template>
  <LayoutPrimary :display-header="false">
    <SuccessfulScreen/>
  </LayoutPrimary>
</template>

