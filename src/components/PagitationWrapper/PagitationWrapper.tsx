// import React from "react";
import { IPaginationProps } from "../../interfaces";
import Pagination from "../Pagination/Pagination";

interface Props {
    children: React.ReactNode
    top?: boolean;
    bottom?: boolean;
}

const PagitationWrapper = ({
    top, 
    bottom, 
    children, 
    ...paginationProps
    }: Props & IPaginationProps ) => {
        // console.log('PagitationWrapper', {...paginationProps})
        return (
       <>
       {top && <Pagination {...paginationProps} />}
       {children}
       {bottom && <Pagination {...paginationProps}/>}
       </>
    );
}

export default PagitationWrapper;
