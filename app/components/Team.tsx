import React from 'react'
import Image from 'next/image'

function Team() {
  return (
    <main className='max-comtainer'>
      <section className="flexCenter bg-[#485156] pt-9 flex-col">
        <div>
          <div className="text-center">
            <h2 className="bold-40 md:bold-52 lg:bold-64 text-slate-50">Meet the<br />team behind</h2>
          </div>
          <div className="flexCenter relative w-full">
            <Image  
            src="/team.gif" 
            alt="Bratinstorm"  
            width={300}  
            height={300} 
            className=""/>
          </div>        
        </div>
      </section>

{/* --------------------------------- PROFILE ------------------------------------------------------ */}

<section className="flexCenter bg-[#485156] flex-col">
  <div>
    <div className=' items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
      <Image  
        src="/1.jpg" 
        alt="1"  
        width={1000}  
        height={1000} 
        />
          <div className='flex-col p-16 m-auto'>
            <>
            <h4 className='text-slate-50 bold-32 md:bold-40 lg:bold-64'>Daniel</h4>
            <p className="text-slate-50 regular-12 md:regular-12 lg:regular-14 max-w-[400px]">Jessica is an accomplished leader and visionary, serving as the CEO of Digital Solutions, a cutting-edge marketing agency at the forefront of digital innovation. With a relentless commitment to driving business growth and a passion for excellence, Jessica brings a wealth of expertise to the helm of our organization. <br /> <br />
            Jessica had always been fascinated by the ever-evolving world of digital marketing. Throughout her career, she had worked for various marketing agencies, witnessing firsthand the transformative power of digital strategies in helping businesses grow and thrive.</p>   
            </>             
          </div>
    </div>
  </div>


  <div className=' bg-white'>
    <div className=' items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
    <div className='flex-col p-16 m-auto'>
            <>
            <h4 className='text-[#485156] bold-32 md:bold-40 lg:bold-64'>Nora</h4>
            <p className="text-[#485156] regular-12 md:regular-12 lg:regular-14 max-w-[400px]">Jessica is an accomplished leader and visionary, serving as the CEO of Digital Solutions, a cutting-edge marketing agency at the forefront of digital innovation. With a relentless commitment to driving business growth and a passion for excellence, Jessica brings a wealth of expertise to the helm of our organization. <br /> <br />
            Jessica had always been fascinated by the ever-evolving world of digital marketing. Throughout her career, she had worked for various marketing agencies, witnessing firsthand the transformative power of digital strategies in helping businesses grow and thrive.</p>   
            </>             
          </div>
      <Image  
        src="/2.jpg" 
        alt="2"  
        width={1000}  
        height={1000} 
        />
    </div>
  </div>

  <div>
    <div className=' items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
      <Image  
        src="/3.jpg" 
        alt="3"  
        width={1000}  
        height={1000} 
        />
          <div className='flex-col p-16 m-auto'>
            <>
            <h4 className='text-slate-50 bold-32 md:bold-40 lg:bold-64'>Jessica</h4>
            <p className="text-slate-50 regular-12 md:regular-12 lg:regular-14 max-w-[400px]">Jessica is an accomplished leader and visionary, serving as the CEO of Digital Solutions, a cutting-edge marketing agency at the forefront of digital innovation. With a relentless commitment to driving business growth and a passion for excellence, Jessica brings a wealth of expertise to the helm of our organization. <br /> <br />
            Jessica had always been fascinated by the ever-evolving world of digital marketing. Throughout her career, she had worked for various marketing agencies, witnessing firsthand the transformative power of digital strategies in helping businesses grow and thrive.</p>   
            </>             
          </div>
    </div>
  </div>

        </section>
    </main>
  )
}

export default Team