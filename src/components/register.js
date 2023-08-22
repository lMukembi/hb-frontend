import React, { useState } from "react";
import "../css/register.css";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { register } from "../redux/queries/actions/user";

const initialState = {
  phone: "",
  email: "",
  password: "",
};

const Register = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formData, "qwerty");

    dispatch(register(formData));

    navigate(-1);
  };

  const navigate = useNavigate();

  return (
    <div className="register">
      <div className="register_back" onClick={() => navigate(-1)}>
        <small>
          <IoIosArrowBack className="goback" />
        </small>
        <small>Go back</small>
      </div>
      <h1 className="register_header">REGISTER TO HUSTLERS BRIDGE</h1>
      <input
        placeholder="Phone number"
        className="register_phone"
        required
        type="text"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />

      <input
        placeholder="Email address"
        className="email"
        required
        type="text"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        value={formData.email}
      />
      <input
        placeholder="password"
        className="password"
        required
        type={showPassword ? "text" : "password"}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        value={formData.password}
      />
      <i onClick={handleShowPassword}>
        {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
      </i>
      <button className="register_button" onSubmit={handleRegister}>
        REGISTER
      </button>
      <p>
        I am 18+ years old and have read and agreed to the
        <Link to="#" className="tos">
          Terms and Conditions
        </Link>
        .
      </p>
      <p className="register_info">
        Already have an account?
        <Link to="/login" className="login_on_register">
          Login
        </Link>
        .
      </p>
    </div>
  );
};

export default Register;
