<script setup lang="ts">
import {LayoutPrimary} from "@/shared/ui-kit/layouts/LayoutPrimary";
import SuccessfulScreen from "@/widgets/SuccessfulScreen/SuccessfulScreen.vue";
import {useRoute, useRouter} from "vue-router";
import {SessionApi} from "@/entities/Session";
import {checkDeviseResponse} from "@/entities/Session/api/repository.ts";
import {usePriceStore} from "@/entities/Price";
import {onMounted, reactive} from "vue";

const route = useRoute()
const router = useRouter()
const toTransactionPage = () => {
  const id = route.query.id as string
  router.push({path: `/start/${id}`})
}

onMounted(async () => {
  await checkDevice()
})

const state = reactive({
  displayHeader: false
})

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

</script>

<template>
  <LayoutPrimary :display-header="state.displayHeader">
    <SuccessfulScreen :handler-action="toTransactionPage"/>
  </LayoutPrimary>
</template>

