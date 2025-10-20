import React from "react"
import "./App.css"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { CounterAtom } from "./Store/atoms/counter"

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}

function Counter() {
  return (
    <div>
      <CounterCount />
      <Increase />
      <Decrease />
    </div>
  )
}

function CounterCount() {
  const count = useRecoilValue(CounterAtom)
  return <div>{count}</div>
}

function Increase() {
  const setCount = useSetRecoilState(CounterAtom)
  return <button onClick={() => setCount(c => c + 1)}>Increase</button>
}

function Decrease() {
  const setCount = useSetRecoilState(CounterAtom)
  return <button onClick={() => setCount(c => c - 1)}>Decrease</button>
}

export default App
