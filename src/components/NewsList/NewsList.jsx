import NewsItem from '../NewsItem/NewsItem';
import withSkeleton from '../../helpers/hocs/withSkeleton';
import styles from './styles.module.css';

const NewsList = ({news}) => {
  console.log('news ', news)
  
    return (
        <ul className={styles.list}>
          {news.map(item => {
            return <NewsItem key={item.id}  item={item} />
          })}
          
        </ul>
    );
}

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)


export default NewsListWithSkeleton;

