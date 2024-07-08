import { useEffect, useState } from 'react';
import { fetchData, exercisesOptions } from '../utils/fetchData';
import HorizontalScrollBar from '../components/HorizontalScrollBar'

const Search = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');

  const [bodyParts, setBodyParts] = useState([]);

  

  useEffect (() => {
   const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);
      
      setBodyParts(['all', ...bodyPartsData]);
    }
    
    fetchExercisesData();

    
  }, [])

  
  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  }
  

    
  
  const handleSearch = async() => {
   if (search) {
      const exercisesData = await
fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);

const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes (search) || 
exercise.target.toLowerCase().includes (search) ||
exercise.equipment.toLowerCase().includes(search) ||
exercise.bodyPart.toLowerCase().includes(
search)
);

setSearch('');
setExercises(searchedExercises);
      
    }
  }
  
  return (
    <section className="min-h-auto max-container flex flex-col items-center gap-10">
      <h2 className="text-4xl font-extrabold">Awesome Exercises You Should Know</h2>
      <div className="w-full flex items-center justify-center">
        <input onChange={handleChange} value={search} type='text' placeholder="Search Exercises" className='rounded-xl py-2 px-3 w-[900px] hover:border-sea-green border'/>
        <button className=' py-2 px-4 bg-sea-green text-white outline-none rounded-xl w-[130px] border-2 hover:border-[#eb9534]' onClick={handleSearch}>Search</button>
      </div>
      <div className="w-full relative p-4">
      <HorizontalScrollBar data ={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </div>
      
    </section>
    
  )
}

export default Search;