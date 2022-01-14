import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Receipts from "./components/Receipts";
import Counter from "./task3/Counter";
import Register from "./task5/Register";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/recipes" element={<Receipts />} />
        <Route path="/mail" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
