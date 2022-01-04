import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>{props.meaning.definitions[0].definition}</div>
      <p className="mt-4">
        <em>{props.meaning.definitions[0].example}</em>
      </p>
    </div>
  );
}
