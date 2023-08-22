import axios from "axios";
import { WITHDRAW_SUCCESS } from "../constants/withdraw";

const smartAPI = "http://localhost:8000";

export const withdraw = (formData) => async (dispatch) => {
  const data = localStorage.getItem("userAccount");
  const token = JSON.parse(data);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.data}`,
    //   "Access-Control-Allow-Origin": "https://www.jorjer.com",
  };
  const config = {
    headers: headers,
  };

  try {
    const { data } = await axios.post(
      `${smartAPI}/api/lipanampesa/lipanampesa`,
      formData,
      config
    );

    dispatch({ type: WITHDRAW_SUCCESS, payload: data });

    if (data) {
      window.location.reload(false);
      window.location.href = "/";
      alert("Sent successfully.");
    }
  } catch (error) {
    console.log(error);
    if (error) {
      alert("Could not send successfully.");
    }
  }
};
