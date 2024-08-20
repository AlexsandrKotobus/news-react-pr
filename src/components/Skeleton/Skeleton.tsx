import styles from './styles.module.css'
import { DirectionType, SkeletonType } from '../../interfaces';

interface Props{ 
type?: SkeletonType, 
count?: number, 
direction?: DirectionType
}


const Skeleton = ({count=1, type = 'banner', direction ='column'} : Props) => {
// console.log("count, type",count, type)
    return (
       <>
       {count > 1  ? 
       (
       <ul className={direction==='column'? styles.columnList : styles.rowList}>
          {[...Array(count)].map((_, index) => (
            <li key={index} className={type === 'banner' ? styles.banner : styles.item}
            >новость</li>
          ))}         
        </ul>
       ) : (
       <li className={type==='banner' ? styles.banner : styles.item}>баннер </li> 
       )
       }
       </>
    );
}

export default Skeleton;
