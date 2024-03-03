import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

function Design() {
  return (
    <section className=' bg-[#485156]'>
        <section className="max-container flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20" >
            <div className=" ">

              <div className="text-center">
                <h2 className="bold-40 md:bold-52 lg:bold-64 text-slate-50">Design</h2>
              </div>

              <div className="flexCenter max-container relative w-full p-5">
                <Image  src="/design.gif" alt="Bratinstorm"  width={500}  height={500} className=""/>
              </div>

              <div className='px-8 max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mx-auto'>
              <p className="regular-14  lg:regular-18  text-slate-50 ">It's our commitment to delivering more than just services; it's about delivering results. Whether you're a startup with big dreams or an established brand looking for a fresh perspective, we're here to take your digital presence to the next level. <br /> <br /> From web design that combines form and function seamlessly to digital marketing strategies that drive growth, Digital Solutions is your partner in the digital journey. We thrive on challenges, and we're here to guide you through the ever-changing world of digital possibilities.</p>
              
              {/* <button className="p-4 flex items-center gap-2 mt-5 bg-slate-800 text-white">Contact Us<IoIosArrowForward/></button> */}
              </div>
        </div>
      </section>
  </section>

  )
}

export default Design