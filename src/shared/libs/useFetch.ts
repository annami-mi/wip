interface RequestSettings {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; // Определение поддерживаемых методов
    headers: Record<string, string>; // Объект с заголовками запроса, где ключ - строка, значение - строка
    body?: string | FormData | Blob | ArrayBufferView | URLSearchParams | ReadableStream<Uint8Array> | null; // Тело запроса может быть строкой, объектом FormData и другими типами
}

export class ErrorResponse {
    constructor(
        public message: string,
        public status: number,
        public data: any,
    ) {}
}

export interface UseFetchArguments<T, U>{
    METHOD: 'GET' | 'POST',
    RESOURCE:string,
    ERRORS: Record<number, string>,
    BODY: U,
    ADAPTER?: (dirty: any) => T
}

type UseFetch = <T, U>(args: UseFetchArguments<T, U>) => Promise<{status: number, data: T}>

const errors: Record<number, string> = {
    500: 'Ошибка сервера. Пожалуйста, попробуйте позже или обратитесь в службу заботы',
    422: 'Ошибка обработки данных. Пожалуйста, обратитесь в службу заботы',
    408: 'Время ожидания истекло. Пожалуйста, попробуйте повторить позже',
}

export const useFetch: UseFetch = async <T, U>({ METHOD, RESOURCE, ERRORS, BODY, ADAPTER }: UseFetchArguments<T, U>) => {
    const resource = new URL(RESOURCE)
    const request:RequestSettings = {
        method: METHOD,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'accept': 'application/json'
        }
    };

    if (METHOD === 'GET' && BODY){
        Object.entries(BODY).forEach(([key, value]) => {
            if(value != null){
                //@ts-ignore
                resource.searchParams.append(key, value)
            }
        });
    }

    if (METHOD === 'POST'){
        request.body = JSON.stringify(BODY)
    }

    try{
        const response = await fetch(resource, request)
        const status = response.status
        let data = await response.json()
        if(status >= 200 && status <= 300){
            // успех
            if(ADAPTER){
                data = ADAPTER(data)
            }
            return {
                status,
                data
            }
        } else {
            // ошибка
            throw new ErrorResponse(ERRORS[response.status] || errors[response.status]|| data.detail || "Неизвестная ошибка", status, data as T)
        }
    } catch (error) {
        if (error instanceof ErrorResponse) {
            throw {
                message: error.message,
                status: error.status || 500,
                data: error.data as T
            };
        } else {
            console.log(error)
            throw {
                message: "Сервисная ошибка", // чтобы не было fetch failed
            };
        }
    }
}
