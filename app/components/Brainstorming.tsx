import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";


function Brainstorming() {
  return (
    <section className="max-container flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20">
      <div className=" ">

        <div className="text-center">
          <h2 className="bold-40 md:bold-52 lg:bold-64  text-[#485156]">Brainstorm</h2>
        </div>

        <div className="flexCenter max-container relative w-full p-5">
          <Image  src="/brainstormimg.gif" alt="Bratinstorm"  width={500}  height={500} className=""/>
        </div>

        <div className='px-8 max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mx-auto'>
        <p className="regular-14  lg:regular-1   text-[#485156] ">At Digital Solutions, innovation and creative thinking are at the heart of our success. Our brainstorming sessions are the incubators of ingenious ideas. We gather our team of creative minds, each bringing a unique perspective to the table, and explore uncharted territories in the digital realm. <br /><br /> During a brainstorm, we delve into your goals and challenges, breaking down barriers to uncover inventive solutions and generateing a spectrum of concepts and strategies.</p>
        
        <button className="p-4 flex items-center gap-2 mt-5 bg-[#485156] text-white">Contact Us<IoIosArrowForward/></button>
        </div>
        
      </div>
    </section>
)}

export default Brainstorming