import React from 'react'

const StatusCountCard = () => {
  return (
    <div className='container w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 pb-10'>
      <div className='shadow-md border border-gray-100 p-8 text-center'>
        <h1 className='text-[32px] font-semibold'>10</h1>
        <p className='text-lg text-[#64748B]'>Total Friends</p>
      </div>
      <div className='shadow-md border border-gray-100 p-8 text-center'>
        <h1 className='text-[32px] font-semibold'>3</h1>
        <p className='text-lg text-[#64748B]'>On Track</p>
      </div>
      <div className='shadow-md border border-gray-100 p-8 text-center'>
        <h1 className='text-[32px] font-semibold'>6</h1>
        <p className='text-lg text-[#64748B]'>Need Attention</p>
      </div>
      <div className='shadow-md border border-gray-100 p-8 text-center'>
        <h1 className='text-[32px] font-semibold'>12</h1>
        <p className='text-lg text-[#64748B]'>Interactions This Month</p>
      </div>
    </div>
  )
}

export default StatusCountCard
