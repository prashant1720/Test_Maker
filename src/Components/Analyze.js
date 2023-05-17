import React, { useState } from "react";

function Analyze() {
  const [text, setText] = useState("");
  const [result, setResult] = useState({ polarity: null, subjectivity: null });

  const handleClick = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <input
          type="text"
          placeholder="Enter text to analyze"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <br />
      <div
        onClick={handleClick}
        style={{
          textAlign: "center",
          width: "100px",
          border: "1px solid gray",
          borderRadius: "5px",
          display: "inline-block",
          cursor: "pointer",
        }}
      >
        Analyze
      </div>
      <br />
      {result.polarity !== null && (
        <div>
          Polarity: {result.polarity} | Subjectivity: {result.subjectivity}
        </div>
      )}
    </div>
  );
}

export default Analyze;
