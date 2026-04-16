import React, { useState } from 'react'
import { MyContext } from './ContextData'

const ContextProvider = ({children}) => {
    const [meetFriend, setMeetFriend] = useState([])
  return (
    <div>
      <MyContext.Provider value={{meetFriend, setMeetFriend}}>
        {children}
      </MyContext.Provider>
    </div>
  )
}

export default ContextProvider
