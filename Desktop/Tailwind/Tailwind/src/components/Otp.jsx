import { useRef, useState } from "react"
import { Buttons } from "./Buttons"

export default function Otp() {
	const ref1 = useRef()
	const ref2 = useRef()
	const ref3 = useRef()
	const ref4 = useRef()
	const ref5 = useRef()
	const ref6 = useRef()
	const [disabled, setdisabled] = useState(true)
	return <div className='flex justify-center ml-3'>
		<SubOtpBox reference={ref1} onDone={() => {
			ref2.current.focus()
		}} />
		<SubOtpBox reference={ref2} onDone={() => {
			ref3.current.focus()
		}} />
		<SubOtpBox reference={ref3} onDone={() => {
			ref4.current.focus()
		}} />
		<SubOtpBox reference={ref4} onDone={() => {
			ref5.current.focus()
		}} />
		<SubOtpBox reference={ref5} onDone={() => {
			ref6.current.focus()
		}} />
		<SubOtpBox reference={ref6} onDone={() => {
			setdisabled(false)
		}} />
		<Buttons disabled={disabled}>SIGN-UP</Buttons>
	</div>


}

function SubOtpBox({ reference, onDone }) {
	const [inputBoxVal,setinputBoxVal]=useState("")
	return <div className="mx-1 ">
		<input value={inputBoxVal} ref={reference} onChange={(e) => {
			const val=e.target.value;
			if(val==""){
				// go back logic  
			}	else if( val=="1" || val=="2" || val=="3" || val=="1" || val=="4" || val=="5" || val=="6" || val=="7" || val=="8" || val=="9"  ){
				setinputBoxVal(val)
				onDone()
			}else{

			}
		}} type="text" className='outline-none px-4 text-white w-[40px] h-[50px] rounded-xl bg-blue-500' />
	</div>
}
