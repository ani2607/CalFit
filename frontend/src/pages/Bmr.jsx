import { useState } from "react";
import Navbar from "../components/Navbar";
import {Navigate} from 'react-router-dom'

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Bmr = () => {
    const [height,setHeight] = useState('');
    const [bodyWeight,setBodyWeight] = useState('');
    const [age ,setAge] = useState('');
    const [gender,setGender] = useState('Male');
    const [activity,setActivity] = useState('Sedentary')
    const [navigate , setNavigate] = useState(false);

    const data = {
        height,bodyWeight,age,gender,activity
    }

    const submitData = async(e)=>{

        e.preventDefault();
        try {
            const res = await fetch(`${backendUrl}/bmr`,{
                method : 'POST',
                headers: {"Content-Type": "application/json"},
                credentials : 'include',
                body  : JSON.stringify(data)
            })

            if(res.status !== 200){
                alert("error in bmr");
            }
            else{
                setActivity('Sedentary');
                setHeight('');
                setBodyWeight('');
                setAge('');
                setNavigate(true);
                setGender('Male')
            }
        } catch (error) {
            alert("error while bmr cal")
            console.log(error);
            setActivity('Sedentary');
                setHeight('');
                setBodyWeight('');
                setAge('');
                setGender('Male')
        }


    }

    if(navigate){
        return <Navigate to={'/diet'} />
    }

  return (
    <div className=" ">
        <nav>
        <Navbar />
      </nav>
      
      <main className="text-white w-96 h-96 backdrop-blur-sm bg-black/60
     rounded-2xl flex flex-col gap-3 items-center mt-32  m-auto ">
        <h1 className="text-3xl mt-2">BMR Calculator</h1>
        <form className=" flex flex-col gap-4" >

            <div className="height flex gap-2 ">
                <label >Height(in cm):</label>
                <input className="text-black " value={height} onChange={(e)=> setHeight(e.target.value) } type="number" placeholder="height" />
            </div>
            <div className="bodyweight flex gap-2">
            <label >Body(in kg):</label>
                <input className="text-black " value={bodyWeight} onChange={(e)=> setBodyWeight(e.target.value) }   type="number" placeholder="weight" />
            </div>
            <div className="age flex gap-2 ">
            <label >Age:</label>
                <input className="text-black " value={age} onChange={(e)=> setAge(e.target.value) }  type="number" placeholder="age" />
            </div>
            <div className="gender flex gap-2 ">
                <label >Gender :</label>
                <input type="radio" checked= {gender === 'Male'} name="gender" value={"Male"}  onClick={()=> setGender('Male')} />
                <label>Male</label>
                <input type="radio" checked = {gender === 'Female'} name="gender" onClick={()=> setGender('Female')} value={"Female"} />
                <label>Female</label>
            </div>
            <div className="activityfacto">
            <label >ActivityFactor :</label>
            <select
                defaultValue={activity}
                onChange={(e)=> setActivity(e.target.value)}

             name="activity" className="text-black text-center" >
                <option value="Sedentary">Sedentary(desk jobs)</option>
                <option value="Light Activity">Light Activity(exercise 1-3 days)</option>
                <option value="Moderate Activity">Moderate Activity(exercise 3-5 days)</option>
                <option value="Very Active">Very Active(exercise 6-7 days) </option>
                <option value="Extra Active">Extra Active(exercise 2X/day) </option>
            </select>
            </div>

            <div className="btn">
                <button type="submit" onClick={submitData}>
                    Calculate
                </button>
            </div>

        </form>
      </main>
    </div>
  )
}

export default Bmr
