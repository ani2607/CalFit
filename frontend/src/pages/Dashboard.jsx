import Navbar from "../components/Navbar"

const DashBoard = () => {
  const[calorie,setCalorie]=('');
  const[health,setHealth]=('');
  return (
    <>
      <nav>
        <Navbar />
      </nav>




      <span className=" text-6xl">
        <h2 className="flex justify-center text-bold text-red-700">Welcome User</h2>
        {/* <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 60,
                strings: ["Welcome user"],
              }}
            /> */}
      </span>


      <div className="flex grid-col-2 gap-4 ">
        <div className=" mx-auto place-items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Calorie</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Calorie will be displayed</p>

        </div>
        <div className=" mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Health</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Fitness will be displayed</p>

        </div>
      </div>
      
<a href="#" className="block my-20 mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CHART</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non necessitatibus quam deleniti natus eaque odio sed, rem quis aspernatur illo odit possimus aliquid vel cupiditate accusamus cumque quae, voluptatibus minima!</p>
</a>



    </>
  )
}

export default DashBoard
