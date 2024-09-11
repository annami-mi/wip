<script setup lang="ts">
import {LayoutPrimary} from "@/shared/ui-kit/layouts/LayoutPrimary";
import SuccessfulScreen from "@/widgets/SuccessfulScreen/SuccessfulScreen.vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const toTransactionPage = () => {
  const id = route.query.id as string
  router.push({path: `/start/${id}`})
}
</script>

<template>
  <LayoutPrimary :display-header="false">
    <SuccessfulScreen :handler-action="toTransactionPage"/>
  </LayoutPrimary>
</template>

