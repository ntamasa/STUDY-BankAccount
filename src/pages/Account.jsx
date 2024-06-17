import Balance from "../features/account/Balance";
import Button from "../components/Button";
import Customer from "../features/customer/Customer";

function Account() {
  return (
    <div>
      <Balance />

      <Customer />
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input type="number" />
          <select name="currency">
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <Button handleClick={() => console.log("click")}>DEPOSIT</Button>
        </div>

        <div>
          <label>Withdraw</label>
          <input type="number" />
          <Button handleClick={() => console.log("click")}>WITHDRAW</Button>
        </div>

        <div>
          <label>Request loan</label>
          <input type="number" placeholder="Loan amount" />
          <input type="text" placeholder="Loan purpose" />
          <Button handleClick={() => console.log("click")}>REQUEST LOAN</Button>
        </div>
      </div>
    </div>
  );
}

export default Account;
