import styles from './styles.module.css'

const Categories = ({categories, setSelectedCategory, selectedCategory}) => {
  // console.log('caat', categories)
    return (
       <div className={styles.categories}>
        {categories.map(category => {
          return(
            <button onClick={()=> setSelectedCategory(category)} key={category} className={selectedCategory === category ? styles.active : styles.item}>{category}</button>
          )
        })}
       </div>
    );
}

export default Categories;
