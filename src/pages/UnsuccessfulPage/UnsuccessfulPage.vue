<script setup lang="ts">

import {LayoutPrimary} from "@/shared/ui-kit/layouts/LayoutPrimary";
import {UnsuccessfulScreen} from "@/widgets/UnsuccessfulScreen";
import {useRouter} from "vue-router";

const router = useRouter()
const toTransactionPage = () => {
  router.push({path: '/'})
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

