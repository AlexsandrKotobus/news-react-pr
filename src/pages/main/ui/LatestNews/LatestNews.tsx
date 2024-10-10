
import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import {  NewsList } from '@/widgets/news/';
import styles from './styles.module.css'

const LatestNews = () => {
   
    const { data, isLoading} = useGetLatestNewsQuery(null);
    // console.log("LatestNews  ", data)
    return (
        <section className={styles.section}>
            <NewsList 
            type='banner' 
            direction ='row' 
            news={data && data.news} 
            isLoading={isLoading} />
        </section>
    );
}

export default LatestNews;
