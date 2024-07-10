import Pagination from "../Pagination/Pagination";


const PagitationWrapper = ({top, bottom, children, ...paginationProps}) => {
    return (
       <>
       {top && <Pagination {...paginationProps} />}
       {children}
       {bottom && <Pagination {...paginationProps}/>}
       </>
    );
}

export default PagitationWrapper;
