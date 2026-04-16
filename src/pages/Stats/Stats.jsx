import React, { useContext } from 'react'
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { MyContext } from '../../Context/ContextData';
import image from '../../assets/activity.jpg'

const Stats = () => {
  const {meetFriend, setMeetFriend} = useContext(MyContext)
  const text = meetFriend.filter(tex => tex.calltype === "text")
  const call = meetFriend.filter(tex => tex.calltype === "call")
  const video = meetFriend.filter(tex => tex.calltype === "video")
  
  const data = [
  { name: 'Text', value: text.length, fill: '#7E35E1' },
  { name: 'Call', value: call.length, fill: '#244D3F' },
  { name: 'video', value: video.length, fill: '#37A163' },
];

  return (
    <div className='w-full h-full bg-[#F8FAFC] pb-20'>
      <div className='container w-11/12 mx-auto pb-5 pt-20'>
        <h1 className='text-3xl lg:text-5xl font-bold'>Friendship Analytics</h1>
      </div>
      <div className='container w-11/12 mx-auto bg-white rounded-2xl py-10 flex flex-col items-center '>
      <h1 className='text-xl font-medium text-[#244D3F] w-full py-3 pl-10'>By Interaction Type:</h1>
      {meetFriend.length === 0 ? <div className='text-lg font-semibold text-[#244D3F] py-20 flex flex-col items-center'><img className='w-60' src={image} alt="" /><h1>No user activity</h1></div> :
      <PieChart className='py-5' style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="10%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={3}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
      }
    </div>
    </div>
  )
}

export default Stats
