import { useState } from 'react'
// import './App.css'
import { Button } from '../componets/Button'
import Card from '../componets/Card'
import CreateContentModel from '../componets/CreateContentModel'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import SideBar from '../componets/SideBar'

export function DashBoard() {
  const [ModelOpen,setModelOpen]=useState(false)
  return <div >
    <SideBar/>
    <div className='p-4 ml-72 min-h-screen bg-gray-200'>
    <CreateContentModel open={ModelOpen} onClose={()=>{
      setModelOpen(false)
    }}/>
    <div className='flex justify-end gap-4'>
      <Button onClick={()=>setModelOpen(true)} varients='Primary' text='Add Content' startIcon={<PlusIcon/>}/>
    <Button varients='secondary' text='Share Brain' startIcon={<ShareIcon/>}/>
    </div>
   <div className='flex  gap-4 p-4'>
     <Card title='Tweet About Hiring' type='twitter' link='https://x.com/Krishnasagrawal/status/1983873804423107061'/>
    <Card title='Interviewed 300 People Across Different Salary Ranges' type='youtube' link='https://www.youtube.com/watch?v=Lv8BD8xefJs'/>
   </div>
   </div>
  </div>
}


