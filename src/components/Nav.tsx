import { BsJustify } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';


import images from "../constants/images";
import { useState, useEffect } from 'react';
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setToggle(false);
    } else { // if scroll up show the navbar
      setToggle("");
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);


  return (
    <div className="absolute z-10 w-full  padding-x py-8">
      <nav className='flex justify-between items-center max-container'>
        <Link to="/" className=' text-base'><img src={images.Logo} className='w-[100px]  h-auto' /></Link>
        {location.pathname === '/' ? (
        <ul className='hidden sm:flex items-center justify-center font-montserrat text-neutral-700 '>
          <li className='mx-4 hover:text-sea-green font-semibold'><Link to='/'>HOME</Link></li>
          <li className='mx-4 hover:text-sea-green font-semibold'><a href='#exercises'>EXERCISES</a></li>
          <li className='mx-4 hover:text-sea-green font-semibold'><a href='#contact'>CONTACT</a></li>
        </ul>
        ) : (
        <ul className='hidden sm:flex items-center justify-center font-montserrat '>
          <li className='mx-4 hover:text-sea-green font-semibold cursor-pointer'><span className="text-neutral-500">Go Back{' '}{' '}</span><Link to='/'>HOME</Link></li>
         
        </ul>
        ) }
        
        <div className='flex items-center'>
          <button className='py-2 px-8 bg-sea-green text-white outline-none rounded-full border-2 hover:border-[#eb9534]'>Sign in</button>

        </div>
        <div className='z-30 cursor-pointer sm:hidden flex'>
          {!toggle && <BsJustify size={30} color={'grey'} onClick={() => setToggle(true)} />}
          {toggle && <FaDumbbell size={30} color={'green'} onClick={() => setToggle(false)} className='z-20' />}
        </div>
        {toggle && (
          <div className='scale-in-ver-top absolute top-0 left-0 w-full h-70% flex justify-center items-center z-10 glassmorphism py-12 transition duration-500'>
            <ul className='flex flex-col justify-center items-center gap-10 text-sea-green font-bold mt-10'>
              <li className=' hover:text-gray-700' onClick={() => setToggle(false)} ><a href='#home'>HOME</a></li>
              <li className='hover:text-gray-700' onClick={() => setToggle(false)}><a href='#exercises'>EXERCISES</a></li>
              <li className='hover:text-gray-700' onClick={() => setToggle(false)}><a href='#contact'>CONTACT</a></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Nav