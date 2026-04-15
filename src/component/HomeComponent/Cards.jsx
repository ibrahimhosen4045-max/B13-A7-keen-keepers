import React from 'react'
import UseHooks from '../../Hooks/UseHooks'
import DesignCard from './ui/DesignCard'

const Cards = () => {
  const {friend, loading} = UseHooks()
  return (
    <div className=' container w-11/12 mx-auto py-10'>
      <h1 className='text-2xl font-semibold'>Your Friends</h1>
      <div>
        {
          friend.map((info, index) => 
              <DesignCard key={index} info = {info}></DesignCard>
          )
        }
      </div>
    </div>
  )
}

export default Cards
