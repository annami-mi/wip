<script setup lang="ts">

import {LayoutPrimary} from "@/shared/ui-kit/layouts/LayoutPrimary";
import {UnsuccessfulScreen} from "@/widgets/UnsuccessfulScreen";
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
    <UnsuccessfulScreen
        title="Payment unsuccessful"
        description="Try to pay another amount or use another payment provider."
        :handler-action="toTransactionPage"
    />
  </LayoutPrimary>
</template>

