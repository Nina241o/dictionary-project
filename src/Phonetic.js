import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i className="fas fa-microphone-alt"></i>
      </a>{" "}
      <span className="Text"> /{props.phonetic.text}/</span>
    </div>
  );
}
