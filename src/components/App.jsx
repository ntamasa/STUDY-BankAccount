import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "../pages/Account";
import Homepage from "../pages/Homepage";
import PageNotFound from "../pages/PageNotFound";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
