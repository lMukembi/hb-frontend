import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../css/termsofservice.css";

const Termsofservice = () => {
  const navigate = useNavigate();
  return (
    <div className="terms_of_service">
      <div className="tos_back" onClick={() => navigate(-1)}>
        <small>
          <IoIosArrowBack className="goback" />
        </small>
        <small>Go back</small>
      </div>
      <h1 className="tos_header">GENERAL TERMS OF SERVICE</h1>
      <p className="tos_hr" />
      <h2>SMART INVESTOR</h2>
      <ul>
        <li>
          Reference to “Smart Investor” “We” “our” or “Us” is reference, trading
          as Smart Investor.
        </li>
        <li>
          Reference to “You” “Your’ the “Customer(s)” is reference to any person
          using the Service.
        </li>
        <li>
          Reference to “General Terms of Service” is reference to Smart
          Investor’s general terms of service available here.
        </li>
        <li>In addition, as part of these Terms, You agree to be bound by:</li>
      </ul>
    </div>
  );
};

export default Termsofservice;
