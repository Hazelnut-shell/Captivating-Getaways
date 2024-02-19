import React from 'react';

import parrotAvatar from '../../../user/components/parrotAvatar.jpg';

const Avatar = props => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        src={props.image}
        alt={props.alt}
        // style={{ width: props.width, height: props.width }}
        className='block w-full h-full object-cover rounded-[50%]'
        onError={(e) => {
          e.currentTarget.src = parrotAvatar;
        }}
      />
    </div>
  );
};

export default Avatar;
