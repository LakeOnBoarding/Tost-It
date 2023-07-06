import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Splash(){
  const navigate = useNavigate();
  const token = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      if (!token) {
        navigate("/signin");
      } else {
        navigate('/todo');
      }
    }, 1500);
  }, [token, navigate]);

  return (
  <div className="bg-main_skyblue flex flex-col justify-center items-center h-screen">
    <h1 className="animate-bounce text-6xl font-mono font-bold text-center	">To Do List <br />
    for P</h1>
  </div>
  )
}

export default Splash;