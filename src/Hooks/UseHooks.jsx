import React, { useEffect, useState } from 'react'

const UseHooks = () => {
    const [friend, setFriend] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const getPromise = async () => {
            const res = await fetch("/friend.json")
            const data = await res.json()
            setFriend(data)
            setLoading(false)
        }
        getPromise()
    }, [])
    
    
  return {friend, loading}
}

export default UseHooks
