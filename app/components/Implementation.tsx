import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'


function Implementation() {
  return (
    <section className="max-container flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20" >
        <div className=" ">

          <div className="text-center">
            <h2 className="bold-40 md:bold-52 lg:bold-64 text-[#485156]">Implementation</h2>
          </div>

          <div className="flexCenter max-container relative w-full p-5">
            <Image  src="/people.gif" alt="Bratinstorm"  width={500}  height={500} className=""/>
          </div>

          <div className='px-8 max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mx-auto'>
          <p className="regular-14 lg:regular-18 text-[#485156]">Our team of skilled professionals carefully translate strategies into action, ensuring that each element is in place for a seamless digital experience. From web development and design to digital marketing campaigns, our experts work tirelessly to bring your vision to life. <br /><br /> We believe in the power of attention to detail. Our implementation process is characterized by a thorough and methodical approach, leaving no stone unturned. Quality and excellence are at the forefront of everything we do.</p>
          
          <button className="p-4 flex items-center gap-2 mt-5 text-white bg-[#485156] ">Contact Us<IoIosArrowForward/></button>
          </div>
    </div>
  </section>
  )
}

export default Implementation