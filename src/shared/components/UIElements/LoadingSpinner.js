import React from 'react';

const LoadingSpinner = props => {
  return (
    <div className={`${props.asOverlay && 'h-full w-full top-0 left-0 bg-[#ffffffe6] flex justify-center items-center absolute'}`}>
      <div className="inline-block w-16 h-16 after:block after:content-[' '] after:w-12 after:h-12 after:m-px after:rounded-[50%] after:border-solid after:border-[#510077] after:border-[5px] after:border-x-transparent after:border-y-[#510077] after:animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
