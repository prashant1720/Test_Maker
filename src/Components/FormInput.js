import React, { useState } from "react";

function FormInput(props) {
  // By deafult when ever a Onchange function is called a event object is created
  const Convert_to_Capital = () => {
    console.log("UpperCase was clicked " + text);
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const Convert_to_LowerCase = () => {
    console.log("UpperCase was clicked " + text);
    let newtext = text.toLowerCase();
    settext(newtext);
  };

  const Convert_to_ClearText = () => {
    console.log("Clear Text was clicked " + text);
    let newtext = "";
    settext(newtext);
  };

  const handleOnchange = (event) => {
    console.log("Handle On Change");
    settext(event.target.value);
  };
  const [text, settext] = useState("");
  return (
    <div>
      <h1>{props.Title}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnchange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={Convert_to_Capital}>
        {" "}
        Convert To UpperCase
      </button>

      <button className="btn btn-primary mx-2" onClick={Convert_to_LowerCase}>
        Convert To LowerCase
      </button>

      <button className="btn btn-primary mx-2" onClick={Convert_to_ClearText}>
        Clear the Text
      </button>

      <div className="container my-3">
        <h6>Number of letters {text.length}</h6>
        <h6>Count the Number of words {text.split(" ").length}</h6>
        <h6>Read time for the Content {0.008 * text.split(" ").length}</h6>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default FormInput;
