import { useEffect, useState } from "react"
// это функция, которая «откладывает» вызов другой функции до того момента, 
// когда с последнего вызова пройдёт определённое количество времени.
// похволяет нам сделать 1 запрос на набираемое слова а не по каждой вновь добавленной букве
export const useDebounce =(value: string, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        return ()=> {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debounceValue;
}