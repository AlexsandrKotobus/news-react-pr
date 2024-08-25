import styles from './styles.module.css'
import { IPaginationProps } from '../../interfaces';
import { useTheme } from '../../context/ThemeContext';


// const Pagination = ({totalPages, handleNextPage, handlePreviousPage, handlePageClick, currentPage}) => {
  const Pagination = ({
    totalPages, 
    handleNextPage, 
    handlePreviousPage, 
    handlePageClick, 
    currentPage,
  }: IPaginationProps) => {
    const {isDark} = useTheme();
    // console.log(`${styles.pagination} ${isDark? styles.dark : styles.light}`)
    // console.log('Pagination', {isDark})
      return (
      <div className={`${styles.pagination} ${isDark? styles.dark : styles.light}`}>
          <button 
          onClick={handlePreviousPage}
          disabled={currentPage <= 1}
           className={styles.arrow}>{'<'}</button>
        <div className={styles.list}>{[...Array(totalPages)].map((_, index ) => {
          return <button 
          onClick={() => handlePageClick(index+1)}
             className={styles.pageNumber} 
             disabled={index+1 === currentPage}
             key={index}>{index+1}</button>

        })}</div>
          <button 
          disabled={currentPage >= 10}
          onClick={handleNextPage} 
          className={styles.arrow}>{'>'}</button>
      </div>
    );
}

export default Pagination;
