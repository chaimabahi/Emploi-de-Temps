import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MenuPage from './components/MenuPage'
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< MenuPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
