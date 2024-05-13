"use client"

import CustomButton from '@/components/CustomButton'
import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const HandlerRegister = async (e: any) => {
    e.preventDefault()
    const respones = await axios.post('http://localhost:8080/user',{
      email,
      password,
      username    
    });
    try {
      console.log(respones.data)
      alert('Registration success')
      localStorage.setItem('isLogin', 'true')
      // to login page
      window.location.href = '/auth/login'
    } catch (error) {
      console.error(error)
      alert('registration Invalid')
    }
  }

  return (
    <div className="justify-center items-center ml-96 bg-sky-300 rounded-3xl w-[485px] h-[530px]">
      <div className="text-center font-extrabold text-white text-xl mt-5 p-5">
        <h2>Register</h2>
      </div>
      <form onSubmit={HandlerRegister} className="p-6">
        <span className="text-lg font-bold text-white ml-4">Username</span>
        <input type="text"
         placeholder="Username" 
         className="w-full rounded-full placeholder:p-4 p-2"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         required
         />
        <span className="text-lg font-bold text-white ml-4">E-mail</span>
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-full placeholder:p-4 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span className="text-lg font-bold text-white ml-4">Password</span>
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-full placeholder:p-4 p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <CustomButton
        type="submit"
        title="Register"
        style=" p-2 bg-white rounded-full text-sky-400 w-32 ml-40"
      />
      </form>
    </div>
  )
}

export default Register