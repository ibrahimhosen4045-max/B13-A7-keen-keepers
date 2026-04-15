import React from 'react'
import UseHooks from '../../Hooks/UseHooks'
import { useParams } from 'react-router'

const FriendDetails = () => {
    const {id} = useParams()
    const {friend, loading} = UseHooks()
    if(loading){
        return <p>Loading...</p>
    }
    const expectDetails = friend.find((info) => info.id == id)
  return (
    <div>
      
    </div>
  )
}

export default FriendDetails
