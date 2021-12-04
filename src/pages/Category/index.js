import React, { useState, useEffect } from "react";
import "./Category.css";
import data from "../../data.json";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import NumberFormat from "react-number-format";

export default function Category() {
  const navigate = useNavigate();
  const [aadharNumber, setAadharNumber] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    if (aadharNumber.length === 12) setCanSubmit(true);
    else setCanSubmit(false);
  }, [aadharNumber]);

  return (
    <div className="category-page">
      <h1 className="category-title">{data.categoryTitle}</h1>
      <p className="category-description">{data.categoryDescription}</p>
      <div className="category-list">
        <NumberFormat
          placeholder="••••-••••-••••"
          className="aadhar-input"
          format="####-####-####"
          value={aadharNumber}
          onValueChange={(values) => {
            const { value } = values;
            setAadharNumber(value);
          }}
        />
        {canSubmit ? (
          <Button
            icon={faAddressCard}
            color="#2980b9"
            text="Submit"
            callBack={() =>
              navigate("/dispense", { state: { aadharNumber: aadharNumber } })
            }
          />
        ) : null}
      </div>
      <p className="category-description-each">
        {data.categoryDescriptionFooter}
      </p>
    </div>
  );
}
