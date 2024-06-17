import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer() {},
  },
});

export const { createCustomer } = customerSlice.actions;

export default customerSlice.reducer;
