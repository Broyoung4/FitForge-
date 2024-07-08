
const Tab = ({title, change, isSelected}) => {
   const buttonStyles = isSelected ? 'border-b-2 border-b-sea-green' : 'border-b-2 border-b-slate-gray'
  return (
      <div>
        <button className={`${buttonStyles} text-xl font-montserrat font-medium hover:text-slate-gray`}  onClick={change}>
          {title}
        </button>
      </div>
  )
}

export default Tab