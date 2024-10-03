import { useAppDispatch } from '@/app/appStore';
import { useTheme } from '@/app/providers/ThemeProvider';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import { setFilters } from '@/entities/news/model/newsSlices';
import { Categories } from '@/features/category';
import { Search } from '@/features/search';
import { Slider } from '@/features/slider';
import { IFilters } from '@/shared/interfaces';
import styles from './styles.module.css'


interface Props {
    filters: IFilters;
    // changeFilter: (key: string, value: string | number | null) => void
}


const NewsFilters = ({filters} : Props) => {
    const {isDark} = useTheme();
    // замена useFetch на хук rtk-query
    const { data } = useGetCategoriesQuery(null);
    const dispatch = useAppDispatch()

    console.log('categ ', data)
//   const {data: dataCategories} = useFetch<CategoriesApiResponse, null>(getCategories);
    return (
        <div className={styles.filters}>
         {data ?  (
         <Slider isDark={isDark} step={350}>
            <Categories 
                categories={data.categories}
                selectedCategory={filters.category}
                setSelectedCategory={(category) =>
                    dispatch(setFilters({key: 'category', value: category}))
                    }
                />
        </Slider>
         
         ) : null}
            
            {/* поиск */}
            <Search keywords={filters.keywords} 
            setKeywords={(keywords) =>dispatch(setFilters({key: 'keywords', value: keywords}))}/>
        </div>
    );
}

export default NewsFilters;
