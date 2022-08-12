import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const ProductsSkeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#e6e6e6" highlightColor="#cccccc">
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </SkeletonTheme>
    </>
  );
};

export const SelectedProductSkeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#e6e6e6" highlightColor="#cccccc">
        <div className="col-md-5">
          <Skeleton height={300} width={300} style={{marginLeft:50}}/>
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={30} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={430} />
          
        </div>
      </SkeletonTheme>
    </>
  );
};
