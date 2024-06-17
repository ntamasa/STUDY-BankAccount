import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  nationalID: "",
  createdAt: "",
  isLoggedIn: false,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(name, nationalID) {
        return {
          payload: {
            name,
            nationalID,
            createdAt: new Date().toISOString(),
            isLoggedIn: true,
          },
        };
      },
      reducer(state, action) {
        state.name = action.payload.name;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
        state.isLoggedIn = action.payload.isLoggedIn;
      },
    },
  },
});

export const { createCustomer } = customerSlice.actions;

export default customerSlice.reducer;
