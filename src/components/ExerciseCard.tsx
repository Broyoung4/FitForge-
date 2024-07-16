
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
    <Link to={`/exercise/${exercise.id}`} className='exercise-card group' >
     <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <div className='flex justify-between items-center gap-6'>
        <button className='bg-sea-green text-white rounded-lg px-2 py-1 text-[px] capitalize'>
          {exercise.bodyPart} 
        </button>
        <button className='bg-black text-white rounded-lg px-2 py-1 capitalize '>
          {exercise.target} 
        </button>
        
      </div>
      <h2 className='text-xl text-slate-gray group-hover:text-black font-bold lg:mt-6 mt-4'>{exercise.name}</h2>
    </Link>
  );
};

export default ExerciseCard;
