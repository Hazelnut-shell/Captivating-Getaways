import React from 'react';

const Avatar = props => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        src={props.image}
        alt={props.alt}
        // style={{ width: props.width, height: props.width }}
        className='block w-full h-full object-cover rounded-[50%]'
      />
    </div>
  );
};

export default Avatar;
