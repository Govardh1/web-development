import BrainIcon from "../icons/BrainIcon"
import TwitterIcon from "../icons/TwitterIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import SideBarItem from "./SideBarItem"

function SideBar() {
  return (
	<div className="h-screen bg-white border-r w-72 fixed left-0 right-0 pl-6">
		<div className=" flex text-2xl pt-8 items-center">
			<div className="pr-2">
				<BrainIcon/>
			</div>
			Brainly
		</div>
		<div className="pt-8 pl-4">
			<SideBarItem text={"Twitter"} Icon={<TwitterIcon/>}/>
		<SideBarItem text={"YouTube"} Icon={<YoutubeIcon/>}/>
		</div>
	</div>
  )
}

export default SideBar