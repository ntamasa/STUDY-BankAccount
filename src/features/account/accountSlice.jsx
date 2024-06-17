import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: {
    amount: 0,
    purpose: "",
  },
  isLoading: false,
};

const BASE_API_URL = "https://api.frankfurter.app/latest";

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        if (state.loan.amount > 0) return;

        state.balance += action.payload.amount;
        state.loan.amount += action.payload.amount;
        state.loan.purpose = action.payload.purpose;
      },
    },
    payLoan(state) {
      if (state.loan.amount > state.balance) {
        state.loan.amount -= state.balance;
        state.balance = 0;
      }

      state.balance -= state.loan.amount;
      state.loan.amount = 0;
      state.loan.purpose = "";
    },
    convertintCurrency(state) {
      state.isLoading = true;
    },
  },
});

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      BASE_API_URL + `?amount=${amount}&from=${currency}&to=USD`
    );

    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };
}

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;
