import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import styles from './styles.module.css'
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoadin, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            // было news стало response
            const response = await getNews(currentPage, pageSize)
            setNews(response.news)
            //новости загрузились
            setIsLoading(false)

        } catch (error) {
            console.log(error)
        }
    };
    // переключение вперед
    const handleNextPage = () => {
        if (currentPage < totalPages) {
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


    useEffect(() => {
       
        fetchNews(currentPage);
    }, [currentPage]);
    return (
        <main className={styles.main}>
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
                    totalPages={totalPages} />
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
                    totalPages={totalPages} />
        </main>
        
    );
}

export default Main;
