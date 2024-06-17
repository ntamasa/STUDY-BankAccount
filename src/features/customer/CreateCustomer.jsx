import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { createCustomer } from "./customerSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateCustomer() {
  const [name, setName] = useState("");
  const [nationalID, setNationalID] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleClick() {
    if (!name || !nationalID) return;
    dispatch(createCustomer(name, nationalID));
    navigate("account");
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>National ID</label>
          <input
            type="text"
            value={nationalID}
            onChange={(e) => setNationalID(e.target.value)}
          />
        </div>
        <Button handleClick={handleClick}>CREATE NEW CUSTOMER</Button>
      </div>
    </div>
  );
}

export default CreateCustomer;
