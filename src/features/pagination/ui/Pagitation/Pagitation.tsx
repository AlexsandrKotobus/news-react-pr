import { IPaginationProps } from "../../model/types";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

interface Props {
    children: React.ReactNode
    top?: boolean;
    bottom?: boolean;
}

const Pagitation = ({
    top, 
    bottom, 
    children, 
    ...paginationProps
    }: Props & IPaginationProps ) => {
        // console.log('PagitationWrapper', {...paginationProps})
        return (
       <>
       {top && <PaginationButtons {...paginationProps} />}
       {children}
       {bottom && <PaginationButtons {...paginationProps}/>}
       </>
    );
}

export default Pagitation;
