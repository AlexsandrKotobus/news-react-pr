﻿import {useEffect, useState} from 'react';
//   useFetch  - кастомный хук для загрузки данных с сервера

interface FetchFunction<P, T> {
    (params?: P): Promise<T>
}

interface UseFetchResult<T>{
    data: T | null | undefined;
    isLoading: boolean;
    error: Error | null
}

export const useFetch = <T, P>(
    fetchFunction: FetchFunction<P, T>, params?: P
): UseFetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const stringParams = params ? new URLSearchParams(params).toString()  : '';

    useEffect(()=> {
        (async ()=> {
            try {
                setLoading(true)
                const result =  await fetchFunction(params)
                setData(result)
            } catch (error) {
                setError(error as Error)
            } finally{
                setLoading(false)
            }
        })()

    }, [fetchFunction, stringParams])
    return {data, isLoading, error}
}
