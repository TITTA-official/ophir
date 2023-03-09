
import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import {HiOutlineMenuAlt3} from 'react-icons/hi'

import {AiFillPlayCircle} from 'react-icons/ai'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Arctic Fan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      
      
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      
      </Head>
      
        <div className='sticky top-0 px-4 py-5 flex justify-between items-center w-full z-50 bg-white shadow-md'>
          <div className="navbrand">
            <Image src='/images/logo.png' className='w-[80%]' width={200} height={100}/>
          </div>
          <div onClick={() => showMenu()} className="menu cursor-pointer">
            <HiOutlineMenuAlt3 color='#ed3030' size='2.25rem'/>
          </div>
       
          <div className={`navmenu shadow-2xl transition-all duration-500 absolute top-0 headingFont ${!isOpen ? ' -right-48': 'right-0  flex  bg-white w-[65vw] h-[100vh]'}`}>
            <div onClick={() => showMenu()} className={`close absolute right-4 top-5 ${isOpen ? '' : 'hidden'}`}>
              <Image src='/images/close.png' className='w-[80%]' width={200} height={100}/>
            </div>
            <ul className={`navlist ${!isOpen ? 'hidden': 'flex flex-col gap-y-14 mt-24 px-4'}`}>
              <li className='cursor-pointer hover:text-[#ed3030]'>About</li>
              <li className='cursor-pointer hover:text-[#ed3030]'>Features</li>
              <li className='cursor-pointer hover:text-[#ed3030]'>Pricing</li>
              <li className='cursor-pointer hover:text-[#ed3030]'>Specifications</li>
            </ul>
          </div>
        </div>
      <main className=' text-[#3A3A3A]'>
        <section className="hero w-full flex flex-col gap-y-7 items-center mt-14 px-4">
          <h4 className='text-lg bodyFont text-[#ed3030] font-bold text-center'>Why suffer through the sweltering daily heat?</h4>
          <h1 className='text-3xl headingFont text-center'>When you can get our Mini Air Cooler</h1>
          <p className='px-4 bodyFont text-center leading-relaxed opacity-60'>Mini Air Cooler will provide you with the ultimate comfort and relief from the heat allowing you stay cool and comfortale no matter where you are!</p>
          <button className="cta bodyFont bg-[#ed3030] outline-none border-none text-white text-lg px-9 py-4 mt-2 rounded-full shadow-xl">Purchase Now</button>
          <div className="fanpics relative  flex justify-center items-center w-[80%] -mt-10 -z-10">
          <div className="w-[128px] absolute -ml-4 cursor-pointer">
                  <Image className='w-full object-fit' src="/images/play2.png"  width={100} height={100}/>
                </div>
            <Image className='w-full' src="/images/fan.png" width={200} height={100}/>
          </div>


        </section>

      
        <Carousel autoPlay={true} showIndicators={false} interval={5500}  infiniteLoop={true} showStatus={false} showArrows={false} swipeable={false}>
              <div className="carousel-promo px-4 relative z-10 text-left">
                <div className="overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.45)] -z-20"></div>
                <h2 className='text-[1.75rem] leading-[1.2] mb-5 z-10 headingFont'>Experience maximum comfort easily</h2>
                <p className='text-[1.2rem] leading-[1.5] mb-5 z-10 bodyFont'>This innovative air cooler is designed to be used on a desk or bedside table, making it perfect for small spaces such as hostels, apartments, shops and offices.</p>
                <button className="mb-5 z-10 cta bg-[#ed3030] bodyFont outline-none border-none text-white text-lg px-9 py-4 mt-2 rounded-full shadow-xl w-[50%]">Purchase Now</button>
              </div>
              <div className="carousel-promo2 px-4 relative z-10 text-left">
                <div className="overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] -z-20"></div>
                <h2 className='text-[1.75rem] leading-[1] mb-5 z-10 headingFont'>Sleek and Modern design.</h2>
                <p className='text-[1.2rem] leading-[1.5] mb-5 z-10 bodyFont'>One of the standout features of the Arctic Air Mini Air Cooler Ultra is its portability. The device is compact and lightweight, allowing you to move it from room to room with ease.</p>
                <div className="w-[84px] -ml-4">
                  <Image className='w-full' src="/images/play2.png"  width={100} height={100}/>
                </div>
              </div>
        </Carousel>
        


        {/* <div className="carousel-promo mt-12 px-4 relative z-10">
          <div className="overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] -z-20"></div>
          <h2 className='text-4xl leading-[1] mb-5 z-10'>Experience maximum comfort easily</h2>
          <p className='text-lg leading-[1.5] mb-5 z-10'>The Arctic Air Mini Air Cooler Ultra is a compact and portable air cooling device that is designed to provide a cool and refreshing breeze during hot days. This innovative air cooler is designed to be used on a desk or bedside table, making it perfect for small spaces such as hostels, apartments, shops and offices.</p>
          <button className="mb-5 z-10 cta bg-[#ed3030] outline-none border-none text-white text-lg px-9 py-4 mt-2 rounded-full shadow-xl">Purchase Now</button>
        </div> */}

        <section>
          <div className="w-full -mt-20 px-4">
              <div className='w-full flex items-center flex-col'>
                <Image className='w-[80%]' src="/images/arctic2.webp" width={100} height={100}/>
                <h1 className='text-xl w-full text-left font-bold mt-5 mb-5 headingFont'>Compact & Lightweight</h1>
              </div>
              <div >
                <p className='leading-relaxed opacity-60 bodyFont'>One of the standout features of the Arctic Air Mini Air Cooler Ultra is its portability. The device is compact and lightweight, allowing you to move it from room to room with ease.</p>
                <div className="mt-10 flex justify-center">
                  <Image className='w-[80%]' src="/images/arctic3.webp" width={100} height={100}/>
                </div>
                <h1 className='text-xl w-full  font-bold mb-5 mt-5 headingFont'>Charges Easily</h1>
                <p className='leading-relaxed opacity-60 bodyFont'> It can be powered using a USB cable, making it compatible with most power sources such as laptops, power banks, and wall adapters.</p>
              </div>
            </div>
        </section>

        <section className='specs mt-20 w-full mb-24'>
          <div className="cards w-full flex flex-col items-center gap-y-10 justify-center">
            <div className="card">
              <div>
                <Image className='mb-1 w-full ' src="/images/led-light.png" width={64} height={64}/>
              </div>
              <div className="font-medium mb-2 headingFont">
                Colorful LED Lights
              </div>
              {/* <div className="text-5xl font-bold text-[#ed3030]">
                
              </div> */}

            </div>
            <div className="card">
              <div>
                <Image className='mb-1 w-full rotate-90' src="/images/filter.png" width={64} height={64}/>
              </div>
              <div className="font-medium mb-2 headingFont">
                Filtration Purification
              </div>
              {/* <div className="text-5xl font-bold text-[#ed3030]">
                
              </div> */}

            </div>
            <div className="card">
              <div>
                <Image className='mb-1 w-full rotate-90' src="/images/fume.png" width={64} height={64}/>
              </div>
              <div className="font-medium mb-2 headingFont">
                Spray
              </div>
              {/* <div className="text-5xl font-bold text-[#ed3030]">
              </div> */}

            </div>
            <div className="card">
              <div>
                <Image className='mb-1 w-full rotate-90' src="/images/humidifier.png" width={64} height={64}/>
              </div>
              <div className="font-medium mb-2 headingFont">
                Humidification
              </div>
              {/* <div className="text-5xl font-bold text-[#ed3030]">
                
              </div> */}

            </div>
            <div className="card">
              <div>
                <Image className='mb-1 w-full ' src="/images/no-sound.png" width={64} height={64}/>
              </div>
              <div className="font-medium mb-2 headingFont">
                No Noise
              </div>
              {/* <div className="text-5xl font-bold text-[#ed3030]">
                
              </div> */}

            </div>
          </div>
        </section>

        <section className='banner2 z-20 relative w-full text-center'>
          <div className="overlay -z-10 w-full  absolute bg-[rgba(0,0,0,0.62)] top-0 bottom-0"></div>
          <div className="z-20 text-[1.4rem] font-bold headingFont px-4">Arctic Mini Air Cooler Specifications</div>
          <div className="z-20 mt-5 font-light text-sm opacity-70 bodyFont">Learn more about our product in details below.</div>

          <div className="font-bold text-lg mt-5 text-left mx-4 headingFont">Portability</div>
          <p className="mt-2 text-base font-light text-left leading-relaxed bodyFont mx-4">Mini air coolers are small and lightweight, making them easy to move around.</p>
          <p className=" mt-2 text-base font-light text-left leading-relaxed bodyFont mx-4">They can be easily transported from one room to another or taken outdoors</p>
          <p className="mt-2 text-base font-light text-left leading-relaxed bodyFont mx-4">This makes them ideal for small spaces like bedrooms, offices, and outdoor areas.</p>
          <div className="font-bold text-lg mt-5 text-left headingFont mx-4">Low Maintenance</div>
          <p className="mt-2 text-base font-light text-left leading-relaxed bodyFont mx-4">Mini air coolers require very little maintenance compared to traditional air conditioners.</p>
          <p className=" mt-2 text-base font-light text-left leading-relaxed bodyFont mx-4">They do not have filters that need to be replaced, and they have a simple water tank that needs to be refilled regularly.</p>
          <div className="font-bold text-lg mt-5 text-left headingFont mx-4">Cost-Effective</div>
          <p className="mt-2 text-base font-light text-left leading-relaxed bodyFont mx-4">Mini air coolers are generally less expensive than traditional air conditioners, making them a cost-effective cooling solution for small spaces.</p>
          <p className=" mt-2 text-base font-light text-left leading-relaxed bodyFont mx-4">They also do not require professional installation, which can save on installation costs.</p>
        </section>

        <section className='w-full px-4 flex flex-col gap-y-5'>
          <div className="text-xl font-medium headingFont">Make Your Purchase Now</div>
          <div className="opacity-80 font-light text-sm mb-5 bodyFont">Place your order with the product you wish to purchase and you will get feedback shortly after.</div>
          <input className='bodyFont border rounded w-full text-base py-2 px-4 shadow' type="email" placeholder='Email address' />
          <input className='bodyFont border rounded w-full text-base py-2 px-4 shadow' type="text" placeholder='Phone Number' />
          <textarea rows="4" className='bodyFont border rounded w-full text-base py-2 px-4 shadow' placeholder='Message'></textarea>
        </section>
        <footer className='border-t mt-24 pt-14 flex flex-col items-center justify-center'>
          <div className="w-[40%]">
            <Image src='/images/logo.png' width={200} height={100}/>
          </div>
          <div className="mt-10 py-2 opacity-70 text-sm">2023. Ophir. All Rights Reserved</div>
        </footer>
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