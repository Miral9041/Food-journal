import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {

  const [showLogin,setShowlogin] = useState(false)
  
  const [data, setdata] = useState([{}]);
  useEffect(() => {
    // fetch("/api")
    //   .then((res) => res.json())
    //   .then((product) => {
    //     setdata(product);
    //     console.log("kkk", data);
    //   });
  }, [])

  return (
    <>
    {showLogin?<LoginPopup setShowlogin={setShowlogin}/>:<></>}
    <div className="app">
      <Navbar setShowlogin={setShowlogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Order" element={<PlaceOrder />} />
      </Routes>
      <Footer/>
    </div>
    </>
  );
};

export default App;
