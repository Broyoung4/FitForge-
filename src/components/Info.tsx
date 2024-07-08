import React from 'react';
import { MdDoubleArrow } from "react-icons/md";
import { FaDumbbell, FaRegClipboard} from "react-icons/fa";
import { BsClipboardData, BsStars, BsClipboardPulse } from "react-icons/bs";
import { GiMuscleUp } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoFitnessSharp } from "react-icons/io5";

const InfoComp = ({icon, text}) => (
      <div className='flex flex-row items-center gap-6 mt-6'>
        <button className='bg-[#fff2db] rounded-full w-[100px] h-[100px] flex items-center justify-center'>
          {icon} 
        </button>
        <h3 className='capitalize text-slate-gray text-lg font-montserrat leading-8 mt-6 break-word max-w-[2px]'>{text}</h3>
      </div>
  )



const Info = ({exerciseInfo}) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseInfo;
  const extraInfo = [
    {icon: 'FaDumbbell' , text: 'Target'},
    {icon: 'FaRegClipboard', text: 'Equipment'},
    {icon: 'BsClipboardData' , text: 'Gif'}
  ]
  return (
    <section className='flex items-center flex-col lg:flex-row gap-10'>
       <img src={gifUrl} alt={name} loading='lazy' className='w-[400px] h-[400px] rounded-xl'/>
      <div className='flex flex-col justify-center items-center lg:items-start mt-10'>
         <h3 className='text-xl text-sea-green capitalize font-bold font-poppins leading-6'>{name}</h3>
         <p className='text-slate-gray text-lg font-montserrat leading-8 mt-6'>Exercises keep you strong. {name}{' '} is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.</p>

        <InfoComp icon={<GiMuscleUp className='w-[50px] h-[50px] text-sea-green'/>} text={bodyPart} />
        <InfoComp icon={<IoFitnessSharp className='w-[50px] h-[50px] text-sea-green'/>} text={target} />
        <InfoComp icon={<FaDumbbell className='w-[50px] h-[50px] text-sea-green'/>} text={equipment} />
      </div>
    </section>
  )
}

export default Info;
