import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { InfinitySpin } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div className='flex justify-center items-center w-full'>
      <InfinitySpin color='gray' />
    </div>
  )
}

export default Loader;