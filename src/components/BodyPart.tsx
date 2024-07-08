import images from '../constants/images';

const BodyPart =({item, bodyPart, setBodyPart}) => {
  return (
    <div className={`cursor-pointer flex items-center justify-center ${bodyPart === item ? 'border-sea-green border-2 bg-white rounded-b-lg w-[270px] h-[280px] cursor-pointer gap-8' : ' bg-white rounded-b-lg w-[270px] h-[280px] cursor-pointer gap-8' } flex-col hover:w-[280px] hover:h-[290px] transition duration-500 ease-in-out`}
      
      onClick = {() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
      }}
      >
      <img src={images.Dumbbell} alt='dumbbell' className='w-20 h-20 rounded-full'/>
      <h2 className='text-2xl text-sea-green capitalize text-bold text-center'>{item}</h2>
    </div>
  )
}

export default BodyPart