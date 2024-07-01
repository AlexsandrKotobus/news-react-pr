import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getCategories, getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import styles from './styles.module.css'
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import {useDebounce} from '../../helpers/hooks/useDebounce'

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoadin, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const totalPages = 10;
    const pageSize = 10;

    const debounceKeyword = useDebounce(keywords, 1500 );
    //запрос новости
    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            // было news стало response
            const response = await getNews({
                page_number: currentPage,
                page_size: PAGE_SIZE,
                category: selectedCategory === 'All' ? null : selectedCategory,
            })
            setNews(response.news)
            //новости загрузились
            setIsLoading(false)

        } catch (error) {
            console.log(error)
        }
    };
//запрос категории
    const fetchCategories = async () => {
        try {
             const response = await getCategories()
            setCategories(['All',...response.categories])
            //новости загрузились
            
        } catch (error) {
            console.log(error)
        }
    };
   

// обновление при изменении категории
useEffect(()=> {
    fetchCategories();
}, [])
// обновление при смене страницы и категории
useEffect(() => {       
    fetchNews(currentPage);
}, [currentPage, selectedCategory]);




    // переключение вперед
    const handleNextPage = () => {
        if (currentPage < TOTAL_PAGES) {
            setCurrentPage(currentPage + 1)
        }
    }
    // переключение назад
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    // переключение по номеру страницы
    const handlePageClick = (pageNumber) => {
            setCurrentPage(pageNumber)
    }



    return (
        <main className={styles.main}>
            <Categories 
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                />
            {/* банер */}
            {news.length > 0 && !isLoadin ? (
                <NewsBanner  item={news[0]}/> 
                ) : (
                <Skeleton type={'banner'} count={1}/> 
                )}
                <Pagination 
                    handleNextPage={handleNextPage} 
                    handlePreviousPage = {handlePreviousPage}  
                    handlePageClick = {handlePageClick} 
                    currentPage = {currentPage} 
                    totalPages={TOTAL_PAGES} />
            {/* список новостей */}
            {!isLoadin ? 
                (<NewsList news={news}/>)
                  : 
                (<Skeleton type={'item'} count={10}/>)}
                 
                 <Pagination 
                    handleNextPage={handleNextPage} 
                    handlePreviousPage = {handlePreviousPage}  
                    handlePageClick = {handlePageClick} 
                    currentPage = {currentPage} 
                    totalPages={TOTAL_PAGES} />
        </main>
        
    );
}

export default Main;
