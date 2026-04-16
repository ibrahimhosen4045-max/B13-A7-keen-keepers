import React, { useContext } from 'react'
import UseHooks from '../../Hooks/UseHooks'
import { MyContext } from '../../Context/ContextData'

const StatusCountCard = () => {
  const {friend} = UseHooks()
  const onTrack = friend.filter(total => total.status === "on-track")
  const attention = friend.filter(total => total.status === "overdue")
  const {meetFriend} = useContext(MyContext)
  return (
    <div className='container w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6  md:pb-10'>
      <div className='shadow-md border border-gray-100 p-8 text-center bg-white'>
        <h1 className='text-[32px] font-semibold'>{friend.length}</h1>
        <p className='text-lg text-[#64748B]'>Total Friends</p>
      </div>
      <div className='shadow-md border border-gray-100 p-8 text-center bg-white'>
        <h1 className='text-[32px] font-semibold'>{onTrack.length}</h1>
        <p className='text-lg text-[#64748B]'>On Track</p>
      </div>
      <div className='shadow-md border border-gray-100 p-8 text-center bg-white'>
        <h1 className='text-[32px] font-semibold'>{attention.length}</h1>
        <p className='text-lg text-[#64748B]'>Need Attention</p>
      </div>
      <div className='shadow-md border border-gray-100 p-8 text-center bg-white'>
        <h1 className='text-[32px] font-semibold'>{meetFriend.length}</h1>
        <p className='text-lg text-[#64748B]'>Interactions This Month</p>
      </div>
    </div>
  )
}

export default StatusCountCard
