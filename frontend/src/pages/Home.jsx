import { useState } from "react";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import {Navigate} from 'react-router-dom'

const Home = () => {

  const [navigate,setNavigate] = useState(false);


  if(navigate){
    return <Navigate to={'/bmr'} />
  }


  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div
        className="text-white w-96 h-96 backdrop-blur-sm bg-black/60
     rounded-2xl flex flex-col gap-3 items-center mt-20  m-auto shadow shadow-gray-800     "
      >
        <h1 className="text-5xl mt-10 ">Welcome</h1>

        <div className="flex mt-8 ">
        <h2 className="flex ">
            
            
          <span className="text-2xl">
        
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 60,
                strings: ["Are You Fit.", "Wanna Check !"],
              }}
            />
          </span>
        </h2>
        </div>
        <div className="mt-10">
        <button onClick={()=> setNavigate(true)} className="text-2xl bg-green-700 rounded p-1">Check Your Fitness</button>
        </div>
      </div>
    </>
  );
};

export default Home;
