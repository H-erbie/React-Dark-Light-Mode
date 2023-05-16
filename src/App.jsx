import { useState } from "react";
import "./App.css";
import {
  FaToggleOff,
  FaToggleOn,
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useGlobalContext } from "./Context";
function App() {
  const { mode, changeMode } = useGlobalContext();

  return (
    <div className="App" data-theme={mode ? "dark" : "light"}>
      <nav className="navbar-container">
        <div className="app-name">Dark/light Mode</div>
        <div className="switch" onClick={changeMode}>
          {mode ? <FaToggleOn /> : <FaToggleOff />}
        </div>
      </nav>
      <div className="form-container">
        <form>
          <div className="socials">
            <button className="btn soc-icon">
              <FaGoogle />
            </button>
            <button className="btn soc-icon">
              {" "}
              <FaFacebook />
            </button>
            <button className="btn soc-icon">
              <FaGithub />
            </button>
            <button className="btn soc-icon">
              <FaLinkedin />
            </button>
          </div>
          <div className="form-top">
            <div className="line"></div>
            <span className="word">or</span>
            <div className="line"></div>
          </div>
          <label id="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <label id="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button className="btn login">Login</button>
          <button className="btn create-account">Create an account</button>
        </form>
      </div>
    </div>
  );
}

export default App;
