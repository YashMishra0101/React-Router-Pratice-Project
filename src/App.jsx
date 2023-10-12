import "./App.css";
import Home from "./Pages.jsx/Home";
import Login from "./Pages.jsx/Login";
import About from "./Pages.jsx/About";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Error from "./Pages.jsx/Error";
import SignUp from "./Pages.jsx/SignUp";
import Contact from "./Pages.jsx/Contact";
import LogOut from "./Pages.jsx/LogOut";
import DashBoard from "./Pages.jsx/DashBoard";
import { useState } from "react";

function App() {
  const [login, isLogin] = useState(false);
  return (
    <div className=" w-screen h-screen bg-black overflow-hidden text-white ">
      <NavBar login={login} isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login login={login} isLogin={isLogin} />}/>
        <Route path="/signup"element={<SignUp login={login} isLogin={isLogin} />}/>
        <Route path="/logout" element={<LogOut />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
