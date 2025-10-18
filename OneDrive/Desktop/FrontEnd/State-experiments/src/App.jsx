import React, { useContext, useState } from 'react'
import './App.css'

const BulbContext=React.createContext()

function App() {
  const[ buldOn,setBuldOn]=useState(true)

  return (
    <>
    <BulbContext.Provider value={{
      buldOn:buldOn,
      setBuldOn:setBuldOn
    }}>
      <LightBuld/>
    </BulbContext.Provider>
    </>
  )
}
function LightBuld(){
  return(
   <div>
     <BulbState/>
    <ToggleBulbState/>
   </div>
  )
}
function BulbState(){
  const {buldOn}=useContext(BulbContext)
  return <div>
    {buldOn? "buld on":"bulb off"}
  </div>
}

function ToggleBulbState(){
  const {setBuldOn}=useContext(BulbContext)
function toggle(){
  setBuldOn(c=>!c)
}
  return <div>
<button onClick={toggle}>toggle-bulb</button>
  </div>
}

export default App
