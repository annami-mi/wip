export const APP_NAME = getEnvVar('VITE_APP_NAME')
export const HELP_TEL = getEnvVar('VITE_APP_HELP_TEL')
export const TOKEN_KEY = 'token'

export const CHECK_DEVICE_URL = getEnvVar('VITE_APP_BASEURL') + getEnvVar('VITE_APP_CHECK_DEVICE')
export const POST_TRANSACTION_URL = getEnvVar('VITE_APP_BASEURL') + getEnvVar('VITE_APP_POST_TRANSACTION')

function getEnvVar(key: string) {
    // @ts-ignore
    const envVar = import.meta.env[key]
    if (envVar === undefined) {
        throw new Error(`Env variable ${key} is required`)
    }
    return envVar
}


// isOpen === true значит запрос открыт и ходит на сервер
// ***
// status нужен для имитации ошибок при тестовых запросах
// игнорируется если isOpen === true
// ***
// result === undefined значит в консоль выведет то, что тело запроса,
// если result !== undefined то это значение и выведет
export class FetchRequestConfig{
    constructor(
        readonly isOpen: boolean,
        readonly url: string,
        readonly errors: Record<number, string>,
        readonly testStatus: number = 200,
        readonly testResult: any = undefined
    ) {}
}
