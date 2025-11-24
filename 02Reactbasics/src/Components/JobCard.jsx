import React from "react";
import { Bookmark } from "lucide-react";
import "./Job.css";

const JobCard = () => {
  return (
    <>
      <div className="card">
        <div className="top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh21MUQIJJhr55Hi8v4WoGKBYycrUvo-94hQ&s"
            alt="Company name"
          />
          <button>
            Save <Bookmark size={16} />
          </button>
        </div>

        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tags">
            <h4>Part Time</h4>
            <h4>Remote</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default JobCard;
