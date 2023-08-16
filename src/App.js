import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Request from "./components/Request/Request";
import NotFound from "./components/NotFound/NotFound";
import './css/App.css'
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request" element={<Request />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
