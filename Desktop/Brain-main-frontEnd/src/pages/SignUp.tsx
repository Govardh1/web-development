import { useRef } from "react"
import { Button } from "../componets/Button"
import InputComponent from "../componets/InputComponent"
import { BACKEND_URL } from "../config"
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignUp() {
 const usernameref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);
	const navigate=useNavigate()


  async function signup() {
    const username = usernameref.current?.value?.trim();
    const password = passwordref.current?.value?.trim();
		// console.log(usernameref.current)
   

   
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
      });
      navigate("/signin")
      alert("Signup successful!");

    
  }
	return (
		<div className="h-screen  w-screen bg-gray-200 flex justify-center items-center">
			<div className="bg-white rounded-xl border min-w-48 p-8">
				<InputComponent reference={usernameref} placeholder="Username" />
				<InputComponent reference={passwordref} placeholder="password" />
				<div className="" >
					<Button onClick={signup} loading={false} varients="Primary" fullWidth={true} text="signUp"  />
				</div>
			</div>
		</div>
	)
}

export default SignUp