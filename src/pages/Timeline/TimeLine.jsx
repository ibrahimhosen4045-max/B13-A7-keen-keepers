import React, { useContext } from 'react'
import { MyContext } from '../../Context/ContextData'

const TimeLine = () => {
  const {meetFriend, setMeetFriend} = useContext(MyContext)
  console.log(meetFriend)
  return (
    <div>
      <div>
        {meetFriend.map((info, index) => <div>
          <img src={info.picture} alt="" />
        </div>)}
      </div>
    </div>
  )
}

export default TimeLine
