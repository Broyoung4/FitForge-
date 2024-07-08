import { useState, useEffect } from "react";
import { fetchData, exercisesOptions } from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';
import Pagination from '../components/Pagination';

const Exercises = ({setExercises, bodyPart, exercises}) => {
    //usestate declarations
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);

    //useeffect declarations
    
    useEffect(()=> {
        const fetchExercisesData = async () => {
            setLoading(true);
            let exercisesData = [];
           if (bodyPart === 'all') {
               exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
           }     else {
               exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions);
               
           }
            
            setExercises(exercisesData);
            setLoading(false);
        }
        fetchExercisesData();
    }, [bodyPart])
    //console.log(exercises);
    //calculations for indexs
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = exercises.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <div id='exercises' className="mt-[50px] p-[20px] lg:mt-[110px]">
            <h3 className="mb-15 text-2xl text-bold font-montserrat">Showing Results</h3>
            <div className="flex gap-10 flex-wrap justify-center mt-10">
                {currentPosts.map((exercise, index) => (
            
                  <div key={index} className='w-[300px] h-auto border-2 border-t-sea-green bg-white rounded-lg py-6 px-4 max-h-sm'>
                    <ExerciseCard id = {exercise.id} exercise = {exercise} loading={loading} />
                  </div>
                ))}
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={exercises.length} paginate={paginate} currentPage={currentPage} />
        </div>
    )
}

export default Exercises;