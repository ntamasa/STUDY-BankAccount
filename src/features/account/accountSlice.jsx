import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit() {},
    withdraw() {},
    requestLoan() {},
    logOut() {},
  },
});

export const { deposit, withdraw, requestLoan, logOut } = accountSlice.actions;
export default accountSlice.reducer;
