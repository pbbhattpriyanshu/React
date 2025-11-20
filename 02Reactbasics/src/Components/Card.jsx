import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="parent">
        <div className="card">
            <img src={props.pic} alt="image" />
          <h1 className="profileName">{props.name}</h1>
          <p>
            {props.caption}
          </p>
          <button>View Profile</button>
        </div>
      </div>
    </>
  );
};

export default Card;
