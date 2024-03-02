import {useState} from 'react'
import { AiOutlineHome ,AiOutlineFundProjectionScreen ,AiOutlineContacts} from 'react-icons/ai';
import { BsPerson} from 'react-icons/bs';
import { GiHamburgerMenu} from 'react-icons/gi';
import { IoFitnessOutline } from "react-icons/io5";

import { ImCross} from 'react-icons/im';
import { IoExitOutline } from "react-icons/io5";

import {Link} from 'react-router-dom'
import {Navigate} from 'react-router-dom'

const backendUrl = import.meta.VITE_REACT_APP_BACKEND_URL;


export default function Navbar() {
    const [nav,setNav] = useState(false);

    const [navigate,setNavigate] = useState(false);


  const handleLogout = async()=>{
    
    try {
      const result  = await fetch(`${backendUrl}/logout`,{
        method : 'POST',
        credentials : 'include'
      });
      console.log(result)
      setNavigate(true);
    } catch (error) {
      console.log(error);
      alert("Error while logging out");
    }
    
    
  }

  if(navigate){
    return <Navigate to={'/login'} />
  }


    return (
        <div className='flex text-white   items-center h-20  justify-between p-6 top-0 sticky z-20  rounded-xl mt-1 '>
            
            <div className="right  ">
                <Link to="/">
                <h1 className='font-signature font-medium text-4xl lg:text-5xl md:ml-20 hover:scale-125 cursor-pointer duration-300 z-30 flex gap-4 '>CalFit <span><IoFitnessOutline /></span></h1>
                </Link>
            </div>
            {!nav &&
            <div className="  hidden md:inline p-2 text-xl">
                <ul className='flex items-center justify-center space-x-3'>
                    <Link to="/" className='flex hover:scale-105 duration-200 space-x-1 '>
                        <div><AiOutlineHome size={22} /> </div>
                        <div className=''>Home </div>
                    </Link>
                    <Link to="/dashboard" className='flex hover:scale-105 duration-200 space-x-1 '>
                        <div><BsPerson size={22} /> </div>
                        <div>DashBoard</div>
                    </Link>
                    
                    <button onClick={handleLogout} className='flex hover:scale-105 duration-200 space-x-1 '>
                        <div className='mt-0.5'><IoExitOutline size={24} /> </div>
                        
                        <div>Logout</div>
                        </button>
                </ul>
            </div>}
            {!nav && 
            
                <div className='md:hidden p-2 z-30 cursor-pointer' onClick={()=>setNav(true)}>
                    <GiHamburgerMenu size={30} />
                </div>
            }
            {nav && 
                <div className='md:hidden p-2 z-30 cursor-pointer  ' onClick={()=>setNav(false)}> 
               
                <ImCross size={25} />
            </div>
            }
            {nav && 
                <ul className='flex flex-col absolute top-0 left-0 h-screen text-white bg-gradient-to-b from-red-700 to-blue-800 w-full justify-center items-center space-y-3 text-3xl z-20 ' >

                <Link to="/">
                <h1 className='font-signature font-medium text-6xl  md:ml-20  cursor-pointer  z-30 ' onClick={()=>setNav(false)}>Aniket Sharma</h1>
                </Link>

                <Link to="/" className=' flex flex-row space-x-2 hover:scale-105 duration-200 cursor-pointer items-center justify-center' onClick={()=>setNav(false)}>
                    <div><AiOutlineHome size={30} /> </div>
                    <div className='' >Home </div>
                </Link>
                
                <Link to="/about" className=' flex flex-row space-x-2 items-center justify-center hover:scale-105 duration-200 cursor-pointer ' onClick={()=>setNav(false)}>
                    <div><BsPerson size={30} /> </div>
                    <div>DashBoard</div>
                </Link>
                <Link to="/projects" className=' flex flex-row space-x-2 items-center justify-center hover:scale-105 duration-200 cursor-pointer' onClick={()=>setNav(false)}>
                    <div>
                    <AiOutlineFundProjectionScreen size={30} /> </div>
                    <div>Projects </div>
                    </Link>

                <Link to="/contact" className=' flex flex-row space-x-2 items-center  justify-center hover:scale-105 duration-200 cursor-pointer' onClick={()=>setNav(false)}>
                    <div className=''><AiOutlineContacts size={30} /> </div>
                    <div>Contact Me </div>
                </Link>
            </ul>
            }
        </div>
    )
}