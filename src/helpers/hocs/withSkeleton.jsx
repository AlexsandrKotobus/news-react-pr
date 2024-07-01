import Skeleton from "../../components/Skeleton/Skeleton";


function WithSkeleton(Component, type, count) {
    return function WithSkeleton(props) {
       const{ isLoading, ...restProps } = props
       if (isLoading) {
        return <Skeleton type={type} count={count}/>
       }
       return <Component {...restProps}/>
    }
}

export default WithSkeleton;
