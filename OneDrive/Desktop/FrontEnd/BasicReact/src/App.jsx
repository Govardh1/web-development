import React, { useState } from "react"


function App() {
  return (
    <div>
      <HeaderwithButton />
    </div>
  )
}


const HeaderwithButton = () => {
  const [FirstTitile, setFirstTitle] = useState("karan")
  function ChangeButton() {
    setFirstTitle("my name is " + Math.random())
  }
  return (
    <div>
      <button onClick={ChangeButton}>click me to change</button>
      <Header title={FirstTitile}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>

    </div>
  )
}
const Header = React.memo(({ title ,discription}) => {
  return (
    <div>
      {title}
      {discription}

    </div>
  )
})
export default App
