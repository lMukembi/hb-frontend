import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../css/account.css";
import Logout from "./logout";

const Account = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  return (
    <div className="account">
      <div className="account_back" onClick={() => navigate(-1)}>
        <small>
          <IoIosArrowBack className="goback" />
        </small>
        <small>Go back</small>
      </div>
      <h1 className="account_header">Your account</h1>
      <div className="account_user_details">
        <div className="account_user_details_items">
          <p>
            <span>ID:</span>
            <span>a53ev08f1</span>
          </p>
          <p>
            <span>Phone number:</span>
            <span>0725000000</span>
          </p>
          <p>
            <span>Joined:</span>
            <span>2 days ago</span>
          </p>
          <p>
            <span>Balance:</span>
            <span>KES2,084.96</span>
          </p>
        </div>
      </div>
      <div className="account_deposit">
        <div className="account_deposit_header">Deposit</div>
        <small>Send money into your account.</small>
        <input
          placeholder="Enter amount to deposit"
          className="deposit_money"
        />
        <button className="deposit_button">DEPOSIT</button>
      </div>
      <div className="account_withdraw">
        <div className="account_withdraw_header">Withdraw</div>
        <small>Withdraw money from your wallet.</small>
        <input
          placeholder="Enter amount to withdraw"
          className="withdraw_money"
        />
        <small>Minimum KES50.</small>
        <button className="withdraw_button">WITHDRAW</button>
      </div>
      <span onClick={() => setLogout(!logout)} className="logout">
        Logout
      </span>
      {logout && <Logout closeLogout={setLogout} />}
      <div className="line_separator" />
      <small className="version">Mobile version</small>
    </div>
  );
};

export default Account;
