import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CategoriesApiResponse } from '../model/types';


const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY=import.meta.env.VITE_NEWS_API_KEY

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',


  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({

      // запрос на категории
      getCategories: builder.query<CategoriesApiResponse, null>({
        query: () => {
          return {
            // url - минимальное поле, ост мб необязательные, добавляеться к нашей базовой url, которую мы указали выше 
              url: 'available/categories',
              params: {
                  apiKey: API_KEY,
                  },
                  // тут еще можно добавлять body, headers 
              };
          },
        }),
    }),
  });


export const {  useGetCategoriesQuery } = categoriesApi;

