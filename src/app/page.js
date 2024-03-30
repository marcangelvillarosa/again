"use client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

export default function App() {
 
  return (
    <>
    <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login/>} />
            <Route path='/LoginPage' element={<Login/>} />
            <Route path='/RegisterPage' element={<Register />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}
