// import { getLatestNews } from '../../api/apiNews';
// import { useFetch } from '../../helpers/hooks/useFetch';
import BannersList from '../BannersList/BannersList'
import styles from './styles.module.css'
// import { NewsApiResponse } from '../../interfaces';
import { useGetLatestNewsQuery } from '../../store/services/newsApi';

const LatestNews = () => {
    // заменим кастомный хук 
    // const {data, isLoading} = useFetch<NewsApiResponse, null>(getLatestNews)
    const { data, isLoading} = useGetLatestNewsQuery(null);
    console.log("LatestNews  ", data)
    return (
        <section className={styles.section}>
            <BannersList banners={data && data.news} isLoading={isLoading} />
        </section>
    );
}

export default LatestNews;
