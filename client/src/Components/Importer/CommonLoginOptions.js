import React from 'react'
import xx from '../../Assets/Images/register_header 1.png';
import xy from '../../Assets/Images/image 37.png';
import yy from '../../Assets/Images/image 38.png';
import xxx from '../../Assets/Images/importerImg.png'
import { useNavigate } from 'react-router-dom';


const CommonLoginOptions = () => {
  const navigate = useNavigate();
  return (
    <div className='h-[100vh] '>
      <nav id='un-auth-nav-bar' className='text-[#FFFFFF] font-poppins h-[10%] w-full px-3 py-1 rounded-md bg-[#2181F8] flex items-center justify-between shadow-lg'>
        <span className=' sm:text-md text-lg  font-semibold py-2 px-4 hover:font-bold hover:cursor-pointer'>Company Logo</span>
        <ul className=' flex flex-row gap-6 text-md font-medium cursor-pointer'>
          <li className='hover:font-bold'>About</li>
          <li className='hover:font-bold'>FAQ</li>
          <li className='hover:font-bold'>Contact Us</li>
          <li className='hover:font-bold'>XYZ</li>
        </ul>
        <span className=' min-w-12 cursor-pointer hover:font-bold'>
          EN
        </span>
      </nav>
      <section id='hero-section' className='text-[#FFFFFF] md:flex md:items-center font-poppins md:h-[48%]  w-[94%] md:px-2 md:py-2 lg:px-4 lg:py-4 mx-auto md:my-4  rounded-xl '>
        <div>
        <h1 className=' pt-14 pb-2 px-10 lg:pt-16 lg:pb-4 lg:px-12 xl:text-4xl text-[#FFFFFF] font-poppins tracking-wide font-semibold sm:text-lg lg:leading-3 md:text-2xl lg:text-3xl'>Empowering Global Trade</h1>
        <p className=' my-8 mx-6 px-6 leading-8 sm:text-md md:text-lg mix-blend-normal lg:text-xl lg:my-11 lg:leading-10 xl:text-2xl xl:my-13 xl:leading-12'>
          Seamlessly Connect <span className=' font-semibold'>Importers</span> and <span className=' font-semibold'>Exporters</span> Worldwide
          <br />
          with 3 AVM Traders.
        </p>
        </div>
      </section>
      <main id='main-section' className=' h-[100%] md:h-[75%] my-6 mx-8 flex flex-row justify-evenly font-poppins'>
        <div id='Exporter-Login-Card' onClick={()=>{
          navigate('/exporter');
        }} className=' hover:cursor-pointer hover:border-[#000000] w-1/3 h-[90%] my-4 mx-2 bg-[#FAFAFA] rounded-lg shadow-lg text-center'>
          <img src={xy} className='h-auto mx-auto ' />
          <p className=' my-8 text-md  font-normal text-[#000000]'>
            <span className=' text-[#2181F8] font-medium'> Unlock </span>Seamless Trade <br /> Solutions
          </p>
          <h2 className='sm:text-lg md:text-2xl text-[#000000]'>Login As</h2>
          <h3 className='sm:text-lg md:text-2xl text-[#2181F8]'>Exporter</h3>
        </div>
        <div id='Importer-Login-Card' onClick={()=>{
          navigate('/importer/login');
        }} className='  hover:cursor-pointer hover:border-[#000000] w-1/3 h-[90%] my-4 mx-2 bg-[#FAFAFA] rounded-lg shadow-lg text-center'>
          <img src={xxx} className='h-auto mx-auto w-full' />
          <p className=' my-8 text-md font-normal text-[#000000]'>
            <span className=' text-[#2181F8] font-medium'> Explore </span>Trade Options and <br /> Services
          </p>
          <h2 className='sm:text-lg md:text-2xl text-[#000000]'>Login As</h2>
          <h3 className='sm:text-lg md:text-2xl text-[#2181F8]'>Importer</h3>
        </div>
      </main>
    </div>
  )
}

export default CommonLoginOptions;