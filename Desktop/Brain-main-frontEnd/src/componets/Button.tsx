import type { ReactElement } from "react";

interface ButtonInterface{
varients:"Primary"|"secondary";
text:string;
startIcon:ReactElement
onClick?:()=>void
fullWidth?:boolean;
loading?:boolean
}
const VarientClass={
	"Primary":"bg-purple-600 text-white",
	"secondary":"bg-purple-200 text-purple-600"
}
const defaultStyles="px-4 py-2 rounded-md font-light flex items-center"

export function Button(props:ButtonInterface){
	return <div>
		<button onClick={props.onClick} disabled={props.loading} className={`${VarientClass[props.varients]} ${defaultStyles} ${props.fullWidth ? "w-full flex items-center justify-center" : ""} ${props.loading? " opacity-30" : ""}`}>
			<div className="pr-2">
				{props.startIcon}
			</div>
			{props.text}
		</button>
	</div>
}