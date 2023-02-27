
import Head from 'next/head'
import Image from 'next/image'

import {HiOutlineMenuAlt3} from 'react-icons/hi'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Arctic Fan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <div className='sticky top-0 px-4 py-5 flex justify-between items-center w-full  bg-white shadow-md'>
          <div className="navbrand">
            <Image src='/images/logo.png' width={200} height={100}/>
          </div>
          <div className="menu cursor-pointer">
            <HiOutlineMenuAlt3 color='#ed3030' size='2.5rem'/>
          </div>
       
        </div>
      <main className=' text-[#3A3A3A]'>
        <section className="hero w-full flex flex-col gap-y-7 items-center mt-14 px-4">
          <h4 className='text-lg text-[#ed3030] font-bold'>The New Era of Sound</h4>
          <h1 className='text-4xl text-center'>Hear your music in details</h1>
          <p className='px-4 text-center leading-relaxed opacity-60'>Litense Pro 250 change your way of perceiving music in all its beauty by giving you more control on the sound than ever before paired with a unique listening experience</p>
          <button className="cta bg-[#ed3030] outline-none border-none text-white text-lg px-9 py-4 mt-2 rounded-full shadow-xl">Purchase Now</button>
          <div className="fanpics w-full -mt-10 -z-10">
            <Image src="/images/fan.png" width={100} height={100}/>
          </div>
        </section>

        <section className="carousel-promo mt-12 px-4 relative z-10">
          <div className="overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] -z-20"></div>
          <h2 className='text-4xl leading-[1] mb-5 z-10'>Your perfect companion in everything</h2>
          <p className='text-lg leading-[1.5] mb-5 z-10'>Our new line of headphones is capable of much more than providing audio for music, videos, and cars. It has the power to help you communicate & stay informed.</p>
          <button className="mb-5 z-10 cta bg-[#ed3030] outline-none border-none text-white text-lg px-9 py-4 mt-2 rounded-full shadow-xl">Purchase Now</button>
        </section>
      </main>
    </>
  )
}

  










{/* #ed3030 ophir color */}
  {/* <div className="navmenu hidden">
    <ul className="navlist">
      <li>About</li>
      <li>Features</li>
      <li>Pricing</li>
      <li>Specifications</li>
    </ul>
  </div> */}