import React from 'react'
import Image from 'next/image'


function Hero() {
  return (
      <section className="flexCenter gap-20 py-10 md:gap-28 lg:py-9">
        <div className=" ">
          <div className="text-center">
            <p className="regular-28 mt-6 text-[#485156]">HELLO & WELCOME TO</p>
            <h2 className="bold-52 md:bold-64 lg:bold-88  text-[#485156]">Digital <br /> Solutions</h2>
          </div>
          <div className="flexCenter max-container relative w-full p-5">
            <Image 
              src="/heroimggif.gif"
              alt="hero"
              width={600}
              height={600}
              />
          </div>
        </div>
      </section>
  )
}

export default Hero