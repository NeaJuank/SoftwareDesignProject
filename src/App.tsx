import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Login from "@pages/login";
import Register from "@pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
    </Routes>
  );
};

export default App;
