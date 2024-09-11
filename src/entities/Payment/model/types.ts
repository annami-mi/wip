export interface Payment{
    id: PaymentId,
    name: string,
    image: string,
}

type PaymentId = 'wave' |'orange'
