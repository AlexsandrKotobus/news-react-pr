import styles from './styles.module.css'

const Skeleton = ({count=1, type = 'banner'}) => {
// console.log("count, type",count, type)
    return (
       <>
       {count > 1  ? 
       (
       <ul className={styles.list}>
          {[...Array(count)].map((_, index) => (
            <li key={index} className={type === 'banner' ? styles.banner : styles.item}
            >111</li>
          ))}         
        </ul>
       ) : (
       <li className={type==='banner' ? styles.banner : styles.item}>222 </li> 
       )
       }
       </>
    );
}

export default Skeleton;
