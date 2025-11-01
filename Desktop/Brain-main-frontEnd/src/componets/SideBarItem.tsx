import type { ReactElement } from "react";

export default function SideBarItem({text,Icon}:{
	text:string;
	Icon:ReactElement
}) {
  return (
	<div className="flex py-2 items-center cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150 ">
		<div className="p-2 ">
			{Icon}
		</div>
			<div className="text-xl">
				{text}
			</div>
	</div>
  )
}
