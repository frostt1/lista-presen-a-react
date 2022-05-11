import React from "react";
import "./styles.css";

const Card = ({ name, time }) => {
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
};

export default Card;
