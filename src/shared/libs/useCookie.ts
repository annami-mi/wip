import { APP_NAME } from '@/shared/config'

interface IUseCookie{
    value: string
    setCookieValue: (value: string, days?: number) => void
}

function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
        const cookieValue = parts.pop(); // Здесь cookieValue будет

        if (cookieValue) { // Проверка на undefined
            const cleanValue = cookieValue.split(';').shift();
            return cleanValue ? cleanValue : null;
        }
    }

    return null; // Если не нашли cookie
}

function setCookie(name: string, value: string, days: number): void {
    const date = new Date();

    // Если days не передан, делаем срок жизни куки "бессрочным"
    if (days) {
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    } else {
        // Устанавливаем куки на 10 лет вперед
        date.setTime(date.getTime() + (10 * 365 * 24 * 60 * 60 * 1000)); // 10 лет
    }

    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

export function useCookie(key: string, initialValue: string = ''): IUseCookie {

    const keyCookie = `${APP_NAME}:${key}`

    const valueCookie = getCookie(keyCookie)
    const value: string = valueCookie ? valueCookie : initialValue

    function setCookieValue(value: string, days: number = 30): void {
        setCookie(keyCookie, value, days)
    }

    return { value, setCookieValue }
}
