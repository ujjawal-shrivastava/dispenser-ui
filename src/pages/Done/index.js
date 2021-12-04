import React from "react";
import "./Done.css";
import data from "../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Done() {
  return (
    <div className="done-base">
      <span className="done-icon">
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <h1 className="done-title">{data.doneTitle}</h1>
      <p className="done-description">{data.doneDescription}</p>
    </div>
  );
}
