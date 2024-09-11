<script setup lang="ts">
import {LayoutPrimary} from "@/shared/ui-kit/layouts/LayoutPrimary";
import SuccessfulScreen from "@/widgets/SuccessfulScreen/SuccessfulScreen.vue";
import {useRoute, useRouter} from "vue-router";
import {SessionApi} from "@/entities/Session";
import {checkDeviseResponse} from "@/entities/Session/api/repository.ts";
import {usePriceStore} from "@/entities/Price";
import {computed, onMounted} from "vue";

const route = useRoute()
const router = useRouter()
const toTransactionPage = () => {
  const id = route.query.id as string
  router.push({path: `/start/${id}`})
}

onMounted(() => {
  checkDevice()
})

const checkDevice = async () => {
  const id = route.params.id as string
  try{
    const {data} = await SessionApi.checkDevice({deviceId: id})
    if(data.success){
      setPrice(data.data)
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

const price = computed(() => priceStore.costPerUnit)
</script>

<template>
  <LayoutPrimary :display-header="price">
    <SuccessfulScreen :handler-action="toTransactionPage"/>
  </LayoutPrimary>
</template>

