import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Login from "@pages/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default App;
