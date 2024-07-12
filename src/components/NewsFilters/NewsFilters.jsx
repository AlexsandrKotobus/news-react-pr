import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from './styles.module.css'

const NewsFilters = ({filters, changeFilter}) => {
  const {data: dataCategories} = useFetch(getCategories);
    return (
        <div className={styles.filters}>
         {dataCategories ?  (
         <Slider step={350}>
            <Categories 
                categories={dataCategories.categories}
                selectedCategory={filters.category}
                setSelectedCategory={(category) => changeFilter('category', category) }
                />
        </Slider>
         
         ) : null}
            
            {/* поиск */}
            <Search keywords={filters.keywords} 
            setKeywords={(keywords) => changeFilter("keywords", keywords)}/>
        </div>
    );
}

export default NewsFilters;
