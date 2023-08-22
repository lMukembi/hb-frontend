import axios from "axios";
import { DEPOSIT_SUCCESS } from "../constants/deposit";

const smartAPI = "http://localhost:8000";

export const deposit = (formData) => async (dispatch) => {
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

    dispatch({ type: DEPOSIT_SUCCESS, payload: data });

    if (data) {
      window.location.reload(false);
      window.location.href = "/";
      alert("Desposited submitted successfully.");
    }
  } catch (error) {
    console.log(error);
    if (error) {
      alert("Could not deposit successfully.");
    }
  }
};
