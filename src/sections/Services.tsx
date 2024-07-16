
import { BsStars } from "react-icons/bs";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { MdDoubleArrow } from "react-icons/md";
import images from '../constants/images';
import { ManWorkout } from '../constants';
import VideoBox from '../components/VideoBox';

const ServiceBox = ({imgSrc, heading, parg, bcolor, tcolor}) => (
  <div className={`flex flex-col justify-start  border border-slate-gray w-[300px] h-[430px] px-2 py-6 bg-${bcolor}  rounded-xl backdrop-blur-lg smooth-transition mx-auto`}>
    <img src={imgSrc} className='object-contain' />
    <h3 className='text-black text-xl font-poppins font-bold leading-2 mt-2 capitalize'>{heading}</h3>
    <p className={`text-${tcolor} text-base text-left font-poppins font-normal leading-2 mt-2`}>{parg}</p>
    <a href='#' className='text-base font-poppins font-normal leading-2 mt-2 flex justify-start items-center text-sea-green'>Learn more <FaSquareArrowUpRight className='ml-2 text-sea-green' /></a>
  </div>
);


const Services = () => {
  
  return (
    <section id='booking' className=" flex flex-col  justify-center min-h-screen gap-10 max-container">
      <div className='flex justify-end flex-wrap '>
          
          <h1 className="text-white text-3xl font-poppins font-bold leading-2  my-10 capitalize flex"><BsStars className='text-sea-green text-4xl' /> Service at<span className='text-sea-green inline-block capitalize ml-2'> Fit-forge </span></h1>
      </div>
      <div className='relative flex items-center justify-center  pb-20 lg:pb-0'>
         <div className='grid lg:grid-cols-3 grid-cols-1 place-center gap-10'>
           <ServiceBox imgSrc={images.GymHeader} heading='Personalized Fitness Plans'
             parg = 'Get customized workout routines designed to match your fitness level goals, and preferences.'
             bcolor='white' tcolor='slate-gray' />
             <ServiceBox imgSrc={images.GymHeader} heading='Personalized Fitness Plans'
             parg = 'Get customized workout routines designed to match your fitness level goals, and preferences.'
             bcolor='white' tcolor='slate-gray' />
             <div className='lg:row-span-2 border border-sea-green flex flex-col justify-between px-2 py-6 bg-transparent gap-8 lg:h-[900px]'>
             <h2 className='text-white text-lg lg:text-xl font-poppins font-bold leading-2 my-10 capitalize'>At <span className='text-sea-green inline-block capitalize ml-2' > Fit-Forge</span> we provide different fitness exercise based on the fitness goals, preferences, and fitness levels for our users.</h2>
               <VideoBox videoSrc={ManWorkout} />
               <div className='flex justify-end items-center mt-6 lg:static absolute bottom-0 right-0 z-10'>
                 <MdDoubleArrow className='text-sea-green text-4xl cursor-pointer'/>
                 <button className=' py-3 px-8 bg-white text-sea-green outline-none rounded-full border-2 hover:border-[#eb9534] '><a href='#'>Explore services</a></button>
               </div>
             </div>
              <ServiceBox imgSrc={images.GymHeader} heading='Personalized Fitness Plans'
              parg = 'Get customized workout routines designed to match your fitness level goals, and preferences.'
              bcolor='white' tcolor='slate-gray'  />
             <ServiceBox imgSrc={images.GymHeader} heading='Personalized Fitness Plans'
             parg = 'Get customized workout routines designed to match your fitness level goals, and preferences.'
             bcolor='white' tcolor='slate-gray' />

           </div>
      </div>
      
    </section>
  )
}

export default Services;