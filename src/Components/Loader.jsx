import React from "react";
import "../CSS/loader.css";

const Loader = () => {
  return (
    <div className="loading-container">
      <div className="loader">
        <div className="loading-span">
          <span>
            <b>L</b>
          </span>
          <span>
            <b>o</b>
          </span>
          <span>
            <b>a</b>
          </span>
          <span>
            <b>d</b>
          </span>
          <span>
            <b>i</b>
          </span>
          <span>
            <b>n</b>
          </span>
          <span>
            <b>g</b>
          </span>
          <span>
            <b>.</b>
          </span>
          <span>
            <b>.</b>
          </span>
          <span>
            <b>.</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
