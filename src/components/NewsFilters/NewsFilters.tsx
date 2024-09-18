import { useTheme } from "../../context/ThemeContext";
import {  IFilters } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlices";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
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
