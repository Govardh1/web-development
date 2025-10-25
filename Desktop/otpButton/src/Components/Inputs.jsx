import { useRef, useState } from "react";
import Buttons from "./Buttons";

function Inputs({ num }) {
	const inputRefs  = useRef(Array(num).fill(0));

	const [disabled, setDisabled] = useState(true);
	const handleChange=()=>{
		const allFilled=inputRefs.current.every(input => input?.value !== "")
		setDisabled(!allFilled)
	}

	return (
		<div className="flex flex-col items-center gap-4">

			<div className="flex gap-2">	
				{Array(num).fill().map((x,index)=><SubInputBox
				key={index}
				ref={(el)=>(inputRefs .current[index]=el)}
					onDone={() => {
						 if (index + 1 < num) inputRefs .current[index+1]?.focus();
						 handleChange()
					}}
					onBack={() => {
						 if (index - 1 >= 0)inputRefs .current[index-1]?.focus()
							handleChange()
					}}
				/>)}
				
			</div>

			<div>
				<Buttons disabled={disabled}>Sign In</Buttons>
			</div>
		</div>
	);
}

function SubInputBox({ ref, onDone, onBack }) {
	return (
		<div className="bg-blu-600 p-2 rounded-2xl">
			<input
				ref={ref}
				onKeyUp={(e)=>{
					if (e.key=="Backspace") {
						onBack()
					}
				}}
				onChange={(e)=>{
					const val=e.target.value;
					if (/^[1-9]$/.test(val)) {
						onDone()
					}
				}}
				className="bg-blu-600 outline-none w-[40px] h-[50px] text-center text-white"
				type="text"
				maxLength={1}
				placeholder=""
			/>
		</div>
	);
}

export default Inputs;
