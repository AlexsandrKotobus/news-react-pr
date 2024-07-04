import Skeleton from "../../components/Skeleton/Skeleton";


function WithSkeleton(Component, type, count) {
    return function WithSkeleton(props) {
       const{ isLoading, ...restProps } = props
       
       if (isLoading) {
        // console.log('isLoading', isLoading );
        // console.log("type, count", type, count );

        return <Skeleton type={type} count={count}/>
       }
       return <Component {...restProps}/>
    }
}
// console.log('WithSkeleton', WithSkeleton)
export default WithSkeleton;
