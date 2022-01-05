import React from "react";

import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4 className="mt-4 mb-3">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Definition">
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <div className="Example mt-2">
                <strong>Example: </strong>
                <em>{definition.example}</em>
              </div>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
