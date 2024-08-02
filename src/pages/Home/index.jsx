import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();
  const [user, setUser] = useState({});
  useEffect(()=>{
    if(!localStorage.getItem("accessToken")){
      navigate("/login")
      return;
    }
      setUser(JSON.parse(localStorage.getItem("user")));
      console.log(user);
  }, [])
  return (
    <div>
      Home
      <h1>Hello {user.username}</h1>
    </div>
  )
}

export default Home
