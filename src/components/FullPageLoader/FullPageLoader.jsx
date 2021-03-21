import React from "react";
import { RingLoader } from "react-spinners";
import "./FullPageLoader.css";

const FullPageLoader = () => {
  return (
    <div className="fp-container">
      <div className="fp-loader">
        <RingLoader size="150" color="green" />
      </div>
    </div>
  );
};

export default FullPageLoader;
