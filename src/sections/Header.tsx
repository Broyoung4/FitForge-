//import { images } from '../../constants';
import { BsPlayCircleFill } from "react-icons/bs";
import images from "../constants/images";

const Header = () => {
  //seagree#52d15a
  return (
 
    <section id='home'
      className='w-full flex xl:flex-row flex-col justify-between items-center min-h-screen max-container px-6 mt-20'
    >
      <div className=' flex flex-col justify-center items-start w-full   flex-1'>
        <p className='text-xl font-montserrat text-sea-green'>
          Our Latest Creations
        </p>

        <h1 className='mt-10 text-7xl max-sm:text-[72px] max-sm:leading-[82px] font-bold font-poppins'>
          <span className='xl:bg-[blanchedalmond] xl:whitespace-nowrap relative pr-10'>
            Elevate your 
          </span><span className='text-sea-green inline-block mt-3'>Fitness</span> Journey With Fit-Forge
        </h1>
        <p className='font-montserrat text-gray-700 text-lg leading-8 mt-6 '>
          Empower your fitness journey with Fit-Forge, the ultimate fitness platform that empowers you to achieve your fitness goals.
        </p>
        
        <div className='flex-1 flex items-center justify-between gap-4 w-full mt-4'>
            <button className='flex-1 custom_btn1'><a href='#booking'>Get started</a></button>
          <button className='flex-1 custom_btn2'><a href='#booking' className='flex justify-center items-center gap-2'><BsPlayCircleFill size={15}/>
            Watch videos</a></button>
        </div>
      </div>
      <div className=' flex-1 flex justify-center items-center w-full'>
        <img src={images.Welltoned} alt='Fade' className='z-10 object-contain border-2 border-sea-green w-[80%] '/>
        
      </div>
    </section>
  )
}
/*<div className='border border-red-500 h-screen'>
  Header
</div>*/

export default Header