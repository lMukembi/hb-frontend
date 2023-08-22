import React from "react";
import { IoMdClose } from "react-icons/io";
import "../css/logout.css";

const Logout = ({ closeLogout }) => {
  return (
    <div>
      <div className="logout_form">
        <IoMdClose onClick={() => closeLogout()} className="close_logout" />
        <h1 className="logout_header">Logout</h1>
        <small className="logout_info">Are you sure you want to logout?</small>
        <div className="logout_buttons">
          <button
            onClick={() => closeLogout(false)}
            className="logout_cancel_button"
          >
            CANCEL
          </button>
          <button className="logout_button">LOGOUT</button>
        </div>
      </div>
      <div onClick={() => closeLogout(false)} className="close_logout_form" />
    </div>
  );
};

export default Logout;
