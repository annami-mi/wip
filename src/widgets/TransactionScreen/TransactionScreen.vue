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

const transaction = inject('transaction') as Transaction

const state = reactive({
  time: '',
})

onMounted(() => {
  timer(15)
})

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
      <template #title>Confirm payment in {{transaction.payment.name}} app</template>
      <template #description>Waiting for respond from {{transaction.payment.name}}...</template>
    </HeaderSection>

    <img class="transaction-screen__image" src="@/shared/assets/image/image-1.png" alt="Confirm payment">

    <FooterSection>
      <TypographyBase v-if="state.time" color="text-primary" size="p" weight="semibold" class="timer">
        <ClockIcon/>Try again in {{state.time}}S
      </TypographyBase>
      <template v-else>
        <ButtonBase tag="a" :href="`tel:${HELP_TEL}`" text="Support" type="secondary" size="small">
          <template #prefix><TelIcon/></template>
        </ButtonBase>
        <ButtonBase text="Try Again" type="primary" size="small"/>
      </template>
    </FooterSection>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
