import Skeleton from "../../components/Skeleton/Skeleton";


function WithSkeleton(Component, type, count, direction) {
    return function WithSkeleton(props) {
       const{ isLoading, ...restProps } = props
       
       if (isLoading) {
        // console.log('isLoading', isLoading );
        // console.log("type, count", type, count );

        return <Skeleton type={type} count={count} direction={direction}/>
       }
       return <Component {...restProps}/>
    }
}
// console.log('WithSkeleton', WithSkeleton)
export default WithSkeleton;
