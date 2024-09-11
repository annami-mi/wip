import {CHECK_DEVICE_URL} from "../../../shared/config";
import Repository from "../../../shared/repositories/Repository.ts";

type checkDeviseRequest = {deviceId: string}
export type checkDeviseResponse = {
    success: true,
    data: {
        price: number,
        currencyCode: string,
        number: number
    }
}
export default {
    checkDevice(body: checkDeviseRequest){
        return Repository.post<checkDeviseResponse, checkDeviseRequest>({
            RESOURCE: CHECK_DEVICE_URL,
            ERRORS: {},
            BODY: body
        })
    }
}
