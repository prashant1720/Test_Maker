import React, { useState } from "react";

function SentimentAnalysis() {
  const [jsonData, setJsonData] = useState({
    users: [
      {
        name: "alan",
        age: 23,
        username: "aturing",
      },
      {
        name: "john",
        age: 29,
        username: "__john__",
      },
    ],
  });

  const handleClick = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/abc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        textAlign: "center",
        width: "100px",
        border: "1px solid gray",
        borderRadius: "5px",
      }}
    >
      Send data to backend
    </div>
  );
}

export default SentimentAnalysis;
