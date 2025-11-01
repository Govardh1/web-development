import React from 'react'

interface InputProps {
  placeholder: string;
  type: string;
  reference?:any
}

function InputComponent({placeholder,type,reference}:InputProps) {
  return (
	<div>
		<input  ref={reference} type={type} placeholder={placeholder} className='px-4 py-2 broder-2 rounded-xl m-2'  />
	</div>
  )
}

export default InputComponent