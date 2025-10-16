import { useState } from "react"


function App(){

  const[count,setCount]=useState(0)
 
return(
  <div>
    <CustomButton count={count} setCount={setCount}/>
  </div>
)
}
  function CustomButton(props){
    function onclicHandler(){
        props.setCount(props.count+1)
      }
     return(
       <button onClick={onclicHandler}>counter is {props.count}</button>
     )

  }


export default App
