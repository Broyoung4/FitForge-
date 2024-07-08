import "../App.css";

import { useState } from "react";

import Header from "../sections/Header";
import About from "../sections/About";
import Services from "../sections/Services";
import Gallery from "../sections/Gallery";
import Team from "../sections/Team";
import Footer from "../sections/Footer";
import Search from "../sections/Search";
import Exercises from "../sections/Exercises";
import Pricing from "../sections/Pricing";


export default function Home() {
  const [bodyPart, setBodyPart ] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <div className="relative">      
      <section className=' padding'>
        <Header />
      </section>
      <hr />
      <section className='px-4 py-6'>
        <Search setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </section>
      <section className='padding '>
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises ={exercises } />
      </section>
      <section className='padding'>
        <About />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className='px-4 py-6'>
        <Pricing />
      </section>
      {/* <section className='padding'>
        <Gallery />
      </section>
      <section className='padding-x py-2'>
        <Team />
      </section>*/}
      <section className='padding'>
        <Footer />
      </section>
      
    </div>
  );
}
