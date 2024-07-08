import React, { useRef } from 'react';
import images from '../constants/images';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 200;
    } else {
      current.scrollLeft += 200;
    }
  };
  
  return (
    <section id='gallery' className='max-container sm:py-4 sm:pl-0 py-2 pl-1 min-h-screen flex flex-col lg:flex-row  justify-center items-center w-full gap-10'>
      <div className="flex flex-1 flex-col items-start justify-center sm:min-w-[500px] min-w-full pr-[2rem]">
          <h1 className='text-6xl font-poppins font-bold leading-2 my-10'>Gallery</h1>
        <p className='text-xl font-montserrat text-sea-green mt-2'>check out our latest and popular styles</p>
         <button type="button" className="py-4 px-6 bg-sea-green text-white outline-none rounded-full border-2 hover:border-[#eb9534] mt-2">View More</button>
      </div>
      <div className='flex flex-1 lg:max-w-[50%] max-w-[100%] relative'>
        <div className='flex w-full overflow-x-scroll gap-10 galleryimage' ref={scrollRef}>
          {[images.Blackdredd2, images.Fade, images.Twostepdredd, images.Dredds1, images.whitecut].map((image, index) => (
      <div className='flex items-center justify-center relative sm:min-w-[301px] min-w-[200px] sm:h-[447px] h-[320px] mr-2 group' key={`image-${index + 1}`}>
        <img src={image} alt="gallery_image" className='w-[100%] h-[100%] object-fill  opacity-1 transition-all duration-500 group-hover:opacity-[0.35]' />
          <BsInstagram className="absolute text-white text-4xl hidden cursor-pointer transition-all duration-500 group-hover:block" />
        </div>
          ))
          }
        
        </div>
        <div className='w-full flex justify-between items-center px-1 absolute bottom-[5%]'>
          <BsArrowLeftShort className="bg-sea-green text-white cursor-pointer text-4xl rounded-md " onClick={() => scroll('left')} />
          <BsArrowRightShort className="bg-sea-green text-white cursor-pointer text-4xl rounded-md " onClick={() => scroll('right')} />
        </div>
      
      </div>
      
    </section>
  )
}

export default Gallery