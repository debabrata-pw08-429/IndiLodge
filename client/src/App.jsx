// Import Modules_
import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/edit/:formID" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
