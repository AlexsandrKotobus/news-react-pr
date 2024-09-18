import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CategoriesApiResponse, NewsApiResponse, ParamsType } from '../../interfaces'
import { setNews } from '../slices/newsSlices';
// import { getCategories } from '../../api/apiNews';

const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY=import.meta.env.VITE_NEWS_API_KEY

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // для NewsByFilters
    getNews: builder.query<NewsApiResponse, ParamsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        // с ApiNews
        const{
            page_number=1, 
            page_size=10, 
            category, 
            keywords,
        } = params || {};
        return {
          // url - минимальное поле, ост мб необязательные
            url: 'search',
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords
                },
                // тут еще можно добавлять body, headers 
            };
        },
        async onQueryStarted(_arg, {dispatch, queryFulfilled}){
          // достаем результатт выполнения нашего запроса
          const result = await queryFulfilled;
          // data - Это NewsApiResponce
          const data = result.data;
          // задиспачим нашу data в глобальное состояние
          dispatch(setNews(data.news));
        }
      }),
      // для LatestNews
      getLatestNews: builder.query<NewsApiResponse, null>({
        query: () => {
          return {
            // url - минимальное поле, ост мб необязательные, добавляется к нашей базовой url, которую мы указали выше 
              url: 'latest-news',
              params: {
                  apiKey: API_KEY,
                  },
                  // тут еще можно добавлять body, headers 
              };
          },
        }),
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


export const { useGetNewsQuery, useGetLatestNewsQuery, useGetCategoriesQuery } = newsApi

