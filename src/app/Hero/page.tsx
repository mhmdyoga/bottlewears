import { MotionDiv } from '@/components/Motion/page'
import Image from 'next/image'
import React from 'react'

const FromLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
    WhileInView : {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 },
    },
    exit: { x: 100, opacity: 0 },
  };

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-20 items-center">
    <MotionDiv variants={FromLeft} initial="hidden" whileInView="WhileInView" exit="exit" viewport={{ once: true, amount: 0.5 }} className="p-24 text-center md:text-start">
          <h2 className="text-xl md:text-6xl font-bold">
            Buy Stainless Steel & <br />
            Reusable Water Bottles |<br /> Bottleware.
          </h2>
          <span className="text-[#cdd9d9] md:text-2xl text-sm">
            Discover a wide selection of stainless steel,
            <br /> reusable, and insulated water bottles at
            <br /> Bottlewear. Shop now for eco-friendly
            <br /> hydration solutions!
          </span>
        </MotionDiv>
        <MotionDiv variants={FromLeft} initial="hidden" whileInView="WhileInView" exit="exit" viewport={{ once: true, amount: 0.5 }} className="">
          <Image src="/corcikcle.png" alt="" width={356} height={367}/>
        </MotionDiv>
    </div>
  )
}

export default Hero