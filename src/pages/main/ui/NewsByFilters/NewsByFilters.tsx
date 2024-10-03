import { useAppDispatch, useAppSelector } from '@/app/appStore';
import NewsFilters from '../NewsFilters/NewsFilters';
import styles from './styles.module.css';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { setFilters } from '@/entities/news/model/newsSlices';
import { TOTAL_PAGES } from '@/shared/constants/constants';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { NewsList } from '@/widgets/news/ui';
import { Pagitation } from '@/features/pagination';


const NewsByFilters = () => {
    const dispatch = useAppDispatch()
    const filters = useAppSelector(state => state.news.filters)
    // news - массив новостей
    const news = useAppSelector(state => state.news.news)


    const debounceKeyword = useDebounce(filters.keywords, 1500);

//убрали из параметров error { data, error,  isLoading}
    const {
//пока удалим
         data,  
        isLoading} = useGetNewsQuery({
        ...filters,
        keywords: debounceKeyword,
    });
      // переключение вперед
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

    return (
        <section className={styles.section}>
            <NewsFilters  filters={filters} />
         
            {/* пагинация */}
            <Pagitation  
                    top 
                    bottom 
                    handleNextPage={handleNextPage} 
                    handlePreviousPage = {handlePreviousPage}  
                    handlePageClick = {handlePageClick} 
                    totalPages={TOTAL_PAGES}
                    currentPage = {filters.page_number} 
                    >
            
                 <NewsList isLoading={isLoading} news={news}/>
            </Pagitation >
         
        </section>
    );
}

export default NewsByFilters;
