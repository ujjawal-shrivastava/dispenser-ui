import React from "react";
import "./Home.css";
import data from "../../data.json";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <h1 className="home-title">{data.heading}</h1>
      <p className="home-description">{data.description}</p>
      <Button
        text={data.startButton}
        icon={faChevronRight}
        callBack={() => navigate("/category")}
      />
    </div>
  );
}
