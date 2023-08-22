import React from "react";
import { Link } from "react-router-dom";
import "../css/topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <h3>Hustlers Bridge</h3>

      <div className="topbar_buttons">
        <p>
          <Link to="/login" className="topbar_login">
            <button className="buttons">Login</button>
          </Link>
        </p>
        {window.innerWidth > 768 && (
          <p>
            <Link to="/register">
              <button className="topbar_register_button">Register</button>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Topbar;
