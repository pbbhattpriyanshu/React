import React from "react";
import Employee from "./Employee";

const Company = ({ company }) => {

  return (
    <div className="p-9 m-10 w-80 border border-red-500 rounded-xl">
      <h3 className="text-sm font-light mb-2 text-center text-gray-300">
        Company Name:{" "}
        <span className="text-yellow-300 font-mono">{company.name}</span>
      </h3>
      <ul>
        <li>
          <h4 className="text-sm font-light mb-2 text-center text-gray-300">
            Company City:{" "}
            <span className="text-yellow-300 font-mono">{company.city}</span>
          </h4>
        </li>
      </ul>
      <ul>
        <li>
          <h4 className="text-sm font-light mb-2 text-center text-gray-300">
            Company Website:{" "}
            <span className="text-yellow-300 font-mono">{company.website}</span>
          </h4>
        </li>
       <Employee company={company}/>
      </ul>
    </div>
  );
};

export default Company;
