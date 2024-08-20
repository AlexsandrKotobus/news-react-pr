import { ForwardedRef, forwardRef } from 'react';
import styles from './styles.module.css'
import { CategoriesType } from '../../interfaces';

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null
}

const Categories = forwardRef(({categories, setSelectedCategory, selectedCategory} : Props, 
  ref: ForwardedRef<HTMLDivElement>
) => {
  // console.log('caat', categories)
    return (

       <div ref={ref} className={styles.categories}>
         <button onClick={()=> setSelectedCategory(null)}  className={!selectedCategory ? styles.active : styles.item}>All</button>
        {categories.map(category => {
          return(
            <button onClick={()=> setSelectedCategory(category)} key={category} className={selectedCategory === category ? styles.active : styles.item}>{category}</button>
          )
        })}
       </div>
    );
});
Categories.displayName = 'Categories'

export default Categories;
