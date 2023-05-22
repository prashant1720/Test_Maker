import React, { useState } from "react";

export default function AboutComponent() {
  const [mystyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const ToggleStyle = () => {
    if (mystyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container rounded" style={mystyle}>
      <h1 className="my-3 pt-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        {/* uppercase */}
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              Convert to UperCase
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The ToUpperCase feature transforms</strong> the input text
              into uppercase letters. It automatically converts all lowercase
              letters to their uppercase equivalents, while leaving other
              characters unaffected. This functionality is handy for cases where
              uppercase text is required, such as writing headlines, titles, or
              emphasizing specific content.
            </div>
          </div>
        </div>
        {/* Convert to lowercase */}
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              Convert to LowerCase
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                The ToLowerCase feature performs the opposite of ToUpperCase,
              </strong>
              converting the input text into lowercase letters. It changes all
              uppercase letters to their lowercase counterparts while preserving
              the rest of the text. This feature comes in handy when
              standardizing text or ensuring consistent formatting throughout a
              document or communication.
            </div>
          </div>
        </div>

        {/* clear the text */}
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              Clear the text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The Clear Text feature in the text app allows users to delete all
              the content within a text box. This feature is designed to quickly
              and efficiently remove all text from the input field, providing a
              clean slate for users to start afresh or clear unwanted
              information.
            </div>
          </div>
        </div>

        {/* end here */}

        {/* End here */}
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              Reverse the text
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The Text Reverse feature allows users to reverse the order of
              characters within a string. This functionality is particularly
              useful when dealing with text that needs to be displayed in a
              mirrored or backward format. Users can simply input a string, and
              the app will reverse the characters, resulting in a reversed
              version of the original text.
            </div>
          </div>
        </div>
        {/* 4th dropdown */}
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              Sentimental Analysis
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The text app also provides a Sentiment Analysis feature, which
              evaluates the emotional tone of the input text. By leveraging
              natural language processing techniques, this functionality
              assesses whether the text expresses a positive, negative, or
              neutral sentiment. Sentiment analysis can be valuable for
              understanding customer feedback, social media sentiment, or
              gauging public opinion.{" "}
            </div>
          </div>
        </div>
        {/* 5th Drop Down */}
      </div>
      <div className="container my-3S pb-3">
        <button
          onClick={ToggleStyle}
          type="button"
          className="btn btn-primary mt-5"
        >
          {btntext}
        </button>
      </div>
    </div>
  );
}
