import NewsItem from '../NewsItem/NewsItem';
import { INews } from '../../interfaces';
import withSkeleton from '../../helpers/hocs/withSkeleton';
import styles from './styles.module.css';
import React from 'react';

interface Props{
  news: INews[];
}

const NewsList = ({news}: Props) => {
  // console.log('news ', news)
  
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

