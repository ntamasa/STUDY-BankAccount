import Button from "../components/Button";

function Homepage() {
  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label htmlFor="name">Customer full name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="id">National ID</label>
          <input type="text" name="id" id="id" />
        </div>
        <Button handleClick={() => console.log("asd")}>
          CREATE NEW CUSTOMER
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
