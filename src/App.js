import "./App.css";
import FormInput from "./Components/FormInput";
import Navbarcode from "./Components/Navbar";
import About from "./Components/AboutPage";
import { useState } from "react";

// code needs to be continues from 13:45
function App() {
  const [mode, setMode] = useState("light");
  const ChangeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbarcode Title="Home" mode={mode} ChangeMode={ChangeMode}></Navbarcode>

      <div className="container my-3">
        <FormInput Title="Enter the Text"></FormInput>
      </div>
      {/* <About></About> */}
    </>
  );
}

export default App;
