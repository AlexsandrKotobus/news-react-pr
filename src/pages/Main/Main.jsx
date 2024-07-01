import {  useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getCategories, getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import styles from './styles.module.css'
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import Categories from '../../components/Categories/Categories';
import {useDebounce} from '../../helpers/hooks/useDebounce';
import {PAGE_SIZE, TOTAL_PAGES} from '../../constants/constants'
import { useFetch } from '../../helpers/hooks/useFetch';


const Main = () => {
    const [filters, setFilters] = useState({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    }
    )
    const changeFilter = (key, value) => {
        setFilters(prev => {
            return {...prev, [key]: value}
        })
    }

    
    // const [currentPage, setCurrentPage] = useState(1);
    // const [keywords, setKeywords] = useState('');
    // const [selectedCategory, setSelectedCategory] = useState('All');


    const debounceKeyword = useDebounce(filters.keywords, 1500);

    const {data, isLoading} = useFetch(getNews, {
       ...filters,
        keywords: debounceKeyword,
    })

    const {data: dataCategories} = useFetch(getCategories)


// debounceKeyword
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
// проверка search
// console.log(keywords);


    return (
        <main className={styles.main}>
            {/* категории */}
            {dataCategories ?  <Categories 
                categories={dataCategories.categories}
                selectedCategory={filters.category}
                setSelectedCategory={(category) => changeFilter('category', category) }
                /> : null}
            {/* поиск */}
            {/* <Search keyworsd={filters.keywords} setKeywords={(keyworsd) => changeFilter('keyworsd', keyworsd)}/> */}
            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter("keywords", keywords)}/>
            {/* банер */}
            <NewsBanner isLoading={isLoading} item={data && data.news && data.news[0]}/>
            {/* пагинация */}
                <Pagination 
                    handleNextPage={handleNextPage} 
                    handlePreviousPage = {handlePreviousPage}  
                    handlePageClick = {handlePageClick} 
                    currentPage = {filters.page_number} 
                    totalPages={TOTAL_PAGES} />
            {/* список новостей */}
            <NewsList isLoading={isLoading} news={data?.news}/>
             {/* пагинация */}
                 <Pagination 
                    handleNextPage={handleNextPage} 
                    handlePreviousPage = {handlePreviousPage}  
                    handlePageClick = {handlePageClick} 
                    currentPage = {filters.page_number} 
                    totalPages={TOTAL_PAGES} />
        </main>
        
    );
}

export default Main;
