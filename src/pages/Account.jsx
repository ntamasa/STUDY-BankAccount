import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Balance from "../features/account/Balance";
import Button from "../components/Button";
import Customer from "../features/customer/Customer";
import {
  deposit,
  withdraw,
  requestLoan,
  payLoan,
} from "../features/account/accountSlice";

function Account() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  const dispatch = useDispatch();
  const { balance, loan, isLoading } = useSelector((store) => store.account);

  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdrawal() {
    if (balance < withdrawAmount) return;
    dispatch(withdraw(withdrawAmount));
    setWithdrawAmount("");
  }

  function handleRequestLoan() {
    if (loan.amount > 0) return;
    if (!loanAmount || !loanPurpose) return;

    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <Balance />

      <Customer />
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />

          <select
            name="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <Button disabled={isLoading} handleClick={handleDeposit}>
            {isLoading ? "Converting currency..." : "DEPOSIT"}
          </Button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            disabled={balance === 0}
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(+e.target.value)}
          />
          <Button disabled={balance === 0} handleClick={handleWithdrawal}>
            WITHDRAW
          </Button>
        </div>

        {loan.amount > 0 ? (
          <div>
            <span>
              Pay back ${loan.amount} ({loan.purpose})
            </span>
            <Button
              disabled={balance < loan.amount}
              handleClick={handlePayLoan}
            >
              PAY LOAN
            </Button>
          </div>
        ) : (
          <div>
            <label>Request loan</label>
            <input
              type="number"
              placeholder="Loan amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
            />
            <input
              type="text"
              placeholder="Loan purpose"
              value={loanPurpose}
              onChange={(e) => setLoanPurpose(e.target.value)}
            />
            <Button disabled={loan.amount > 0} handleClick={handleRequestLoan}>
              REQUEST LOAN
            </Button>
          </div>
        )}
        {/* <Button handleClick={handleLogOut}>Log out</Button> */}
      </div>
    </div>
  );
}

export default Account;
