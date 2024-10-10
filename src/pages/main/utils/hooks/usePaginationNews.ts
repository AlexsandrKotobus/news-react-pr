import { useAppDispatch } from "@/app/appStore"
import { setFilters } from "@/entities/news/model/newsSlices"
import { TOTAL_PAGES } from "@/shared/constants/constants"
import { IFilters } from "@/shared/interfaces"

export const usePaginationNews = (filters: IFilters) => {
const dispatch = useAppDispatch()

      const handleNextPage = () => {
          if (filters.page_number < TOTAL_PAGES) {
            //   changeFilter('page_number', filters.page_number + 1);
              dispatch(setFilters({key: 'page_number', value: filters.page_number + 1}))
            
          }
      }
      // переключение назад
      const handlePreviousPage = () => {
          if (filters.page_number > 1) {
            //   changeFilter('page_number', filters.page_number - 1);
              dispatch(setFilters({key: 'page_number', value: filters.page_number - 1}))
          }
      }
      // переключение по номеру страницы
      const handlePageClick = (pageNumber : number) => {
        //   changeFilter('page_number', pageNumber);
          dispatch(setFilters({key: 'page_number', value: pageNumber}))
      }


    return {
        handleNextPage, handlePreviousPage, handlePageClick
    };
}