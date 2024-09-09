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
    const getCostPerUnitValue = (unitValue: string) => {
        if(unitValue.includes(',')){
            unitValue.replace(',', '.')
        }
        return (Number(unitValue) * costPerUnit.value).toString()
    }
    const getUnitValuePerCost = (cost: string) => {
        if(cost.includes(',')){
            cost.replace(',', '.')
        }
        return (Number(cost) / costPerUnit.value).toString()
    }

    const getPriceList = () => {
        for(const item of unitValueList){
            priceList.value.push({
                price: getCostPerUnitValue(item.toString()),
                unitValue: item.toString()
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
        priceList,
        getUnitValuePerCost,
        getCostPerUnitValue
    }
})
