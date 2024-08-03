import React from 'react'
import Image from "next/image";


const Footer = () => {
  return (
      <footer className='footer z-10 border border-t-blue-950 border-l-transparent border-b-transparent border-r-transparent text-black'>
          <div className='container flex justify-between'>
<span className=' mt-2'>
                  <div className="md:w-full">
                  <Image
                      src={"/images/tech10.jpg"}
                      width={110}
                      height={100}
                          alt="tech" className="w-full rounded-lg"
                  />
                  </div>
</span>
<p className='text-gray-950 text-lg mt-3 font-bold'>All rights reserved</p>
          </div>
    </footer>
  )
}

export default Footer
