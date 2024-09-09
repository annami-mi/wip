import Repository from "@/shared/repositories/Repository.ts";
import {POST_TRANSACTION_URL} from "@/shared/config";

type postRequest = {
    deviceId: string,
    provider: string,
    amount: number,
    matchCode: string
}
type postResponse = {
    success: true,
    data: {
        redirectUrl: string,
        paymentId: string
    }
}
export default {
    post(body: postRequest){
        return Repository.post<postResponse, postRequest>({
            RESOURCE: POST_TRANSACTION_URL,
            ERRORS: {},
            BODY: body
        })
    }
}
