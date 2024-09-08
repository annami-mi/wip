<script setup lang="ts">

import {HeaderSection} from "@/shared/ui-kit/data-display/HeaderSection";
import {WarningBase} from "@/shared/ui-kit/data-display/WarningBase";
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";
import {FooterSection} from "@/shared/ui-kit/data-display/FooterSection";
import {ButtonBase} from "@/shared/ui-kit/buttons/ButtonBase";
import {ButtonLink} from "@/shared/ui-kit/buttons/ButtonLink";
import {TransactionPayment} from "@/entities/Transaction/ui/TransactionPayment";
import {TransactionOptions} from "@/entities/Transaction/ui/TransactionOptions";

interface Props {
  handlerNext: (number:number) => void
  handlerPrev: (number:number) => void
  handlerChangePayment: () => void
  handlerChangePriceOption: () => void
}

const props = defineProps<Props>()

const onPay = () => {
  props.handlerNext(3)
}
const onBack = () => {
  props.handlerPrev(3)
}
</script>

<template>
  <div class="order-screen">
    <HeaderSection>
      <template #title>Confirmation</template>
      <template #slot>
        <WarningBase>
          <TypographyBase size="p" color="text-primary" weight="semibold">
            As soon as you pay the fund will be sent to the device. Make sure you’re there and no one is using the device.
          </TypographyBase>
        </WarningBase>
      </template>
    </HeaderSection>

    <div class="order-screen__body">
      <div class="order-screen__body__section">
        <div class="order-screen__subtitle">
          <TypographyBase size="p" color="text-primary" weight="semibold">You pay</TypographyBase>
          <ButtonLink @click="props.handlerChangePriceOption" text="Change"/>
        </div>
        <TransactionOptions/>
      </div>
      <div class="order-screen__body__section">
        <div class="order-screen__subtitle">
          <TypographyBase size="p" color="text-primary" weight="semibold">Payment method</TypographyBase>
          <ButtonLink @click="props.handlerChangePayment" text="Change"/>
        </div>
        <TransactionPayment/>
      </div>
    </div>

    <FooterSection>
      <ButtonBase @click="onBack" text="Back" type="secondary"/>
      <ButtonBase @click="onPay" text="Pay" type="primary"/>
    </FooterSection>
  </div>
</template>

<style scoped lang="scss">
@import "styles";
</style>
