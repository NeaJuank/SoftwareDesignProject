import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Register from "./Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
