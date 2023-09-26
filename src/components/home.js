import React from "react";
import { MdCopyright } from "react-icons/md";
import "../css/home.css";
import { Link } from "react-router-dom";
import Topbar from "./topbar";
import HustlersBridge from "../resources/HustlersBridge.jpg";
import Norton from "../resources/Norton.png";
import BBBSeal from "../resources/BBBSeal.png";
import HustlersBridgeTestimonials from "../resources/HustlersBridgeTestimonials.jpg";
import Courses from "./courses";
import Studyguides from "./studyguides";

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="home">
        <div className="home_top">
          <div className="home_info">
            <h1>
              You are<span> running out</span> of<span> time</span>.
            </h1>
            <p className="home_info_text">
              Our practical approach to teaching has led to tens of thousands of
              our students generating money from anywhere in Kenya.
            </p>

            <button className="buttons">
              <Link to="/register">JOIN HUSTLERS BRIDGE</Link>
            </button>
          </div>
          <div className="home_image">
            <img className="image" src={HustlersBridge} />
          </div>
        </div>
        <Courses />

        <Studyguides />
        <div className="testimonials">
          <h1>Are you ready to level up?</h1>
          <div className="testimonial">
            <img src={HustlersBridgeTestimonials} />
            <img src={HustlersBridgeTestimonials} />
            <img src={HustlersBridgeTestimonials} />
            <img src={HustlersBridgeTestimonials} />
            <img src={HustlersBridgeTestimonials} />
            <img src={HustlersBridgeTestimonials} />
          </div>
        </div>
        <div className="join">
          <h1>It's time to start now</h1>
          <p>Join other 120,000 learners to boost your income.</p>

          <p>Everything starts with you making your first money TODAY.</p>
          <button>
            <Link to="/register">JOIN HUSTLERS BRIDGE</Link>
          </button>
        </div>
        <div className="footer_info">
          <div>
            <img src={BBBSeal} />

            <img src={Norton} />
          </div>
          <p>
            Could not connect to the reCAPTCHA service? Check your internet
            connection and reload again.
          </p>
          <p>Studypool is powered by MicrotutoringTM</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <div className="quick_links_items">
            <p>
              <Link to="/" className="quick_links_item">
                Home
              </Link>
            </p>
            <p>
              <Link to="/login" className="quick_links_item">
                Login
              </Link>
            </p>
            <p>
              <Link to="/register" className="quick_links_item">
                Register
              </Link>
            </p>
          </div>
        </div>
        <hr />
        <div className="footer">
          <p>
            <span>Hustlers Bridge</span>
            <span>
              <MdCopyright />
            </span>
            <span>2020 - 2023</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
