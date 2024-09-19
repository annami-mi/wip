<script setup lang="ts">
import {FooterSection} from "@/shared/ui-kit/data-display/FooterSection";
import {ButtonBase} from "@/shared/ui-kit/buttons/ButtonBase";
import {PriceOptionTab} from "@/entities/Price/ui/PriceOptionTab";
import {PriceOptionInput} from "@/entities/Price/ui/PriceOptionInput";
import {usePriceStore} from "@/entities/Price";
import {computed, inject} from "vue";
import {TypographyBase} from "@/shared/ui-kit/TypographyBase";
// @ts-ignore
import DropIcon from "@/shared/assets/image/drop-2.svg?component"
// @ts-ignore
import CashIcon from "@/shared/assets/image/cash.svg?component"
import {Transaction} from "@/entities/Transaction/model/types.ts";
import mask from "@/shared/mask";

const priceStore = usePriceStore()
const unitName = computed(() => priceStore.unitName)

const transaction = inject('transaction') as Transaction

interface Props {
  handlerNext: (number:number) => void
}
const props = defineProps<Props>()

const onContinue = () => {
  props.handlerNext(1)
}
</script>

<template>
  <div class="price-form">
      <div class="price-form__inputs">
        <div>
          <TypographyBase
              size="p"
              color="text-primary"
              weight="semibold"
              class="price-form__subtitle"
          ><CashIcon/> Vous payez</TypographyBase>

          <PriceOptionInput
              label="F"
              v-model="transaction.price"
              inputmode="numeric"
              maxlength="4"
              :mask="mask.numeric(9999)"
          />
        </div>
        <div>
          <TypographyBase
              size="p"
              color="text-primary"
              weight="semibold"
              class="price-form__subtitle"
          ><DropIcon/> Vous obtenez</TypographyBase>
          <PriceOptionInput
              :label="unitName"
              v-model="transaction.unitValue"
              inputmode="decimal"
              is-readonly
              :mask="mask.decimal(999.9)"
          />
        </div>
      </div>

      <div class="price-form__tabs">
        <PriceOptionTab/>
      </div>
    </div>

    <FooterSection>
      <ButtonBase
          @click="onContinue"
          text="Continuer"
          type="primary"
          :is-disabled="!Number(transaction.unitValue)"
      />
    </FooterSection>
</template>

<style lang="scss">
@import "styles";
</style>
