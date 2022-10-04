import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Navbar from "./components/navbar/navbar.jsx";

//paths
import paths from "./paths/paths.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*root*/}
        {paths.map((item)=>(
          <Route path={item.link} element={item.comp}/>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
