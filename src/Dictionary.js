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
      <div className="Intro">
        <div>Hello, do come in!</div>
        <div>You've come to the right place</div>
        <div className="Title">
          We'll find what you are looking for <i className="fas fa-search"></i>
        </div>
      </div>
      <form className="searchForm" onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter your request here"
          onChange={handleKeywordChange}
          className="input"
        />
      </form>
      <div className="hint">May we suggest some words?</div>
      <div className="hint">
        How about etymology, neologism, bibliophile, linguistic or philology?
      </div>
      <div className="hint">Well... yes... or you could just have a look around</div>
      <br />
      <Results results={results} />
    </div>
  );
}
