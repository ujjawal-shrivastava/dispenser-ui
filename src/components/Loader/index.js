import React, { useEffect } from "react";
import ReactLoader from "react-loader-spinner";
import "./Loader.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import data from "../../data.json";

export default function Loader({ color, timeout, callback }) {
  useEffect(() => {
    const timer = setTimeout(() => callback(), timeout);
    return () => clearTimeout(timer);
  }, [timeout, callback]);
  return (
    <div className="loader-base">
      <ReactLoader
        type="Puff"
        color={color}
        height={100}
        width={100}
        timeout={timeout}
      />
      <h1 className="loader-title">{data.loaderTitle}</h1>
      <p className="loader-description">{data.loaderDescription}</p>
    </div>
  );
}
