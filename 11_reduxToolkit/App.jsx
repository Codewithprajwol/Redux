import React from "react";
// import products from "./store/products";
import './App.css'
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
     <Header/>
     <Outlet />
    </>
  );
}

export default App;
