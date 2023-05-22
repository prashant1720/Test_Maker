import "./App.css";
import FormInput from "./Components/FormInput";
import Navbarcode from "./Components/Navbar";
import About from "./Components/AboutPage";
import { useState } from "react";
import Sentiment_Analysis from "./Components/Sentimental";
import TextAnalysis from "./Components/Sentimental";
import Test from "./Components/Test";
import Analyze from "./Components/Analyze";
import AboutComponent from "./Components/AboutPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// code needs to be continues from 13:45
function App() {
  const [mode, setMode] = useState("light");
  const ChangeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.title = "Dark-mode";
      document.body.style.backgroundColor = "#173664";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Lite-mode";
    }
  };
  return (
    <>
      <Navbarcode Title="Home" mode={mode} ChangeMode={ChangeMode}></Navbarcode>

      {/* <div className="container my-3">
        <FormInput Title="Text Maker" mode={mode}></FormInput>
      </div> */}
      {/* <Route exact path="/about" element={<AboutComponent />} /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container my-3">
                <FormInput Title="Text Maker" mode={mode}></FormInput>
              </div>
            }
          ></Route>
          <Route path="/about" element={<AboutComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
