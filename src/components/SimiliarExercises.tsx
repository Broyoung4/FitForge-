import React from 'react';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimiliarExercises: React.FC = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <div className='lg:mt-[1000px]'>
       <h3 className='mb-4 text-lg leading-6 font-bold'>Exercises that target the same muscle group</h3>
      <div className='flex items-center p-2 relative'>
        {targetMuscleExercises.length ? 
        <HorizontalScrollBar data={targetMuscleExercises}/>
        : <Loader/>}
      </div>
      <h3 className='mb-4 text-lg leading-6 font-bold'>Exercises that use the same equipments</h3>
      <div className='flex items-center p-2 relative'>
        {equipmentExercises.length ? 
        <HorizontalScrollBar data={equipmentExercises}/>
        : <Loader/>}
      </div>
    </div>
  )
}

export default SimiliarExercises;