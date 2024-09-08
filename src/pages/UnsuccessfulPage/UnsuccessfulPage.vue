<script setup lang="ts">

import {LayoutPrimary} from "@/shared/ui-kit/layouts/LayoutPrimary";
import {UnsuccessfulScreen} from "@/widgets/UnsuccessfulScreen";
</script>

<template>
  <LayoutPrimary :display-header="false">
    <UnsuccessfulScreen/>
  </LayoutPrimary>
</template>

