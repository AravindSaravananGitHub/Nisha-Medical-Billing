import React from "react";
import "../CSS/loader.css";

const Loader = () => {
  const loaderWords = [
    "H",
    "O",
    "L",
    "D",
    " ",
    "O",
    "N",
    "!",
    " ",
    " ",
    "P",
    "L",
    "E",
    "A",
    "S",
    "E",
    ".",
    ".",
    ".",
  ];
  return (
    <div className="loading-container">
      <div className="loader">
        <div className="loading-span">
          {loaderWords.map((w, index) => (
            <span key={index}>
              <b>{w}</b>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
