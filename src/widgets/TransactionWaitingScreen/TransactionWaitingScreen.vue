<script setup lang="ts">
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";
import {HeaderSection} from "@/shared/ui-kit/data-display/HeaderSection";
import {inject, onMounted, reactive} from "vue";
import {FooterSection} from "@/shared/ui-kit/data-display/FooterSection";
import {ButtonBase} from "@/shared/ui-kit/buttons/ButtonBase";
// @ts-ignore
import TelIcon from "@/shared/assets/image/tel.svg?component"
// @ts-ignore
import ClockIcon from "@/shared/assets/image/clock.svg?component"
import {HELP_TEL} from "@/shared/config";
import {Transaction} from "@/entities/Transaction/model/types.ts";
import {useRoute} from "vue-router";
import {TransactionApi} from "@/entities/Transaction";
import {useSessionStore} from "@/entities/Session/model/stores";

interface Props {
  handlerError: any
}
const props = defineProps<Props>()

const transaction = inject('transaction') as Transaction

const state = reactive({
  time: '',
})

onMounted(() => {
  postTransaction()
  timer(15)
})

const route = useRoute();
const sessionStore = useSessionStore()
const postTransaction = async () => {
  const id = route.params.id as string
  try{
    const {data} = await TransactionApi.post({
      deviceId: id,
      provider: transaction.payment.id,
      amount: Number(transaction.price),
      matchCode: sessionStore.token
    })
    if(data.success){
      window.location.href = data.data.redirectUrl;
    } else {
      props.handlerError()
    }
  } catch (e){
    props.handlerError()
  }
}

const timer = (seconds: number) => {
  let timeRemaining = seconds; // принимает количество секунд
  state.time = `${(timeRemaining % 60).toString()}`; // выводит начальное время

  const counter = setInterval(() => {
    if (timeRemaining <= 0) {
      // время закончилось
      state.time = '';
      clearInterval(counter); // удаляет таймер
    } else {
      let remainingSeconds = timeRemaining % 60; // высчитывает секунды
      state.time = `${remainingSeconds.toString()}`; // выводит оставшееся время
      --timeRemaining; // уменьшает таймер
    }
  }, 1000);
}
</script>

<template>
  <div class="transaction-screen">
    <HeaderSection>
      <template #title>Confirmez le paiement dans {{transaction.payment.name}} l'application</template>
      <template #description>En attente d'une réponse de {{transaction.payment.name}}...</template>
    </HeaderSection>

    <img class="transaction-screen__image" src="@/shared/assets/image/image-1.png" alt="Confirm payment">

    <FooterSection>
      <TypographyBase v-if="state.time" color="text-primary" size="p" weight="semibold" class="timer">
        <ClockIcon/>Merci de réessayer dans {{state.time}}S
      </TypographyBase>
      <template v-else>
        <ButtonBase tag="a" :href="`tel:${HELP_TEL}`" text="Aide" type="secondary" size="small">
          <template #prefix><TelIcon/></template>
        </ButtonBase>
        <ButtonBase @click="postTransaction" text="Merci de réessayer" type="primary" size="small"/>
      </template>
    </FooterSection>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
