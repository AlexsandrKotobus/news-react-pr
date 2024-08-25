import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'
// import Pagination from '../Pagination/Pagination';
import styles from './styles.module.css';
import NewsList from '../NewsList/NewsList'
import NewsFilters from '../NewsFilters/NewsFilters';
import { useFilters } from '../../helpers/hooks/useFilters';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFetch } from '../../helpers/hooks/useFetch';
import { getNews } from '../../api/apiNews';
import PagitationWrapper from '../PagitationWrapper/PagitationWrapper';
import { NewsApiResponse, ParamsType } from '../../interfaces';


const NewsByFilters = () => {
    const {filters, changeFilter} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    })
 
    const debounceKeyword = useDebounce(filters.keywords, 1500);

    const {data, isLoading} = useFetch<NewsApiResponse, ParamsType>(getNews, {
       ...filters,
        keywords: debounceKeyword,
    })

//   const {data: dataCategories} = useFetch(getCategories)

      // переключение вперед
      const handleNextPage = () => {
          if (filters.page_number < TOTAL_PAGES) {
              changeFilter('page_number', filters.page_number + 1)
          }
      }
      // переключение назад
      const handlePreviousPage = () => {
          if (filters.page_number > 1) {
              changeFilter('page_number', filters.page_number - 1)
          }
      }
      // переключение по номеру страницы
      const handlePageClick = (pageNumber : number) => {
          changeFilter('page_number', pageNumber)
      }

    return (
        <section className={styles.section}>
            <NewsFilters  filters={filters} changeFilter={changeFilter} />
         
            {/* пагинация */}
            <PagitationWrapper 
                    top 
                    bottom 
                    handleNextPage={handleNextPage} 
                    handlePreviousPage = {handlePreviousPage}  
                    handlePageClick = {handlePageClick} 
                    totalPages={TOTAL_PAGES}
                    currentPage = {filters.page_number} 
                    >
            
                <NewsList isLoading={isLoading} news={data?.news}/>
            </PagitationWrapper>
         
        </section>
    );
}

export default NewsByFilters;
