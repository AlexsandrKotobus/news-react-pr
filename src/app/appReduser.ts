import { newsApi } from "@/entities/news/api/newsApi";
import { combineReducers } from "@reduxjs/toolkit";
import  newsReducer  from "@/entities/news/model/newsSlices";
import { categoriesApi } from "@/entities/category/api/categoriesApi";

// редьюсеров мб много
export const rootReducer = combineReducers({
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
});