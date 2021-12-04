import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { faFilter, faSeedling } from "@fortawesome/free-solid-svg-icons";
import data from "../../data.json";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Dispense.css";
import Loader from "../../components/Loader";

export default function Dispense() {
  let location = useLocation();
  let navigate = useNavigate();
  const [category, setCategory] = useState({});
  const [isDispensing, setIsDispensing] = useState(false);

  useEffect(() => {
    if (location.state.aadharNumber) {
      if (parseInt(location.state.aadharNumber.toString()[4]) % 2 === 0)
        setCategory(data.categories[0]);
      else setCategory(data.categories[1]);
    }
  }, [location.state.aadharNumber]);

  if (!category) return <div></div>;

  return (
    <div className="dispense-page">
      {isDispensing ? (
        <Loader
          color="#e74c3c"
          timeout={data.dispenseWaitTime}
          callback={() => navigate("/done")}
        />
      ) : (
        <>
          <h1 className="dispense-title">
            Your category is{" "}
            <span className="dispense-category-name">{category.title}</span>
          </h1>
          <p className="dispense-description">{category.description}</p>

          <div className="dispense-list">
            {category?.items?.map((item, index) => {
              return (
                <Item name={item.name} quantity={item.quantity} key={index} />
              );
            })}
          </div>
          <Button
            icon={faFilter}
            color="#e74c3c"
            text="Dispense"
            callBack={() => setIsDispensing(true)}
          />
          <p className="dispense-description-each">
            {data.dispenseDescription}
          </p>
        </>
      )}
    </div>
  );
}

const Item = ({ name, quantity }) => {
  return (
    <div className="item-base">
      <span className="item-icon">
        <FontAwesomeIcon icon={faSeedling} />
      </span>
      <h1 className="item-name">{name}</h1>
      <p className="item-quantity">{quantity} Kg</p>
    </div>
  );
};
