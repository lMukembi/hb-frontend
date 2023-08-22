import { combineReducers } from "redux";

import user from "./queries/reducers/user";
import deposit from "./queries/reducers/deposit";
import withdraw from "./queries/reducers/withdraw";

const rootReducer = combineReducers({
  smart_user: user,
  smart_deposit: deposit,
  smart_withdraw: withdraw,
});
export default rootReducer;
