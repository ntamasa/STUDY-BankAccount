import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Page not found please try again</h2>
      <Button handleClick={() => navigate(-1)}>&larr; Back</Button>
    </div>
  );
}

export default PageNotFound;
