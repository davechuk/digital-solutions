import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

function Footer() {
  return (
    <footer className=' bg-[#485156] p-11 flexCenter flex-col'>

    <section className='text-center  mb-3'>
      <div className="text-center">
        <h2 className="  text-slate-50 bold-52 lg:bold-88">Chat with us</h2>
        <div className='flexCenter mb-5'>
        <button className="p-4 flex items-center gap-2 mt-5 bg-slate-50  text-[#485156] ">Contact Us<IoIosArrowForward/></button>
        </div>
        
      </div>
      <div className=' text-slate-50 regular-12 pt-5 sm:regular- md:regular-12 lg:regular-14'>
        <p>© 2024 Digital Solutions.</p>
        <p>Terms & Conditions. Privacy Policy. Licenses.</p>   
      </div>
    </section>
    </footer>

  )
}

export default Footer