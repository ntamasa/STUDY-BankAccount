import { useSelector } from "react-redux";

function Balance() {
  const balance = useSelector((store) => store.account.balance);

  return <div className="balance">${balance.toFixed(2)}</div>;
}

export default Balance;
