import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchWidget() {
  const [text, setText] = useState("wikipedia");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      axios
        .get(
          `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${text}`
        )
        .then((res) => {
          setResults(res.data.query.search);
        });
    }, 1000);
    return () => {
      clearTimeout(timeoutid);
    };
  }, [text]);

  const onInputChange = (value) => {
    setText(value);
    console.log(value);
  };

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="ui item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
          >
            more..
          </a>
        </div>
        <div className="ui content">
          <div className="ui header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui container">
      <form className="ui form">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
        />
      </form>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}
