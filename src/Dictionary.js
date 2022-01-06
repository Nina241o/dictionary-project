import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="Title">
        <div>Hello!</div>
        <div>
          We'll find what you are looking for <i className="fas fa-search"></i>
        </div>
      </div>
      <form className="searchForm" onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Type here to make it happen"
          onChange={handleKeywordChange}
          className="input"
        />
      </form>
      <div className="hint">suggested words:</div>
      <div className="hintOne">
        etymology, bibliophile, neologism, linguistic,
      </div>
      <div className="hintTwo">
        hirola, lyrebird, pangolin, saola, solenodon,
      </div>
      <div className="hintThree">
        goobledygook, frivolous, ludicrous, asinine, ridiculous, farcical,
      </div>
      <div className="hintEnd">
        or whatever you had on your mind when you stepped in...
      </div>
      <br />
      <Results results={results} />
    </div>
  );
}
