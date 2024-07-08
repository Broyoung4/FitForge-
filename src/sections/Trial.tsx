

const Trial = ({title, change, isSelected}) => {
  const buttonStyles = isSelected ? 'bg-blue-500 text-white' : 'bg-[#2f2f2f] text-blue-500'
  return (
    <div>
      <button className={`${buttonStyles} p-4 rounded-lg w-full text-center text-xl font-poppins font-bold`}  onClick={change}>
        {title}
      </button>
    </div>
  )
}

export default Trial