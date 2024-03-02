import { useState } from "react";
import { Navigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const data = {
    username,
    email,
    password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        
        try {
            const res = await fetch(`${backendUrl}/signup`,{
                method : 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(data)
            })
            if(res.status === "300"){
                alert("Please enter correct email");
            }
            console.log(res);
            setUserName('');
            setEmail('');
            setPassword('');
            setNavigate(true);
        } catch (error) {
            alert(error.message);
        }

    }

    if(navigate){
        return <Navigate to={'/login'} />
    }
  return (
    <div
      className="text-white w-96 h-96 backdrop-blur-sm bg-black/60
     rounded-2xl flex flex-col gap-3 items-center mt-32  m-auto"
    >
      <h1 className="text-3xl mt-12 z-10">SignUp</h1>

      <form className="mt-8 z-10 flex flex-col gap-4 ">

        <div className="username flex gap-2">
          <label className="text-xl"> Username : </label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            type="text"
            className="text-black p-1 rounded  outline-none"
            placeholder="username"
          />
        </div>

        <div className="email flex gap-[50px] p-1">
          <label className="text-xl"> Email : </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="outline-none rounded  p-1 text-black"
            placeholder="email"
          />
        </div>

        <div className="password flex gap-3 p-1">
          <label className="text-xl"> Password : </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="outline-none rounded  p-1 text-black"
            placeholder="password"
          />
        </div>

        <div className="btn text-center mt-5">
          <button type="submit"
            onClick={handleSubmit}
            className="text-xl bg-white text-black rounded-xl p-2  "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
