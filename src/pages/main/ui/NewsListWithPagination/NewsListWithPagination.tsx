import { TOTAL_PAGES } from '@/shared/constants/constants';
import {  NewsList } from '@/widgets/news';
import { Pagitation } from '@/features/pagination';
import { IFilters } from '@/shared/interfaces';
import { INews } from '@/entities/news';
import { usePaginationNews } from '../../utils/hooks/usePaginationNews';

interface Props {
   filters: IFilters;
   news: INews[];
   isLoading: boolean;
}
// хук для пагинации, с логикой переключения страниц
const NewsListWithPagination = ({filters, news, isLoading}: Props) => {
    const {handleNextPage, handlePreviousPage, handlePageClick} = usePaginationNews(filters)

    return (
        // пагинация
            <Pagitation  
                    top 
                    bottom 
                    handleNextPage={handleNextPage} 
                    handlePreviousPage = {handlePreviousPage}  
                    handlePageClick = {handlePageClick} 
                    totalPages={TOTAL_PAGES}
                    currentPage = {filters.page_number} 
                    >
            {/* список новостей */}
                 <NewsList 
                    type='item' 
                    direction='column' 
                    isLoading={isLoading} 
                    news={news}/>
            </Pagitation >
    );
}

export default NewsListWithPagination;
