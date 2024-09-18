import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import newsReducer from './slices/newsSlices'
import { newsApi } from './services/newsApi'

// глобальный store
export const store = configureStore({
  reducer: {
    // это состояние слайса новостей
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()  //так было у меня 

export const useAppDispatch: () => AppDispatch = useDispatch      //так в видео
// export const useAppSelector = useSelector.withTypes<RootState>()      //так было у меня 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector  //так в видео