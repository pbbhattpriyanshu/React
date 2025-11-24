import React from "react";
import { Bookmark } from "lucide-react";
import "./Job.css";

const JobCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <img
            src={props.pic}
            alt="Company name"
          />
          <button>
            Save <Bookmark size={16} />
          </button>
        </div>

        <div className="center">
          <h3>
            {props.comp_name} <span>{props.posted}</span>
          </h3>
          <h2>{props.title}</h2>
          <div className="tags">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default JobCard;
