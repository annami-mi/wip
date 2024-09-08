import {defineStore} from "pinia";
import {ref} from "vue";
import {Price} from "../types.ts";

export const usePriceStore = defineStore('price', () => {
    const costPerUnit = ref<number>(30)
    const currencyName = ref<string>('CFA')
    const currencyNameCut = ref<string>('F')
    const unitName = ref<string>('Liters')
    const unitNameCut = ref<string>('L')
    const ATMNumber = ref<number>(33234)
    const priceList = ref<Price[]>([])

    const unitValueList = [1.5, 5, 10, 20]
    const getCostPerUnitValue = (unitValue: number) => {
        return unitValue * costPerUnit.value
    }

    const getPriceList = () => {
        for(const item of unitValueList){
            priceList.value.push({
                price: getCostPerUnitValue(item),
                unitValue: item
            })
        }
    }

    getPriceList()

    return{
        costPerUnit,
        unitName,
        currencyName,
        currencyNameCut,
        unitNameCut,
        ATMNumber,
        priceList
    }
})
