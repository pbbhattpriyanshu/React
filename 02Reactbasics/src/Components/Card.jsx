import React from "react";
import './Card.css'

const Card = () => {
  return (
    <>
      <div className="id-card-outer">
        <div className="id-card" role="region" aria-label="Student ID Card">
          <div className="photo-wrap">
            <img src= 'https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740&q=80' alt={`photo`} />
          </div>

          <div className="id-footer">Student ID: 2454334</div>
          <div className="id-name">Name: Jenifer</div>
          <div className="id-course">Course: MBBS</div>
          <div className="id-session">Session: 2025-26</div>

        </div>
      </div>
    </>
  );
};

export default Card;
