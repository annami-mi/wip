export const useDebounce = <T, U>(callback: (arg?:T) => U, delay: number) => {
    let timeout: any// объяевляем timeout

    // должна возвращаться функция
    return (args?: T) => {
        if(timeout){
            // если таймер уже запланирован, то останавливаем тот план
            clearTimeout(timeout)
        }

        // планируем функцию
        timeout = setTimeout(() => {
            callback(args)
        }, delay)
    }
}
