"use client"

import React,{ useEffect, useState } from 'react';
import Link from 'next/link';
import CustomButton from './CustomButton';
import { useRouter } from 'next/navigation'

const Navbar: React.FC = ({id}: any) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggIn, setIsLoggIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('isLogin')) {
      setIsLoggIn(true);
      // jiks memiliki username tampilkan
      const storageUsername = localStorage.getItem('username')
      if (storageUsername) {
        setUsername(storageUsername)
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };




  const handleLogin = async () => {
    try {
      // Anda perlu mengganti URL dengan URL endpoint JSON-Server Anda
      const response = await fetch(`http://localhost:8080/users/${id}`); // Ganti ID dengan ID pengguna yang sesuai
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      const userUsername = userData;
      
      // Simpan data login dan nama pengguna di localStorage
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('username', userUsername);
      setIsLoggIn(true);
      setUsername(userUsername);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const HandlerLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLogin')
    localStorage.removeItem('username')
    setIsLoggIn(false)
    router.push('/auth/login')
    setUsername('')
    }
    
  }

  
  return (
    <nav className="h4-4 p-6">
      <div className="container mx-auto bg-opacity-25 bg-tarnsparent flex justify-between items-center p-4 rounded-full">
        <div>
          <Link href="/">
            <h2 className="text-sky-600 text-3xl mr-4 font-bold">Bottleware.</h2>
          </Link>
        </div>
        <div className="flex md:hidden">
          <button className="text-gray-400 mr-4 hover:text-sky-600 focus:outline-none" onClick={toggleMenu}>
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center ${isOpen ? 'fixed' : 'hidden'}`}>
          <div className="md:flex md:items-center p-6 fixed bg-sky-600 md:bg-transparent h-screen w-36 rounded-2xl md:ml-[-144px]">
            <Link href="/"> 
              <h4 className="flex-col mt-4 md:flex-row md:mt-0 text-gray-400 mr-4 hover:text-sky-600 ">
                Home
              </h4>
            </Link>
            <Link href="/products">
              <h4 className="flex-col mt-4 md:flex-row md:mt-0 text-gray-400 mr-4 hover:text-sky-600">
                Products
              </h4>
            </Link>
            {/* Add more links as needed */}
          </div>
        </div>
        <div className="flex gap-4">
          {isLoggIn ? ( 
            <div>
                <p className='text-black font-extrabold '>Hi, Pelanggan Bottlewear!</p>
            <button onClick={HandlerLogout}>Logout</button>
            </div>
          ): (
            <div className='flex gap-4'>
              <span>Login untuk melanjutkan</span>
               <CustomButton onClick={handleLogin} title='Login' style='bg-sky-600 rounded-2xl p-2 text-white hover:text-sky-600r:bg-sky-600/25 w-24' />
             </div>
          )}
        </div>
      </div>
      
    </nav>
    )
};

export default Navbar;
