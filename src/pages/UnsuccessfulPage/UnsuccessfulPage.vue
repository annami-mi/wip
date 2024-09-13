<script setup lang="ts">

import {LayoutPrimary} from "@/shared/ui-kit/layouts/LayoutPrimary";
import {UnsuccessfulScreen} from "@/widgets/UnsuccessfulScreen";
import {useRoute, useRouter} from "vue-router";
import {onMounted, reactive} from "vue";
import {SessionApi} from "@/entities/Session";
import {usePriceStore} from "@/entities/Price";
import {checkDeviseResponse} from "@/entities/Session/api/repository.ts";

const route = useRoute()
const router = useRouter()
const toTransactionPage = () => {
  const id = route.query.did as string
  router.push({path: `/start/${id}`})
}

onMounted(async () => {
  await checkDevice()
})

const checkDevice = async () => {
  const id = route.query.did as string
  try{
    const {data} = await SessionApi.checkDevice({deviceId: id})
    if(data.success){
      setPrice(data.data)
      state.displayHeader = true
    }
  } catch (e){
    console.log(e)
  }
}

const state = reactive({
  displayHeader: false
})

const priceStore = usePriceStore()
const setPrice = (data: checkDeviseResponse["data"]) => {
  priceStore.costPerUnit  = data.price
  priceStore.currencyName = data.currencyCode.toUpperCase()
  priceStore.ATMNumber = data.number
}
</script>

<template>
  <LayoutPrimary :display-header="state.displayHeader">
    <UnsuccessfulScreen
        title="Payment unsuccessful"
        description="Try to pay another amount or use another payment provider."
        :handler-action="toTransactionPage"
    />
  </LayoutPrimary>
</template>

