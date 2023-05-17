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

  // code to reverse the string:

  const Convert_to_ReverseText = () => {
    console.log("Reverse the text was clicked " + text);
    let newtext = text.split("").reverse().join("");
    settext(newtext);
  };

  const [result, setResult] = useState({});

  const Convert_to_Analyze = async () => {
    console.log("Analyze the text" + text);

    const response = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    });
    let data = await response.json();
    setResult(data);
  };

  const handleOnchange = (event) => {
    console.log("Handle On Change");
    settext(event.target.value);
  };
  const [text, settext] = useState("");
  return (
    <div
      className="continaer"
      style={{ color: props.mode === `dark` ? `white` : `black` }}
    >
      <h1>
        <center>{props.Title}</center>
      </h1>

      <div className="mb-3 mt-5">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnchange}
          // style={{ backgoundColor: props.mode === `dark` ? `grey` : `light` }}
          style={{
            backgroundColor: props.mode === `dark` ? `grey` : `white`,
            color: props.mode === `dark` ? `white` : `black`,
          }}
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

      <button className="btn btn-primary mx-2" onClick={Convert_to_ReverseText}>
        Reverse the String
      </button>

      <button className="btn btn-primary mx-2" onClick={Convert_to_Analyze}>
        Analyze the Data
      </button>

      <div
        className="container my-3"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        {" "}
        {result.polarity !== null && (
          <div>
            Polarity: {result.polarity} {<br />} Subjectivity:{" "}
            {result.subjectivity}
            {<br />}
            {result.polarity > 1.0
              ? "Content is Postive"
              : "Content is Neutral"}
          </div>
        )}
        <h6>Number of letters :{text.length}</h6>
        <h6>Count the Number of words :{text.split(" ").length}</h6>
        <h6>Read time for the Content :{0.008 * text.split(" ").length}</h6>
        <h2>Preview</h2>
        {/* This ternary operator is checking if the length of the text is greater then 0 then you provide text  if not then print the string */}
        <p>{text.length > 0 ? text : "Provide Something to Preview"}</p>
      </div>
    </div>
  );
}

export default FormInput;
