import { useState, useEffect } from "react";
import { fetchData, exercisesOptions } from '../utils/fetchData';
import { Exercise } from '../utils/types';
import ExerciseCard from '../components/ExerciseCard';
import Pagination from '../components/Pagination';

 
 interface ExercisesProps {
   setExercises: (exercises: Exercise[]) => void;
   bodyPart: string;
   exercises: Exercise[];
 }

const Exercises:React.FC<ExercisesProps> = ({setExercises, bodyPart, exercises}) => {
    //usestate declarations
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const [error, setError] = useState(null);

    //useeffect declarations
    
    useEffect(()=> {
        const fetchExercisesData = async () => {
            setLoading(true);
            let exercisesData = [];
          try {
              if (bodyPart === 'all') {
               exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
           }     else {
               exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions);
               
           }
            
            setExercises(exercisesData);
            
          } catch (error) {
                console.error('Error fetching exercises:', error);
                setError(error);
        } finally {
              setLoading(false);
        
          }
        }
        fetchExercisesData();
    }, [bodyPart])
    //console.log(exercises);
    //calculations for indexex
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = exercises.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    
    return (
        <div id='exercises' className="mt-[50px] p-[20px] lg:mt-[110px]">
            <h3 className="mb-15 text-2xl text-bold font-montserrat">Showing Results</h3>
            <div className="flex gap-10 flex-wrap justify-center mt-10">
                {loading ? ( // Show loading indicator
            <div className='loading-anim'></div>
                ) : (
currentPosts.map((exercise, index) => (
            
                  <div key={index} className='w-[300px] h-auto border-2 border-t-sea-green bg-white rounded-lg py-6 px-4 max-h-sm'>
                    <ExerciseCard id = {exercise.id} exercise = {exercise} loading={loading} />
                  </div>
                ))
                )}
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={exercises.length} paginate={paginate} currentPage={currentPage} />
        </div>
    )
}

export default Exercises;