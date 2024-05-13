import Image from 'next/image'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
   <div className="w-full mt-20">
    <Image src={"/footer.png"} width={780} height={20} alt='img' className='w-full h-auto' />
     <div className="w-full mt-[-450px]">
        <div className='p-24'>
            <h2 className='font-extrabold text-2xl text-white'>Bottlewear.</h2>
            <div className='flex list-none gap-14 mt-16 text-xl text-white'>
              <div>
                <li>About us</li>
                <li>Careers</li>
                <li>Privacy policy</li>
                <li>Collaboration</li>
            </div>
            <div>
                <li className="font-extrabold">Get help</li>
                <li>FAQ</li>
                <li>Contact us</li>
                <li>Shipping & returns</li>
            </div>  
            <div>
                <div className='flex gap-2'>
                    <EmailIcon />
                    <span>bottlewear@gmail.co.id</span>
                </div>
                <div className='flex gap-2'>
                    <CallIcon />
                    <span>+62 896 6962 3289</span>
                </div>
                <div className='flex gap-2'>
                    <Instagram />
                    <span>Bottlewear_id</span>
                </div>
            </div>
            </div>
        </div>
        <div className='text-start ml-24 text-white text-sm'>© 2022 Bottlewear. All rights reserved</div>
    </div>
   </div>
  )
}

export default Footer