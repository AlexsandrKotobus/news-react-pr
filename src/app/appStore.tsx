import { newsApi } from "../entities/news/api/newsApi"
import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"
import { rootReducer } from "./appReduser"
import { categoriesApi } from "@/entities/category/api/categoriesApi"

// глобальный store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware, categoriesApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;      
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 

// function newsReducer(state: unknown, action: UnknownAction): unknown {
//     throw new Error("Function not implemented.")
// }
