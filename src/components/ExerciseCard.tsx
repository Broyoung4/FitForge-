
import { useState } from 'react';
import { Link } from 'react-router-dom';


interface ExerciseProps {
    id: string,
    exercise: string,
    thumbnail: string,
    muscle: string,
    bodyPart: string,
    gifUrl: string,
    loading: boolean
}

const ExerciseCard = ({ exercise, loading }: ExerciseProps) => {

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card ' >
     <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <div className='flex justify-center items-center gap-6'>
        <button className='bg-sea-green text-white rounded-lg px-2 py-1 capitalize'>
          {exercise.bodyPart} 
        </button>
        <button className='bg-black text-white rounded-lg px-2 py-1 capitalize '>
          {exercise.target} 
        </button>
        
      </div>
      <h2 className='text-2xl font-bold mt-6 ml-12'>{exercise.name}</h2>
    </Link>
  );
};

export default ExerciseCard;
