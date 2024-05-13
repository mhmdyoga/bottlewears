"use client";
import CustomButton from "@/components/CustomButton";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandlerLogin = async (e: any) => {
    e.preventDefault();

    try {
      const respons = await axios.get(
        `http://localhost:8080/user?email=${email}&password=${password}`
      );
      if (respons.data.length > 0) {
        alert('Login Success')
        localStorage.setItem('isLogin', 'true')
        window.location.href = '/'
      } else {
        throw new Error('Login Failed')
      }
    } catch (error) {
      console.error(error)
      alert('Login Failed')
    }
  };
  return (
    <div className="justify-center items-center ml-96 bg-sky-300 rounded-3xl w-[485px] h-[530px]">
      <div className="text-center font-extrabold text-white text-xl mt-5 p-5">
        <h2>Login</h2>
      </div>
      <form onSubmit={HandlerLogin} className="p-6">
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
        title="Login"
        style=" p-2 bg-white rounded-full text-sky-400 w-32 ml-40"
      />
      </form>
      <div className="p-6">
        <span className="text-white font-bold">Dont have account ?</span><br/>
      <Link href={'/auth/register'} className="italic text-white">Register Now</Link>
      </div>
    </div>
  );
};

export default Login;
