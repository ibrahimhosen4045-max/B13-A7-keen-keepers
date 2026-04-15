import React from 'react'
import { ImStatsDots } from 'react-icons/im'
import { MdAccessTime } from 'react-icons/md'
import { RiHome2Line } from 'react-icons/ri'
import { NavLink } from 'react-router'

const Navber = () => {
  return (
    <div className=' bg-base-100 shadow-sm'>
      <div className="navbar w-11/12 container mx-auto flex flex-col md:flex-row">
  <div className="flex-1">
    <h1 className='text-2xl font-bold'>Keen<span className='font-semibold text-[25px] text-[#244D3F]'>Keeper</span></h1>
  </div>
  <div className="flex-none">
    <ul className="font-semibold text-[#64748B] flex gap-3">
      <NavLink to={'/'} 
      className={({isActive}) => `text-[16px] btn border-none ${isActive ? "bg-[#244D3F] text-white" : "bg-white text-[#64748B]"}`}>
       <RiHome2Line /> Home
      </NavLink>
      <NavLink to={'/timeline'} 
      className={({isActive}) => `text-[16px] btn border-none  ${isActive ? "bg-[#244D3F] text-white" : "bg-white text-[#64748B]"}`}>
      <MdAccessTime /> Timeline
      </NavLink>
      <NavLink to={'/stats'} 
      className={({isActive}) => `text-[16px] btn border-none ${isActive ? "bg-[#244D3F] text-white" : "bg-white text-[#64748B]"}`}>
      <ImStatsDots /> Stats
      </NavLink>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navber
