import { formatTimeAgo } from "../../helpers/formatTimeAgo.ts";
import { INews } from "../../interfaces/index.ts";
// import withSkeleton from '../../helpers/hocs/withSkeleton';
import Image from "../Image/Image";
import styles from './styles.module.css'

interface Props{
  item: INews;
}

const NewsBanner = ({item}: Props) => {
    return (
        <div className={styles.banner}>
          {/* временно добавим проверку item - те знак ? после item {item?.image} */}
          <Image image = {item?.image}/>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div >
    );
}

// const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1)


// export default NewsBannerWithSkeleton;
export default NewsBanner;
