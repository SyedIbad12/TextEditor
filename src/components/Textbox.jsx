import React, { useState } from "react";

export default function TextBox(props) {
  const [text, setText] = useState("");
  const handleOnChanged = (e) => {
    setText(e.target.value);
  };
  const changed = () => {
    if (text.length === 0) {
      props.showalert("Please Enter Some Text", "Warning");
      return;
    }
    if (text === text.toUpperCase()) {
      props.showalert("Text is already UpperCase", "Success");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showalert("Converted to UpperCase", "Success");
    }
  };
  const changedLower = () => {
    if (text.length === 0) {
      props.showalert("Please Enter Some Text", "Warning");
      return;
    }

    if (text === text.toLowerCase()) {
      props.showalert("Text is already LowerCase", "Success");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showalert("Converted to LowerCase", "Success");
    }
  };

  const clear = () => {
    if (text.length === 0) {
      props.showalert("Please Enter Some Text", "Warning");
      return;
    } else {
      setText("");
      props.showalert("All Text is cleared", "Success");
    }
  };

  const Download = () => {
    if (text.length === 0) {
      props.showalert("Please Enter Some Text", "Warning");
      return;
    } else {
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      document.body.appendChild(element);
      element.click();
      props.showalert("Your Text is Downloaded", "Success");
    }
  };

  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> {props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          style={{
            background: props.mode === "dark" ? "#091d2c" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          rows="8"
          value={text}
          onChange={handleOnChanged}
        ></textarea>

        <button className="btn btn-primary my-3" onClick={changed}>
          Convert UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={changedLower}>
          Convert LowerCase
        </button>
      
      <button className="btn btn-primary my-3 mx-1" onClick={Download}>
          Download Text
        </button>
        <button className="btn btn-danger my-3 mx-1" onClick={clear}>
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your's Summary</h1>
        <p>
          {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words
          and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes To Read This </p>
        <p>{text.split(".").length - 1} Sentences</p>
        <h2>Preview</h2>
        <p className="mt-3 mb-5">
          {" "}
          {text.length > 0 ? text : "Enter Text to preview it."}{" "}
        </p>
      </div>
    </>
  );
}
