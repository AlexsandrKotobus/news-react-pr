import { TOTAL_PAGES } from '../../constants/constants'
import Pagination from '../Pagination/Pagination';
import styles from './styles.module.css';
import NewsList from '../NewsList/NewsList'
import NewsFilters from '../NewsFilters/NewsFilters';

const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {
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
      const handlePageClick = (pageNumber) => {
          changeFilter('page_number', pageNumber)
      }

    return (
        <section className={styles.section}>
            <NewsFilters  filters={filters} changeFilter={changeFilter} />
         
            {/* пагинация */}
                <Pagination 
                    handleNextPage={handleNextPage} 
                    handlePreviousPage = {handlePreviousPage}  
                    handlePageClick = {handlePageClick} 
                    currentPage = {filters.page_number} 
                    totalPages={TOTAL_PAGES} />
            {/* список новостей */}
            <NewsList isLoading={isLoading} news={news}/>
             {/* пагинация */}
                 <Pagination 
                    handleNextPage={handleNextPage} 
                    handlePreviousPage = {handlePreviousPage}  
                    handlePageClick = {handlePageClick} 
                    currentPage = {filters.page_number} 
                    totalPages={TOTAL_PAGES} />
         
        </section>
    );
}

export default NewsByFilters;
