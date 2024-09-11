<script setup lang="ts">

import {LayoutPrimary} from "@/shared/ui-kit/layouts/LayoutPrimary";
import EnjoyScreen from "@/widgets/EnjoyScreen/EnjoyScreen.vue";
import {onMounted, reactive} from "vue";
import {SessionApi} from "@/entities/Session";
import {usePriceStore} from "@/entities/Price";
import {checkDeviseResponse} from "@/entities/Session/api/repository.ts";
import {useRoute, useRouter} from "vue-router";

onMounted(async () => {
  await checkDevice()
})

const state = reactive({
  displayHeader: false
})


const route = useRoute()
const checkDevice = async () => {
  const id = route.query.id as string
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

const priceStore = usePriceStore()
const setPrice = (data: checkDeviseResponse["data"]) => {
  priceStore.costPerUnit  = data.price
  priceStore.currencyName = data.currencyCode.toUpperCase()
  priceStore.ATMNumber = data.number
}

const toTransactionPage = () => {
  const id = route.query.id as string
  router.push({path: `/start/${id}`})
}

const router = useRouter()
</script>

<template>
  <LayoutPrimary :display-header="state.displayHeader">
    <EnjoyScreen :handler-action="toTransactionPage"/>
  </LayoutPrimary>
</template>
