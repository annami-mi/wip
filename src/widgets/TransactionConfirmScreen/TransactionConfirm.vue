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
  handlerNext: () => void
  handlerPrev: () => void
  handlerChangePayment: () => void
  handlerChangePriceOption: () => void
}

const props = defineProps<Props>()

const onPay = () => {
  props.handlerNext()
}
const onBack = () => {
  props.handlerPrev()
}
</script>

<template>
  <div class="order-screen">
    <HeaderSection>
      <template #title>Confirmation</template>
      <template #slot>
        <WarningBase>
          <TypographyBase size="p" color="text-primary" weight="semibold">
            Dès que vous aurez payé, le montant sera envoyé sur la machine. Assurez-vous d'être présent et que personne d'autre n'utilise la machine.
          </TypographyBase>
        </WarningBase>
      </template>
    </HeaderSection>

    <div class="order-screen__body">
      <div class="order-screen__body__section">
        <div class="order-screen__subtitle">
          <TypographyBase size="p" color="text-primary" weight="semibold">Vous payez</TypographyBase>
          <ButtonLink @click="props.handlerChangePriceOption" text="Modifier"/>
        </div>
        <TransactionOptions/>
      </div>
      <div class="order-screen__body__section">
        <div class="order-screen__subtitle">
          <TypographyBase size="p" color="text-primary" weight="semibold">Mode de paiement</TypographyBase>
          <ButtonLink @click="props.handlerChangePayment" text="Modifier"/>
        </div>
        <TransactionPayment/>
      </div>
    </div>

    <FooterSection>
      <ButtonBase @click="onBack" text="Retour" type="secondary"/>
      <ButtonBase @click="onPay" text="Payez" type="primary"/>
    </FooterSection>
  </div>
</template>

<style scoped lang="scss">
@import "styles";
</style>
