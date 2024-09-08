import {defineStore} from "pinia";
import {ref} from "vue";
import {Payment} from "../types.ts";

export const usePaymentStore = defineStore('payment', () => {
    const paymentList = ref<Payment[]>([
        {
            id: 1,
            name: 'Wave',
            image: "/wave.png"
        },
        {
            id: 2,
            name: 'Orange money',
            image: "/orange-money.png"
        },
    ])

    return{
        paymentList
    }
})
