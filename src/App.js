import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from "./pages/login";
import Signup from "./pages/signup";
import PasswordReset from "./pages/passwordReset";
import Home from "./pages/home";
import Logout from "./pages/logout";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/Login" element={<Login/>}></Route>
                  <Route path="/Logout" element={<Logout/>}></Route>
                  <Route path="/SignUp" element={<Signup/>}></Route>
                  <Route path="/Password-Reset" element={<PasswordReset/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
