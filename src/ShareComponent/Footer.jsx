import React from 'react'
import logo from '../assets/logo-xl.png'
import logo1 from '../assets/facebook.png'
import logo2 from '../assets/instagram.png'
import logo3 from '../assets/twitter.png'

const Footer = () => {
  return (
    <div className='w-full bg-[#244D3F]'>
      <footer className=" w-11/12 container mx-auto  text-white pt-20 pb-7.5">
        <div className='flex flex-col items-center text-center gap-5'>
            <img className='w-70 lg:w-auto' src={logo} alt="" />
            <h1>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</h1>
            <h1 className='text-xl'>Social Links</h1>
            <div className='flex gap-3 justify-center'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
            </div>
        </div>
        <div className='py-9'>
            <hr className='text-[#30665480]'/>
        </div>
        <div className='flex flex-col items-center text-center md:flex-row justify-between'>
            <p className='text-gray-400'>© {new Date().getFullYear()} KeenKeeper. All rigth reserved.</p>
            <div className='flex gap-7 text-gray-400'>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies</p>
            </div>
        </div> 
      </footer>
    </div>
  )
}

export default Footer
