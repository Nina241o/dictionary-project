import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001f4a75cbfd1c04dcb9477c1f29ede6528";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
      <div className="hint">
        If we may, we would like to suggest some words:
      </div>
      <div className="hint">
        etymology, neologism, bibliophile or philology
      </div>
      <div className="hintEnd">
        although we are quite willing to look for any other word as well, of
        course
      </div>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
