import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingSkeleton = () => {
  return(
    <>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
    </>
  );
};

export default LoadingSkeleton;