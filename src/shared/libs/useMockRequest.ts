import {ErrorResponse} from "@/shared/libs/useFetch.ts";

const fetchErrors: Record<number, string> = {
    500: 'Server error. Please try again later or contact the support',
    422: 'Data processing error. Please contact the Care Service.',
    408: 'The timeout has expired. Please try again later',
}

export interface UseMockUpArguments<T>{
    STATUS: number,
    ERRORS: Record<number, string>,
    BODY: T
}

type UseMockRequest = <T>(args:UseMockUpArguments<T>) => Promise<{status: number, data: T}>

export const useMockRequest: UseMockRequest = <T>({STATUS, ERRORS, BODY}: UseMockUpArguments<T>) => {
    return new Promise((resolve, reject) => {
        if (STATUS !== 200) {
            reject(new ErrorResponse(ERRORS[STATUS] || fetchErrors[STATUS] || 'Unknown bug', STATUS, ERRORS));
        } else {
            resolve({
                status: STATUS,
                // @ts-ignore
                data: BODY as T
            });
        }
    });
}
