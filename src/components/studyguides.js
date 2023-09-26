import React from "react";
import "../css/studyguides.css";
import Freelancing from "../resources/Freelancing.jpg";
import Cryptocurrency from "../resources/Cryptocurrency.jpg";
import WebDevelopment from "../resources/WebDevelopment.jpg";
import Stocks from "../resources/Stocks.jpg";
import Forex from "../resources/Forex.jpg";
import AffiliateMarketing from "../resources/AffiliateMarketing.jpg";

const Studyguides = () => {
  return (
    <div className="study_guides_container">
      <h1>Featured Study Guides.</h1>
      <div className="study_guides">
        <div>
          <img src={Freelancing} />
          <small>Freelancing</small>
        </div>
        <div>
          <img src={Cryptocurrency} />
          <small>Cryptocurrency</small>
        </div>
        <div>
          <img src={WebDevelopment} />
          <small>Web Development</small>
        </div>
        <div>
          <img src={Stocks} />
          <small>Stocks Trading</small>
        </div>
        <div>
          <img src={Forex} />
          <small>Forex Trading</small>
        </div>
        <div>
          <img src={AffiliateMarketing} />
          <small>Affiliate Marketing</small>
        </div>
      </div>
    </div>
  );
};

export default Studyguides;
