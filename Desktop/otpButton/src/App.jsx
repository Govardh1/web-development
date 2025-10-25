import "./App.css";

import Inputs from "./Components/Inputs";

function App() {
  return (
    <div className="bg-blu-800 h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-white text-3xl font-semibold">Enter Your OTP</h1>
      <Inputs num={6} onClick={true} placeholder="Enter username" />
     
    </div>
  );
}

export default App;
