import { useAppSelector } from '@/app/appStore';
import styles from './styles.module.css';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { NewsFilters, NewsList } from '@/widgets/news';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import NewsListWithPagination from '../NewsListWithPagination/NewsListWithPagination';


const NewsByFilters = () => {
    const filters = useAppSelector(state => state.news.filters)
    const news = useAppSelector(state => state.news.news)

    const debounceKeyword = useDebounce(filters.keywords, 1500);
    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debounceKeyword,
    });
     const { data } = useGetCategoriesQuery(null);

    return (
        <section className={styles.section}>
            {/* фильтры */}
            <NewsFilters filters={filters} categories={data?.categories || []}/>
            {/* список новостей */}
            <NewsListWithPagination 
                isLoading={isLoading} 
                news={news} 
                filters={filters}/>         
        </section>
    );
}

export default NewsByFilters;
