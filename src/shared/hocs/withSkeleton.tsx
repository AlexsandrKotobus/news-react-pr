import { SkeletonType, DirectionType } from "../interfaces";
import Skeleton from "../ui/Skeleton/Skeleton";


interface Props{
   isLoading: boolean;
   direction?: DirectionType;
   type?: SkeletonType, 
}

function WithSkeleton<P extends object>(
   Component: React.ComponentType<P>, 
   count?: number
) {
    return function WithSkeleton(props: Props & P) {
       const{ isLoading,  type, direction='column',...restProps } = props
       
       if (isLoading) {

        return <Skeleton type={type} count={count} direction={direction}/>
       }
       return <Component type={type} {...(restProps as P)}/>
    }
}
// console.log('WithSkeleton', WithSkeleton)
export default WithSkeleton;
