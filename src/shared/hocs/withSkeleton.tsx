import { SkeletonType, DirectionType } from "../interfaces";
import Skeleton from "../ui/Skeleton/Skeleton";


interface Props{
   isLoading: boolean;
}

function WithSkeleton<P extends object>(
   Component: React.ComponentType<P>, 
   type?: SkeletonType, 
   count?: number, 
   direction?: DirectionType
) {
    return function WithSkeleton(props: Props & P) {
       const{ isLoading, ...restProps } = props
       
       if (isLoading) {
        // console.log('isLoading', isLoading );
        // console.log("type, count", type, count );

        return <Skeleton type={type} count={count} direction={direction}/>
       }
       return <Component {...(restProps as P)}/>
    }
}
// console.log('WithSkeleton', WithSkeleton)
export default WithSkeleton;
