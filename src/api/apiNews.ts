import axios from "axios";
import { INews, CategoriesType } from "../interfaces";

const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY=import.meta.env.VITE_NEWS_API_KEY

// VITE_NEWS_API_KEY=CeBOB1LsL1SZPFQRPqyKH0ZSGr8OYbbgU8NN6GjivfKCF3Gx
// VITE_NEWS_BASE_API_URL=https://api.currentsapi.services/v1/

// // const BASE_URL= api.currentsapi.services/v1/
// const API_KEY='CeBOB1LsL1SZPFQRPqyKH0ZSGr8OYbbgU8NN6GjivfKCF3Gx'
// VITE_NEWS_API_KEY
// console.log(import.meta.env.VITE_NEWS_BASE_API_URL) // 
// console.log(import.meta.env.VITE_NEWS_API_KEY) // undefined
// console.log('BASE_URL', `${BASE_URL}latest-news`)

enum Status {
    Error = 'error',
    Ok = 'ok'
}

// интерфейс ответа на запрос
export interface NewsApiResponse {
    news: INews[];
    page: number;
    status: Status;
}
// интерфейс начальных параметров
export interface IParams {
    page_number?: number;
    page_size?: number;
    category?: CategoriesType | null;
    keywords?: string;
}


// запрос на новости с категориями и поиском
export const getNews= async ({
    page_number=1, 
    page_size=10, 
    category, 
    keywords
} : IParams) : Promise<NewsApiResponse> => {
    try{
        const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords
            }
        })
        // console.log(response.data)
        return response.data;
    }
    catch(error){
        console.log(error);
        return {news:[], page: 1, status: Status.Error}
    }
}
// запрос на последние новости
export const getLatestNews = async () => {
    try{
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY,
            }
        })
        // console.log(response.data)
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
// запрос на категории
export const getCategories = async () => {
    try{
        const response = await axios.get(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,
            }
        })
        console.log("categor ",response.data)
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}