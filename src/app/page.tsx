"use client";

import Spline from "@splinetool/react-spline";
import Hero from "./Hero/page";
import Image from "next/image";
import { MotionDiv } from "@/components/Motion/page";
import { Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const isLoggin = localStorage.getItem('isLogin')
    if (!isLoggin) {
      router.push('/auth/login')
    }
  }, [router])
  

 const animateCard = {
  hidden: {
   opacity: 0,
   scale: 0.8
  },
  visible: {
   opacity: 1,
   scale: 1
  },
  WhileInView : {
   scale: 1.1,
   opacity: 1,
   transition: {
    duration: 0.5,
    delay: 0.5
   }
  }
 }

  return (
    <>
      <div className="md:ml-96 ml-0">
        <Spline
          className="width-auto h-auto"
          scene="https://prod.spline.design/1-JZhi2gCWznIsYp/scene.splinecode"
        />
      </div>
      <div >
        <Hero />
      </div> 
      <div className="flex flex-col md:flex-row p-12 justify-center items-center gap-20">
        <MotionDiv variants={animateCard} initial="hidden" whileInView="WhileInView" viewport={{ once: true, amount: 0.5 }} className="bg-[#12305F] md:w-[336px] md:h-[420px] w-[112px] h-[170px] md:rounded-[72px] rounded-3xl">
          <Image src="/navy-botol.png" alt="image" width={320} height={239} priority />
        </MotionDiv>
        <MotionDiv variants={animateCard} initial="hidden" whileInView="WhileInView" viewport={{ once: true, amount: 0.5 }} className="bg-[#F8DE02] md:w-[336px] md:h-[420px] w-[112px] h-[170px] md:rounded-[72px] rounded-3xl">
          <Image src="/yellow-botol.png" alt="image" width={380} height={319} priority />
        </MotionDiv>
        <MotionDiv variants={animateCard} initial="hidden" whileInView="WhileInView" viewport={{ once: true, amount: 0.5 }} className="bg-[#9F6F57] md:w-[336px] md:h-[420px] w-[112px] h-[170px] md:rounded-[72px] rounded-3xl">
          <Image src="/brown-botol.png" alt="image" width={165} height={239} priority className="ml-[70px]" />
        </MotionDiv>
      </div>
    </>
  );
}
