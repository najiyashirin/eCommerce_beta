import React from "react";
import axios from 'axios'
import { Link,Routes,Route} from 'react-router-dom'
import {useState} from 'react'
import {login} from "../api/userAuth";

function Login() {
   const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const [message,setMessage]=useState("")

const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]: e.target.value});
};

const handleSubmit=async(e)=>{
    e.preventDefault();

    try{
        const response=await login(formData);

        setMessage(response.data.message);
    } catch(error){
        setMessage(error.response?.data?.message || "Something went wrong");
    }

};

  return (
   <>
         <h1>Login</h1>
         <form onSubmit={handleSubmit}>
          
           <label htmlFor="">email: </label>
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             required
           />
           <br />
           <label htmlFor="">password: </label>
           <input
             type="password"
             name="password"
             value={formData.password}
             onChange={handleChange}
             required
           />
           <br />
           <button type="submit">Login</button>
         </form>
         {message && <p>{message}</p>}
         <Link to={'/signup'}>Sign Up</Link>
       </>
  )
}

export default Login