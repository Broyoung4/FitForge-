import images from '../constants/images';

import { MdDoubleArrow } from "react-icons/md";
import { FaDumbbell, FaRegClipboard} from "react-icons/fa";
import { BsClipboardData, BsStars, BsClipboardPulse } from "react-icons/bs";
import { GiMuscleUp } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";

interface AboutCardProps {
  icon: React.ReactNode;
  heading: string;
  parg: string;
  bcolor: string;
  tcolor: string;
}


const AboutCard = ({icon, heading, parg, bcolor, tcolor}: AboutCardProps) => {
   return (
  <div className={`flex flex-col justify-center items-center border border-slate-gray w-30 h-50 px-2 py-6 bg-${bcolor} rounded-xl`}>
    {icon}
     <h3 className='text-black text-xl font-poppins font-bold leading-2 mt-2 capitalize'>{heading}</h3>
       <p className={`text-${tcolor} text-base text-center font-poppins font-normal leading-2 mt-2`}>{parg}
      </p>
   </div>
     )
}

const About = () => {
  return (
    <section className='min-h-screen flex flex-col max-container py-8 px-8'>
      <div className='flex items-center justify-between '>
        <div className='flex justify-start'>
           <h1 className="text-white text-3xl font-poppins font-bold leading-2 my-10 capitalize max-w-[350px] ">What makes us stand-out at<span className='text-sea-green flex mt-3 md:ml-0 ml-1.5 capitalize'> Fit-forge <BsStars className='text-sea-green text-4xl' /></span></h1>
        </div>
        <div className='flex justify-end items-center hidden md:flex'>
          <MdDoubleArrow className='text-sea-green text-4xl cursor-pointer'/>
          <button className=' py-3 px-8 bg-white text-sea-green outline-none rounded-full border-2 hover:border-[#eb9534] '><a href='#booking'>Join today</a></button>
        </div>
           
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
        <div className='lg:row-span-2 border border-sea-green relative '>
         <img src= {images.sideviewwoman} className='object-fill ' />
          <span className='flex justify-center items-center bg-white border border-slate-gray text-sea-green py-2 absolute bottom-10 xl:right-10 left-16 w-[200px] h-auto'>
            Fit-Forge <GiMuscleUp className='text-sea-green text-4xl' />
          </span>
          
        </div>
        
        <AboutCard icon={<BsClipboardData className='text-sea-green bg-white text-2xl'/>} heading='Personalized Fitness Plans' parg='Get customized workout routines designed to match your fitness level goals, and preferences.' bcolor='white' tcolor='slate-gray'/>
        <AboutCard icon={<FaDumbbell className='text-black text-2xl'/>} heading='dynamic workouts' parg='Experience a variety of exercises that evolve with your progress, ensuring constant engagement and results.' bcolor='dark-green' tcolor='white'/>
          <AboutCard icon={<BsClipboardPulse className='text-sea-green bg-white text-2xl'/>} heading='Nutritional meal plans' parg='Receive tailored meal plans to complement your fitness journey and optimize your overall well-being.' bcolor='white' tcolor='slate-gray'/>
        <AboutCard icon={<FaPeopleGroup className='text-sea-green bg-white text-2xl'/>} heading='Fit-Forge community' parg='Engage with a vibrant community of fitness enthusiasts, share tips, and find motivation on your health journey.' bcolor='white' tcolor='slate-gray'/>
      </div>
     
      

      
      
    </section>
  )
}

export default About