import React from "react";
import "../css/courses.css";
import { FaHandshake, FaLaptopCode } from "react-icons/fa";
import { BsCurrencyExchange, BsGraphUpArrow, BsGraphUp } from "react-icons/bs";
import { MdCampaign } from "react-icons/md";

const Courses = () => {
  return (
    <div className="courses">
      <h1>Programmes</h1>
      <div>
        <p>
          <FaHandshake className="courseicon" />
          <span>Freelancing</span>
        </p>

        <p>
          <BsCurrencyExchange className="courseicon" />
          <span>Cryptocurrency</span>
        </p>
        <p>
          <FaLaptopCode className="courseicon" />
          <span>Web development</span>
        </p>
      </div>
      <div>
        <p>
          <BsGraphUpArrow className="courseicon" />
          <span>Stocks</span>
        </p>
        <p>
          <BsGraphUp className="courseicon" />
          <span>Forex</span>
        </p>
        <p>
          <MdCampaign className="courseicon" />
          <span>Affiliate marketing</span>
        </p>
      </div>
    </div>
  );
};

export default Courses;
