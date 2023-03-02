
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
      
        <div className='sticky top-0 px-4 py-5 flex justify-between items-center w-full z-50 bg-white shadow-md'>
          <div className="navbrand">
            <Image src='/images/logo.png' width={200} height={100}/>
          </div>
          <div className="menu cursor-pointer">
            <HiOutlineMenuAlt3 color='#ed3030' size='2.5rem'/>
          </div>
       
        </div>
      <main className=' text-[#3A3A3A]'>
        <section className="hero w-full flex flex-col gap-y-7 items-center mt-14 px-4">
          <h4 className='text-lg text-[#ed3030] font-bold'>The New Era of Comfort</h4>
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

        <section>
          <div className="w-full -mt-20 px-4">
              <div>
                <Image src="/images/fan.png" width={100} height={100}/>
                <h1 className='text-2xl w-full font-bold mt-5 mb-5'>Easily control your smartphone</h1>
              </div>
              <div>
                <p className='leading-relaxed opacity-60'>With our new line of headphones, you’ll be able to remain seamlessly connected to your phone without looking at it</p>
                <Image className='mt-10' src="/images/fan.png" width={100} height={100}/>
                <h1 className='text-2xl w-full  font-bold mb-5 mt-5'>Charge your headphones quickly</h1>
                <p className='leading-relaxed opacity-60'>With Q-Charge patented technology, you can have fully charged headphones in 10 mins. </p>
              </div>
            </div>
        </section>

        <section className='specs mt-10 w-full mb-24'>
          <div className="cards w-full flex flex-col items-center gap-y-10 justify-center">
            <div className="card">
              <div>
                <Image className='mb-1 w-full rotate-90' src="/images/chargeicon.png" width={150} height={100}/>
              </div>
              <div className="font-medium mb-2">
                Charge
              </div>
              <div className="text-5xl font-bold text-[#ed3030]">
                2hrs
              </div>

            </div>
            <div className="card">
              <div>
                <Image className='mb-1 w-full rotate-90' src="/images/chargeicon.png" width={150} height={100}/>
              </div>
              <div className="font-medium mb-2">
                Charge
              </div>
              <div className="text-5xl font-bold text-[#ed3030]">
                2hrs
              </div>

            </div>
          </div>
        </section>

        <section className='banner2 z-20 relative w-full text-center'>
          <div className="overlay -z-10 w-full absolute bg-[rgba(0,0,0,0.4)] top-0 bottom-0"></div>
          <div className="z-20 text-2xl font-bold">Arctic Mini Air Cooler specifications</div>
          <div className="z-20 mt-5 font-light text-lg opacity-70">Learn more about our product in details below.</div>

          <div className="font-bold text-xl mt-7 text-left mx-4">Highlights</div>
          <p className="mt-4 opacity-70 font-light text-left leading-relaxed mx-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, harum quas amet nihil consequatur ducimus?</p>
          <p className=" mt-4 font-light text-left leading-relaxed mx-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, harum quas amet nihil consequatur ducimus?</p>
          <p className="mt-4 font-light text-left leading-relaxed mx-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, harum quas amet nihil consequatur ducimus?</p>
          <div className="font-bold text-xl mt-7 text-left mx-4">Battery</div>
          <p className="mt-4 opacity-70 font-light text-left leading-relaxed mx-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, harum quas amet nihil consequatur ducimus?</p>
          <p className=" mt-4 font-light text-left leading-relaxed mx-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, harum quas amet nihil consequatur ducimus?</p>
          <p className="mt-4 font-light text-left leading-relaxed mx-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, harum quas amet nihil consequatur ducimus?</p>
          <div className="font-bold text-xl mt-7 text-left mx-4">Other features</div>
          <p className="mt-4 opacity-70 font-light text-left leading-relaxed mx-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, harum quas amet nihil consequatur ducimus?</p>
          <p className=" mt-4 font-light text-left leading-relaxed mx-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, harum quas amet nihil consequatur ducimus?</p>
          <p className="mt-4 font-light text-left leading-relaxed mx-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, harum quas amet nihil consequatur ducimus?</p>
        </section>

        <section className='w-full px-4 flex flex-col gap-y-5'>
          <div className="text-2xl font-medium">Make Your Purchase Now</div>
          <div className="opacity-80 font-light mb-5">Place your order with the product you wish to purchase and you will get feedback shortly after.</div>
          <input className='border rounded w-full text-lg py-2 px-4 shadow' type="email" placeholder='Email address' />
          <input className='border rounded w-full text-lg py-2 px-4 shadow' type="text" placeholder='Phone Number' />
          <textarea rows="4" className='border rounded w-full text-lg py-2 px-4 shadow' placeholder='Message'></textarea>
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