import React from 'react';
import classNames from 'classnames';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={classNames("animate-pulse bg-gray-300", className)}></div>
  );
}
