import { DEPOSIT_FAIL, DEPOSIT_SUCCESS } from "../constants/deposit";

const initialState = {
  loading: true,
  depositData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT_SUCCESS:
      return { ...state, loading: false, userData: action.payload };
    case DEPOSIT_FAIL:
      return { ...state, loading: false, userData: action.payload };
    default:
      return state;
  }
};
