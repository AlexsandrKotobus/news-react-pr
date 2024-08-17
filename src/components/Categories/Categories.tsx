import  React , { forwardRef } from 'react';
import styles from './styles.module.css'
// importfrom 'react';

const Categories = forwardRef(({categories, setSelectedCategory, selectedCategory}, ref) => {
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
