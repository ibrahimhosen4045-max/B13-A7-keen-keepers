import React, { useEffect, useState } from 'react'

const UseHooks = () => {
    const [friend, setFriend] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const getPromise = async () => {
            const res = await fetch("/friend.json")
            const data = await res.json()
            setTimeout(()=>{
                setFriend(data)
                setLoading(false)
            }, 800)
        }
        getPromise()
    }, [])
    
    
  return {friend, loading}
}

export default UseHooks
