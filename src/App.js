import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from "./pages/login";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
