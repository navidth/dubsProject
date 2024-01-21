import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingProduct = () => {
    return Array(6).fill({}).map(()=>{
        return(
            <div className="">
                   <Skeleton className=' bg-dark opacity-50' circle={true} width={180} height={250} count={2} />
                   <Skeleton className='' width={180} height={250} count={2} />
                   <Skeleton className='' width={180} height={250} count={2} />
            </div>
        )
    })
}

export default LoadingProduct;
