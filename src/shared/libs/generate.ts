export function generateId(): string {
    const array = new Uint8Array(26); // Создаем массив на 26 байт
    window.crypto.getRandomValues(array); // Заполняем массив случайными значениями

    return Array.from(array, (byte) => {
        return (byte % 36).toString(36); // Преобразуем каждый байт в символ 36-й системы счисления
    }).join('').substring(0, 26); // Объединяем и возвращаем только 26 символов
}
