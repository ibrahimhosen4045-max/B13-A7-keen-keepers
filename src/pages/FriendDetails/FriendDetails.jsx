import React, { useContext } from 'react'
import UseHooks from '../../Hooks/UseHooks'
import { useParams } from 'react-router'
import { HiOutlineBellSnooze } from 'react-icons/hi2'
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri'
import { HiOutlineArchive } from 'react-icons/hi'
import { TbPhoneCall } from 'react-icons/tb'
import { MdOutlineSms } from 'react-icons/md'
import { PiVideoCameraBold } from 'react-icons/pi'
import { MyContext } from '../../Context/ContextData'

const FriendDetails = () => {
    const {id} = useParams()
    const {friend, loading} = UseHooks()
    const {meetFriend, setMeetFriend} = useContext(MyContext)
    if(loading){
        return <p>Loading...</p>
    }
    const expectDetails = friend.find((info) => info.id == id)


    const handleClick =  () => {
        setMeetFriend([...meetFriend, expectDetails])
    }
  return (
    <div className=' container w-11/12 mx-auto flex gap-6 py-20'>
      <div className='flex flex-col gap-6 flex-1'>
        <div className='p-6 flex flex-col items-center gap-3 shadow-md rounded-lg text-center bg-white'>
            <img src={expectDetails.picture} alt="" />
             <button className={`font-medium text-[14px]  py-1.75 px-3 rounded-full text-white capitalize ${expectDetails.status === "overdue" ? "bg-[#EF4444]" : expectDetails.status === "on-track" ? "bg-[#244D3F]" : "bg-[#EFAD44]"}`}>{expectDetails.status}</button>
            <div className='flex gap-2 '>
            {expectDetails.tags.map((tag, index) => <div key={index}>
                <button className=' font-medium text-[12px] py-2 px-3 bg-[#CBFADB] rounded-full text-[#244D3F]'>{tag}</button>
            </div>)}
            </div>
            <p>{expectDetails.bio}</p>
            <p>Preferred: {expectDetails.email}</p>
        </div>
        <div className='flex flex-col gap-2 w-full'>
            <button className='btn text-[16px] bg-white'><RiNotificationSnoozeLine /> Snooze 2 weeks</button>
            <button className='btn text-[16px] bg-white'><HiOutlineArchive /> Archive</button>
            <button className='btn text-[16px] bg-white text-red-600'><RiDeleteBinLine /> Delete</button>
        </div>
      </div>
      <div className='flex flex-col gap-6 flex-2'>
          <div className='grid grid-cols-3 gap-6 '>
            <div className='p-8 text-center rounded-lg shadow-md bg-white'>
                <h1 className='text-3xl font-semibold text-[#244D3F]'>{expectDetails.days_since_contact}</h1>
                <p className='text-lg text-[#64748B]'>Days Since Contact</p>
            </div>
            <div className='p-8 text-center rounded-lg shadow-md bg-white'>
                <h1 className='text-3xl font-semibold text-[#244D3F]'>{expectDetails.goal}</h1>
                <p className='text-lg text-[#64748B]'>Goal (Days)</p>
            </div>
            <div className='p-8 text-center rounded-lg shadow-md bg-white'>
                <h1 className='text-3xl font-semibold text-[#244D3F]'>{expectDetails.next_due_date}</h1>
                <p className='text-lg text-[#64748B]'>Next Due</p>
            </div>
          </div>
          <div className='p-6 shadow-md rounded-lg'>
            <div className='flex justify-between'>
                <p className='text-xl font-medium text-[#244D3F]'>Relationship Goal</p>
                <button className='btn '>Edit</button>
            </div>
            <p className='text-[#64748B] text-lg'>Connect every <span className='font-bold text-black'>{expectDetails.goal} days</span></p>
          </div>
          {/* main-function */}
          <div className='p-6 space-y-3 shadow-lg rounded-lg bg-white'>
            <h2 className='text-xl font-medium text-[#244D3F]'>Quick Check-In</h2>
            <div className='grid grid-cols-3 gap-4 '>
                <div onClick={handleClick} className='btn text-lg font-normal flex-col h-auto py-4'><TbPhoneCall className='text-3xl'/> Call</div>
                <div className='btn text-lg font-normal flex-col h-auto py-4'><MdOutlineSms className='text-3xl'/> Text</div>
                <div className='btn text-lg font-normal flex-col h-auto py-4'><PiVideoCameraBold className='text-3xl'/> Video</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FriendDetails
