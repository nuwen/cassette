import React from "react";
import loader from "../loading.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img className="loading__image" src={loader} alt="Loading Animation" />
    </div>
  );
};

export default Loading;
