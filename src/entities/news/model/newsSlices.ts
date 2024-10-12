import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { INews } from './types'
import { PAGE_SIZE } from '../../../shared/constants/constants';
import { IFilters } from '@/shared/interfaces';


interface State {
  news: INews[];
  filters: IFilters;
  currentNews: INews | null;
}

const initialState: State = {
  currentNews: null,
  news: [],
  filters: {
      page_number: 1,
      page_size: PAGE_SIZE,
      category: null,
      keywords: '',
  }
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // эта функция будет изменять состояние в slice
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload
    },
    // 
    setCurrentNews: (state, action: PayloadAction<INews | null>) => {
      state.currentNews = action.payload
    },
    // диспатч-функция
    // из return из useFilters 
    // принимаем PayloadAction, экшен - это объект, 
    setFilters: (state, action: PayloadAction<{key: string, value: string | null | number}>) => {
      const {key, value } = action.payload
      // из return из useFilters, добавим все предыдущие фильтры и обновим новое значение фильтра
      state.filters = {...state.filters, [key]: value}
    }
  },
})
// и добавляем setFilters
export const { setNews, setFilters, setCurrentNews } = newsSlice.actions


export default newsSlice.reducer;