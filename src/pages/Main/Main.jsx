import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import styles from './styles.module.css'
import Skeleton from '../../components/Skeleton/Skeleton';

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoadin, setIsLoading] = useState(true);

console.log('isLoadin', isLoadin);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true)
                // было news стало response
                const response = await getNews()
                setNews(response.news)
                //новости загрузились
                setIsLoading(false)

            } catch (error) {
                console.log(error)
            }
        }
        fetchNews();
    }, []);
    return (
        <main className={styles.main}>
            {/* банер */}
            {news.length > 0 && !isLoadin ? (
                <NewsBanner  item={news[0]}/> 
                ) : (
                <Skeleton type={'banner'} count={1}/> 
                )}
            {/* список новостей */}
            {!isLoadin ? 
                (<NewsList news={news}/>)
                  : 
                (<Skeleton type={'item'} count={10}/>)}
                 {/* <NewsList news={news}/> */}
        </main>
        
    );
}

export default Main;
