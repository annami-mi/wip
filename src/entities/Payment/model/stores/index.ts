import {defineStore} from "pinia";
import {ref} from "vue";
import {Payment} from "../types.ts";

export const usePaymentStore = defineStore('payment', () => {
    const paymentList = ref<Payment[]>([
        {
            id: 'wave',
            name: 'Wave',
            image: "@/shared/assets/image/wave.png"
        },
        {
            id: 'orange',
            name: 'Orange money',
            image: "/orange-money.png"
        },
    ])

    return{
        paymentList
    }
})
