
const BarberBox = ({name, info, imageSrc }) => {
  return (
    <div className="flex flex-col justify-center items-center border border-white p-4 mx-4 rounded-xl bg-white ">
      <h2 className="text-black text-2xl font-poppins font-bold leading-2 my-4">
        {`MEET ${name}`}
      </h2>
      <div className="flex justify-center items-center px-4">

         <p className=' flex justify-end items-center font-montserrat text-gray-700 text-lg leading-6 mt-6 mb-14 sm:max-w-sm'>
           {info}
         </p>
      <img src={imageSrc} alt='barber' className='object-contain w-[200px] h-[300px] rounded-xl bg-sea-green'/>
        </div>
    </div>
  )
}

export default BarberBox