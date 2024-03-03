import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'

function Clients() {
  return (
    <main className='gap-20 py-10 pb-32 md:gap-28 lg:py-20 '>
      <div className='bg-[#485156]'>
        <section className="max-container flexCenter py-6 " >
          <div className=" ">
            <div className="text-center">
              <h2 className="bold-40 md:bold-52 lg:bold-64 text-slate-50">Inside our <br /> client's minds</h2>
            </div>
            <div className="flexCenter max-container relative w-full p-5">
              <Image  src="/update.gif" alt="Bratinstorm"  width={200}  height={200} className=""/>
            </div>
          </div>
        </section>
    </div>

        <section className=''>

            <div className='px-8  py-10 max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mx-auto'>
              <p className="regular-14  lg:regular-18  text-[#485156] ">It's our commitment to delivering more than just services; it's about delivering results. Whether you're a startup with big dreams or an established brand looking for a fresh perspective, we're here to take your digital presence to the next level. <br /> <br /> From web design that combines form and function seamlessly to digital marketing strategies that drive growth, Digital Solutions is your partner in the digital journey. We thrive on challenges, and we're here to guide you through the ever-changing world of digital possibilities.</p>
            </div>

        <div className=' flexCenter'>
            <div className="grid place-content-center gap-4 lg:grid-cols-2 ">

              <div className=' max-w-60 max-h-auto bg-[#c8cbcc] p-4 rounded-lg shadow-[#c8cbcc] text-[#16181a]'>
                  <p className='regular-14 lg:regular-15'>"Working with this design agency was a dream come true. They have an incredible eye for detail and a knack for delivering on time. They've elevated our brand to a whole new level."</p>
                  <div className='mt-3 lg:mt-5'>
                    <p className='  bold-15 lg:bold-16'>Sarah Thompson</p>
                    <p className=' regular-12 lg:regular-14'>PM NeuralLink Innovators</p>
                  </div>
              </div>

              <div className=' max-w-60 max-h-auto bg-[#c8cbcc] p-4 rounded-lg shadow-[#c8cbcc] text-[#16181a]'>
                  <p className='regular-14 lg:regular-15'>"Working with this design agency was a dream come true. They have an incredible eye for detail and a knack for delivering on time. They've elevated our brand to a whole new level."</p>
                  <div className='mt-3 lg:mt-5'>
                    <p className='  bold-15 lg:bold-16'>Lidia Truman</p>
                    <p className=' regular-12 lg:regular-14'>CDO QuantumFusion Labs</p>
                  </div>
              </div>


              <div className=' max-w-60 max-h-auto bg-[#c8cbcc] p-4 rounded-lg shadow-[#c8cbcc] text-[#16181a]'>
                  <p className='regular-14 lg:regular-15'>"Working with this design agency was a dream come true. They have an incredible eye for detail and a knack for delivering on time. They've elevated our brand to a whole new level."</p>
                  <div className='mt-3 lg:mt-5'>
                    <p className='  bold-15 lg:bold-16'>Augustin Collins</p>
                    <p className=' regular-12 lg:regular-14'>CRO CloudCore Dynamics</p>
                  </div>
              </div>

              <div className='
                max-w-60 
                max-h-auto  
                p-4 
                rounded-lg 
                shadow-[#c8cbcc] 
                text-[#16181a]
                bg-[#c8cbcc]
                '>
                  <p className='regular-14 lg:regular-15'>"Working with this design agency was a dream come true. They have an incredible eye for detail and a knack for delivering on time. They've elevated our brand to a whole new level."
                  </p>
                  <div className='mt-3 lg:mt-5'>
                    <p className='  bold-15 lg:bold-16'>Mark Roberts</p>
                    <p className=' regular-12 lg:regular-14'>CFO SynoByte Solutions</p>
                  </div>
              </div>
       
            </div>
      </div>
                <div className='flexCenter'>
                <button className="p-4 flex items-center gap-2 mt-5 bg-[#485156] text-white">Contact Us<IoIosArrowForward/></button>
                </div>

        </section>
    </main>
  )
}

export default Clients