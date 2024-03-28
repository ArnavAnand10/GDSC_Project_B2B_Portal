import React from 'react'
import xx from '../../Assets/Images/register_header 1.png'
const CommonLoginOptions = () => {
  return (
    <div className='h-[100vh]'>
        <nav id='un-auth-nav-bar' className='text-[#FFFFFF] font-poppins h-[10%] w-full px-3 py-1 rounded-md bg-[#2181F8] flex items-center justify-between shadow-lg'>
        <span className=' sm:text-md text-lg  font-semibold py-2 px-4 '>Company Logo</span>
        <ul className=' flex flex-row gap-6 text-md font-medium cursor-pointer'>
            <li className='hover:font-bold'>About</li>
            <li className='hover:font-bold'>FAQ</li>
            <li className='hover:font-bold'>XYZ</li>
            <li className='hover:font-bold'>XYZ</li>
        </ul>
        <span className=' min-w-12 cursor-pointer hover:font-bold'>
            EN
        </span>
        </nav>
        <section id='hero-section' className='text-[#FFFFFF] font-poppins h-[45%] w-[90%] px-2 py-2 mx-auto my-4 rounded-xl'>
        <h1 className=' pt-10 px-8 text-[#FFFFFF] font-poppins tracking-wide font-semibold sm:text-lg md:text-2xl'>Empowering Global Trade</h1>
        <p className=' my-8 mx-6 px-2 leading-8 sm:text-md md:text-lg'>
        Seamlessly Connect <span className=' font-semibold'>Importers</span> and <span className=' font-semibold'>Exporters</span> Worldwide 
        <br />
        with 3 AVM Traders.
        </p>
        </section>
        <main id='main-section'>

        </main>
    </div>
  )
}

export default CommonLoginOptions;