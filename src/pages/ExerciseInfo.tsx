
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { fetchData, exercisesOptions, youtubeOptions } from '../utils/fetchData';
import Info from '../components/Info';
import FitnessVideos from '../components/FitnessVideos';
import SimiliarExercises from '../components/SimiliarExercises';


const ExerciseInfo: React.FC = () => {
  const [exerciseInfo, setExerciseInfo] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseInfo = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearch = 'https://youtube-search-and-download.p.rapidapi.com'
      const exerciseInfo = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions);
      setExerciseInfo(exerciseInfo);
      const exerciseVideosData = await fetchData(`${youtubeSearch}/search?query=${exerciseInfo.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents)
console.log(exerciseVideos);
      const targetMuscleExerciseData =  await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseInfo.target}`, exercisesOptions);
setTargetMuscleExercises(targetMuscleExerciseData);
      
      const equipmentExerciseData =  await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseInfo.equipment}`, exercisesOptions);
      setEquipmentExercises(equipmentExerciseData);
    };
    fetchExerciseInfo();
  },[id])
  return (
    <section className='relative top-[6rem] w-full padding-x py-8'>
      <Info exerciseInfo={exerciseInfo}/>
      <FitnessVideos exerciseVideos={exerciseVideos} name={exerciseInfo.name} />
      <SimiliarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
      
    </section>
  );
};

export default ExerciseInfo;
