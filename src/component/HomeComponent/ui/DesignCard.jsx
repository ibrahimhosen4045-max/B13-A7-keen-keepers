import React from 'react'

const DesignCard = ({info}) => {
  return (
    <div>
      <div className='border border-gray-200 shadow-sm rounded-lg flex flex-col items-center justify-center p-6 gap-2.5 bg-white'>
        <img src={info.picture} alt="" />
        <h1 className='font-semibold text-xl'>{info.name}</h1>
        <p className='text-[12px] text-[#64748B]'>62d ago</p>
        <div className='flex gap-2 justify-center'>
            {info.tags.map(tag => <div>
                <button className=' font-medium text-[12px] py-2 px-3 bg-[#CBFADB] rounded-full text-[#244D3F]'>{tag}</button>
            </div>)}
        </div>
        <button className={`font-medium text-[14px]  py-1.75 px-3 rounded-full text-white capitalize ${info.status === "overdue" ? "bg-[#EF4444]" : info.status === "on-track" ? "bg-[#244D3F]" : "bg-[#EFAD44]"}`}>{info.status}</button>
      </div>
    </div>
  )
}

export default DesignCard
