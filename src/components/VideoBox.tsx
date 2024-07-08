import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill }
from 'react-icons/bs';


interface VideoBoxProps {
   videoSrc: string;
}

const VideoBox = ({videoSrc}: VideoBoxProps ) => {
   const [ playVideo, setPlayVideo ] = useState(false);
   const vidRef = useRef<HTMLVideoElement>(null);
   return (
      <div className='relative lg:h-[430px] h-screen/2'>
         <video
            ref={vidRef}
            src={videoSrc}
            type='video/mp4'
            loop
            controls={false}
            muted
            className='object-cover w-full h-full'
            />
         <div className='absolute inset-0 flex justify-center items-center bg-opacity-[0.3] bg-black backdrop-blur-1g z-10 '>
            <div className='flex justify-center items-center w-[70px] h-[70px] cursor-pointer border border-sea-green rounded-full bg-white bg-opacity-[0.5] ' onClick={() => {
         setPlayVideo(!playVideo);
         if (playVideo) {
            vidRef.current?.pause();
         } else {
            vidRef.current?.play();
         }
            }}>
               { playVideo ? (
               <BsPauseFill color="#fff"
               fontSize={30} />
               ): (
               <BsFillPlayFill  
               fontSize={30} className='text-sea-green'/>) }
            
            </div>
         </div>
      </div>
   );
};

export default VideoBox;
