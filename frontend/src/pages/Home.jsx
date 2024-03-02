import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";

const Home = () => {
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
      </div>
    </>
  );
};

export default Home;
