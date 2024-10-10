import { useAppDispatch } from '@/app/appStore';
import { useTheme } from '@/app/providers/ThemeProvider';
import { setFilters } from '@/entities/news/model/newsSlices';
import { Categories } from '@/features/category';
import { Search } from '@/features/search';
import { Slider } from '@/features/slider';
import { IFilters } from '@/shared/interfaces';
import styles from './styles.module.css'
import { CategoriesType } from '@/entities/category';


interface Props {
   filters: IFilters;
   categories: CategoriesType[];
}


const NewsFilters = ({filters, categories} : Props) => {
    const {isDark} = useTheme();
    const dispatch = useAppDispatch()

    // console.log('categ ', data)
//   const {data: dataCategories} = useFetch<CategoriesApiResponse, null>(getCategories);
    return (
        <div className={styles.filters}>
         {categories ?  (
         <Slider isDark={isDark} step={350}>
            <Categories 
                categories={categories}
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
