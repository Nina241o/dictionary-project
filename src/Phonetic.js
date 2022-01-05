import React from "react";
import gramophone from "./img/gramophone.png";

export default function Phonetic(props) {
  return (
    <div className="Phonetic mt-4">
      <h4>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          listen here
        </a>{" "}
        ( {props.phonetic.text} )
      </h4>
    </div>
  );
}
