import React, { useState } from "react"


function App() {
  return (
    <div>
      <HeaderwithButton />
    </div>
  )
}


const HeaderwithButton = () => {
  const [todo, changeTodo] = useState([{
    title:"go to hyh",
    discription:"hello"
  },{
    title:"go to school",
    discription:"lekjdfh"
  },{
    title:"go to kargil",
    discription:"2oeiwru"
  },{
    title:"go to job",
    discription:"w;oeirjwieds"
  }])
  function ChangeButton() {
   changeTodo([...todo,{
    title:Math.random(),
    discription:Math.random()
   }])
  }
  return (
    <div>
     <button onClick={ChangeButton}>add Todo</button>
      {todo.map((item,index)=>
        <Todo 
        key={index}
        title={item.title} 
        discription={item.discription}/>
      )}
    </div>
  )
}
const Todo = React.memo(({ title ,discription}) => {
  return (
    <div>

     <h1> {title}</h1>
     <h3> {discription}</h3>
    </div>
  )
})
export default App
