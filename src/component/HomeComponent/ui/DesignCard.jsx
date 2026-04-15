import React from 'react'

const DesignCard = ({info}) => {
  return (
    <div>
      <div>
        <h1 className='font-semibold text-xl'>{info.name}</h1>
        <p className='text-[12px] text-[#64748B]'>62d ago</p>
        <div className='flex gap-3'>
            {info.tags.map(tag => <div>
                <button className=' font-medium text-[12px] py-2 px-3 bg-[#CBFADB] rounded-full text-[#244D3F]'>{tag}</button>
            </div>)}
        </div>
        <button className={({bg}) => `font-medium text-[14px]  py-1.75 px-3 rounded-full text-[#244D3F] ${bg === "overdue" ? "bg-red-500" : ""}`}>{info.status}</button>
      </div>
    </div>
  )
}

export default DesignCard
