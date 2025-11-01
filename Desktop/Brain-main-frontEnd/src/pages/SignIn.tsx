import axios from "axios";
import { Button } from "../componets/Button"
import InputComponent from "../componets/InputComponent"
import { BACKEND_URL } from "../config";
import  { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
	const usernameref = useRef<HTMLInputElement>(null);
	const passwordref = useRef<HTMLInputElement>(null);
	const navigate=useNavigate()
	async function signin() {
		const username = usernameref.current?.value?.trim();
		const password = passwordref.current?.value?.trim();
		// console.log(usernameref.current)


		const respone=await axios.post(`${BACKEND_URL}/api/v1/signin`, {
				username,
				password,
			});
			// alert("Signup successful!");
			const jwt=respone.data.token
			localStorage.setItem("token", jwt)
			navigate("/dashboard")
		
	}
	return (
		<div className="h-screen  w-screen bg-gray-200 flex justify-center items-center">
			<div className="bg-white rounded-xl border min-w-48 p-8">
				<InputComponent reference={usernameref} placeholder="Username" />
				<InputComponent reference={passwordref} placeholder="password" />
				<div className="" >
					<Button onClick={signin} loading={false} varients="Primary" fullWidth={true} text="SignIn" />
				</div>
			</div>
		</div>
	)
}

export default SignIn