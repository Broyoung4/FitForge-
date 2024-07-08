import images from '../constants/images';
import Tab from "../components/Tab";
import { useState, useTransition } from 'react';


const Team = () => {
  const [selectedTab, setSelectedTab] = useState("Team");
  const [isPending, startTransition] = useTransition();
  const handleTabClick = (id) => {
    startTransition(() => {
      setSelectedTab(id);
    });
  }
  return (
    <section className='max-container min-h-screen flex flex-col justify-center items-center w-full gap-10'>
      <h1 className="text-black text-4xl font-poppins font-bold leading-2 my-10">Meet The <span className='text-sea-green inline-block mt-3'>Team</span></h1>
      <div className='flex items-center justify-center gap-10'>
       
        <Tab title='Team'isSelected={selectedTab=== 'Team'} change={() =>  handleTabClick('Team')}/>
        <Tab title='Barbers'isSelected={selectedTab=== 'Barbers'} change={() =>  handleTabClick('Barbers')}/>
        <Tab title='Location'isSelected={selectedTab=== 'Location'} change={() =>  handleTabClick('Location')}/>
      </div>

      {/********** Team **********/}
      
        
      { 
        isPending ? (<span class="loading-anim"></span>) : 
        selectedTab=== 'Team' && (
      <div className='flex items-center justify-center flex-col'>
          <h2 className='text-slate-gray text-xl font-montserrat font-bold leading-2 my-10'>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            
          </h2>
          <div className='flex flex-wrap justify-center items-center gap-10 max-w-xl'>
            <img src={images.BarbersTeam} alt="team_image" />
          </div>
      </div>
       ) }
       {/********** Barbers **********/}
      { 
        isPending ? (<span class="loading-anim"></span>) : 
        selectedTab=== 'Barbers' && (
      <div className='flex items-center justify-center flex-col'>
          <h2 className='text-slate-gray text-xl font-montserrat font-bold leading-2 my-10'>
          Flucidia offers the best barbers in town with various skill sets and lots of experience.
            
          </h2>
          <div className='flex flex-wrap justify-center items-center gap-10 max-w-xl'>
            <img src={images.BarbersTeam} alt="team_image" />
          </div>
      </div>
       ) }
       {/********** Location **********/}
      { 
        isPending ? (<span class="loading-anim"></span>) : 
        selectedTab=== 'Location' && (
      <div className='flex items-center justify-center flex-col'>
          <h2 className='text-slate-gray text-xl font-montserrat font-bold leading-2 my-10'>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            
          </h2>
          <div className='flex flex-wrap justify-center items-center gap-10 max-w-xl'>
            <img src={images.Flucidialocation} alt="team_image" />
          </div>
      </div>
       ) }
      
     
    </section>
  )
}

export default Team