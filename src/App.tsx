import "./App.css";
import { Route, Routes } from 'react-router-dom';

import Nav from "./components/Nav";
import Home from "./pages/Home";
import ExerciseInfo from "./pages/ExerciseInfo";

export default function App() {
  
  return (
    <div className="relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseInfo />} />
      </Routes>
    </div>
  );
}
