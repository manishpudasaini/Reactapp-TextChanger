import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function TextForm(props) {
  // Using hook to use state = useState
  const [text, setText] = useState("");
  //Usestate fro style
  const [mystyle, setStyle] = useState({
    color: "black",
    backgroundColor: "#EBECF0",
    borderRadius: "15px",
    boxShadow: "0px -5px 10px 0px rgba(0, 0, 0, 0.5)",
  });

  //DarkMode Button usestate
  const [btntext, setBtntext] = useState("LightMode");

  //function to enable darkmode
  const handelDarkMode = () => {
    if (mystyle.color === "black") {
      setStyle({
        color: "white",
        backgroundColor: "black",
        borderRadius: "15px",
        boxShadow: "0px -5px 10px 0px rgba(0, 0, 0, 0.5)",
      });
      setBtntext("DarkMode");
    } else {
      setStyle({
        color: "black",
        backgroundColor: "#EBECF0",
        borderRadius: "15px",
        boxShadow: "0px -5px 10px 0px rgba(0, 0, 0, 0.5)",
      });
      setBtntext("LightMode");
    }
  };

  //Function to change text to speech
  const { speak } = useSpeechSynthesis();
  const speechHandler = () => {
    speak({ text });
    props.handelAlert("The text is converted to speech!", "sucess:");
  };

  // Function to change the text into upper case
  const handelUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.handelAlert("The text is converted to UpperCase!", "sucess:");
  };

  // Function to change the text into lower case
  const handelLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.handelAlert("The text is converted to LowerCase!", "sucess:");
  };

  //Function to show the time
  const time = () => {
    let newTime = new Date().toLocaleTimeString();
    setText(newTime);
    props.handelAlert("Current time!", "sucess:");
  };

  //Function to clear the text in the textarea
  const clear = () => {
    let text = "";
    setText(text);
    props.handelAlert("The text in the textarea are clear!!", "sucess:");
  };

  //Function to reverse the text
  const reverse = () => {
    let textReverse = text.split("").reverse().join("");
    setText(textReverse);
    props.handelAlert("The text is reverse!!", "sucess:");
  };

  // Used to type the value inside the text area
  const handelonChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <h1>
          <button
            type="button"
            class="btn btn-lg btn-secondary"
            data-bs-toggle="popover"
            data-bs-title="Popover title"
            data-bs-content="And here's some amazing content. It's very engaging. Right?"
          >
            Enter the text to analyze:
          </button>
        </h1>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() => handelDarkMode()}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {" "}
            {btntext}
          </label>
        </div>

        <div className="mb-3 my-3" style={mystyle}>
          <textarea
            className="form-control"
            value={text}
            onChange={handelonChange}
            id="mybox"
            rows="9"
            placeholder="Enter text"
            style={mystyle}
          ></textarea>
        </div>

        {/*Button */}
        <div className="btn-group-vertical" style={mystyle}>
          {/*Button to change text to uppercase */}
          <button
            type="button"
            className="btn btn-secondary"
            // style={mystyle}
            onClick={handelUpperClick}
          >
            UpperCase
          </button>
          {/*Button to change text to lowercase */}
          <button
            type="button"
            className="btn btn-secondary"
            // style={mystyle}
            onClick={handelLowerClick}
          >
            LowerCase
          </button>
          {/*Button to showw time */}
          <button
            type="button"
            className="btn btn-secondary"
            // style={mystyle}
            onClick={time}
          >
            ShowTime
          </button>
          {/*Button to change text into speech */}
          <button
            type="button"
            className="btn btn-secondary"
            // style={mystyle}
            onClick={() => speechHandler()}
          >
            Speak
          </button>

          {/*Button to clear all text from text area */}
          <button
            type="button"
            className="btn btn-secondary"
            // style={mystyle}
            onClick={() => clear()}
          >
            Clear
          </button>

          {/*Button to reverse the given text */}
          <button
            type="button"
            className="btn btn-secondary"
            // style={mystyle}
            onClick={() => reverse()}
          >
            Reverse
          </button>
        </div>
      </div>

      {/*Text summary*/}
      <div className="alert alert-primary my-4" role="alert" style={mystyle}>
        <h1>Text summary</h1>
        <p>
          {text.length === 0 ? "0 " : text.split(" ").length} Word and{" "}
          {text.length}Character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
