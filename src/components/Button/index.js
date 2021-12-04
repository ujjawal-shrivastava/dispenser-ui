import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";

export default function Button({ text, color = "#27ae60", icon, callBack }) {
  return (
    <div
      className="button-component"
      onClick={callBack}
      style={{ background: color }}
    >
      {icon ? (
        <span className="button-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      ) : null}
      <span className="button-text">{text}</span>
    </div>
  );
}
