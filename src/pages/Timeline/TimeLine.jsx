import React, { useContext, useState } from 'react'
import { MyContext } from '../../Context/ContextData'
import { LuAlarmClockCheck } from 'react-icons/lu'
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'
import image from '../../assets/contact.png'
 
const TimeLine = () => {
  const {meetFriend, setMeetFriend} = useContext(MyContext)
  const [filter, setFilter] = useState("all")
  const [sorted, setSorted] = useState("new")
  console.log(meetFriend);
  
  

  const filtertype = meetFriend.filter(type => {
    if(filter === "all"){
      return true;
    }
    return type.calltype === filter
  })

  const sortData = [...filtertype].sort((a, b) => {
    const dateA = new Date(a.timestamp)
    const dateB = new Date(b.timestamp)

    return sorted === "new" ? dateB - dateA : dateA - dateB
  })
 
  
  return (
    <div className='py-10 md:py-20 w-full h-full bg-[#F8FAFC]'>
      <div className='container w-11/12 mx-auto space-y-3 py-3'>
        <h1 className='text-5xl font-bold'>Timeline</h1>
        <div>
          <select  defaultValue="" onChange={(e) => setFilter(e.target.value)} className="select text-gray-500 outline-none">
            <option value="" disabled className=''>Filter timeline</option>
            <option value="all" className='text-black'>All</option>
            <option value="call" className='text-black'>Calls</option>
            <option value="text" className='text-black'>Text</option>
            <option value="video" className='text-black'>Video</option>
          </select>
          <select  defaultValue="" onChange={(e) => setSorted(e.target.value === "new" ? "old" : "new")} className="select text-gray-500 outline-none">
            <option value="new" >new to old</option>
            <option value="old" >old to new</option>
          </select>
        </div>
      </div>
      {meetFriend.length === 0 ? <div className='font-semibold text-xl container w-11/12 mx-auto bg-white flex flex-col items-center py-10 rounded-2xl shadow'><img className='w-50' src={image} alt="" /> <h1>No Contacts</h1></div> :
      <div className='flex flex-col gap-6 container w-11/12 mx-auto py-6'>
        {sortData.map((info, index) => <div key={index} className='flex items-center gap-5 p-4 shadow-md border border-gray-100 rounded-lg bg-white'>
          <img src={info.calltype === "text" ? text : info.calltype === "call" ? call : video} alt="" />
          <div>
            <h1 className='text-lg text-[#64748B]'><span className='text-xl font-semibold text-[#244D3F] capitalize'>{info.calltype}</span> with {info.name}</h1>
            <p className='flex items-center gap-2 font-medium text-[#64748B]'><LuAlarmClockCheck className='text-[16px]'/> {info.time}, {info.date}</p>
          </div>
        </div>)}
      </div>
      }
    </div>
  )
}

export default TimeLine
