import React from 'react'
import { FaPlus } from 'react-icons/fa'
import StatusCountCard from '../../component/HomeComponent/StatusCountCard'
import UseHooks from '../../Hooks/UseHooks'
import Cards from '../../component/HomeComponent/Cards'

const Home = () => {
  return (
    <div className='bg-[#F8FAFC]'>
      <div className='flex flex-col items-center gap-5 pt-10 md:pt-20 pb-10 w-11/12 mx-auto'>
        <h1 className='text-4xl md:text-5xl font-bold text-center'>Friends to keep close in your life</h1>
        <p className='text-[#64748B] text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
        <button className='btn bg-[#244D3F] text-white'><FaPlus /> Add a Friend</button>
      </div>
      <StatusCountCard></StatusCountCard>
      <Cards></Cards>
    </div>
  )
}

export default Home
