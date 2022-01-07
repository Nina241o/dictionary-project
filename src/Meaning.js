import React from "react";

import "./Meaning.css";

import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>
        <strong>{props.meaning.partOfSpeech}</strong>
      </h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <div className="Definition">{definition.definition}</div>
              <div className="Example">
                <em>{definition.example}</em>
              </div>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
