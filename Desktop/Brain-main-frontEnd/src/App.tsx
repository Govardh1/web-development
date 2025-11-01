import { DashBoard } from "./pages/DashBoard"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import{BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
 return(
   <BrowserRouter>
  <Routes>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/dashboard" element={<DashBoard/>}/>
  </Routes>
  </BrowserRouter>
 )
  // return <SignIn/>
}

export default App