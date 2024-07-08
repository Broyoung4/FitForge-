import BodyPart from './BodyPart';
import React, { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard';


const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {

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
    <div className='flex w-full overflow-x-scroll gap-2 galleryimage' ref={scrollRef}>
      {data.map(item => (
        <div key={item.id || item} id={item.id || item}
          title={item.id || item}
          className='mx-[40px]'>
          {isBodyParts ? 
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            : <ExerciseCard exercise={item}/>}
        </div>
      ))}
      <div className='w-full flex justify-between items-center px-1 absolute bottom-[5%]'>
        <BsArrowLeftShort className="bg-sea-green text-white cursor-pointer text-4xl rounded-md " onClick={() => scroll('left')} />
        <BsArrowRightShort className="bg-sea-green text-white cursor-pointer text-4xl rounded-md " onClick={() => scroll('right')} />
      </div>
    </div>
     
  )
}

export default HorizontalScrollBar 