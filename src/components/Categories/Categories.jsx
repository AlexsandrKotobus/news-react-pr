import styles from './styles.module.css'

const Categories = ({categories, setSelectedCategory, selectedCategory}) => {
  // console.log('caat', categories)
    return (

       <div className={styles.categories}>
         <button onClick={()=> setSelectedCategory(null)}  className={!selectedCategory ? styles.active : styles.item}>All</button>
        {categories.map(category => {
          return(
            <button onClick={()=> setSelectedCategory(category)} key={category} className={selectedCategory === category ? styles.active : styles.item}>{category}</button>
          )
        })}
       </div>
    );
}

export default Categories;
