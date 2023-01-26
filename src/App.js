import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Cleaning from "./Pages/Cleaning";
import Furniture from "./Pages/Furniture";
import Money from "./Pages/Money";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Kitchen from "./Pages/Kitchen";
import LivingRoom from "./Pages/LivingRoom";
import BathroomOne from "./Pages/BathroomOne";
import Outdoors from "./Pages/Outdoors";
import BathroomTwo from "./Pages/BathroomTwo";
import BathroomThree from "./Pages/BathroomThree";
import Office from "./Pages/Office";
import Laundry from "./Pages/Laundry";
import Rent from "./Pages/Rent";
import KitchenFurn from "./Pages/KitchenFurn";
import LivingFurn from "./Pages/LivingFurn";
import OfficeFurn from "./Pages/OfficeFurn";
import LaundryFurn from "./Pages/LaundryFurn";
import BathOneFurn from "./Pages/BathOneFurn";
import BathTwoFurn from "./Pages/BathTwoFurn";
import BathThreeFurn from "./Pages/BathThreeFurn";
import OutdoorsFurn from "./Pages/OutdoorsFurn";
import "./index.css";

function App() {
  const [user, setUser] = useState({ id: 0 });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const resp = await fetch("http://localhost:4001/user");
    const user = await resp.json();
    console.log("get user", user);
    setUser(user);
    setIsLoggedIn(user.id > 0);
  };
  const setLogin = (user) => {
    setUser(user);
    setIsLoggedIn(user.id > 0);
  };
  return !isLoggedIn ? (
    <div>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={false} />} />
        <Route path="/Login" element={<Login setLogin={setLogin} />} />
        <Route path="/Cleaning" element={<Login setLogin={setLogin} />} />
        <Route path="/Money" element={<Login setLogin={setLogin} />} />
        <Route path="/Furniture" element={<Login setLogin={setLogin} />} />
        <Route path="/Kitchen" element={<Login setLogin={setLogin} />} />
        <Route path="/Livingroom" element={<Login setLogin={setLogin} />} />
        <Route path="/BathroomOne" element={<Login setLogin={setLogin} />} />
        <Route path="/BathroomTwo" element={<Login setLogin={setLogin} />} />
        <Route path="/BathroomThree" element={<Login setLogin={setLogin} />} />
        <Route path="/Outdoors" element={<Login setLogin={setLogin} />} />
        <Route path="/Office" element={<Login setLogin={setLogin} />} />
        <Route path="/Laundry" element={<Login setLogin={setLogin} />} />
        <Route path="/Rent" element={<Login setLogin={setLogin} />} />
        <Route path="/KitchenFurn" element={<Login setLogin={setLogin} />} />
        <Route path="/LivingFurn" element={<Login setLogin={setLogin} />} />
        <Route path="/OfficeFurn" element={<Login setLogin={setLogin} />} />
        <Route path="/LaundryFurn" element={<Login setLogin={setLogin} />} />
        <Route path="/BathOneFurn" element={<Login setLogin={setLogin} />} />
        <Route path="/BathTwoFurn" element={<Login setLogin={setLogin} />} />
        <Route path="/BathThreeFurn" element={<Login setLogin={setLogin} />} />
        <Route path="/OutdoorsFurn" element={<Login setLogin={setLogin} />} />
      </Routes>
    </div>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={true} />} />
        <Route path="/Login" element={<Login setLogin={setLogin} />} />:
        <Route path="/Cleaning" element={<Cleaning />} />
        <Route path="/Money" element={<Money />} />
        <Route path="/Furniture" element={<Furniture />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/Livingroom" element={<LivingRoom />} />
        <Route path="/BathroomOne" element={<BathroomOne />} />
        <Route path="/BathroomTwo" element={<BathroomTwo />} />
        <Route path="/BathroomThree" element={<BathroomThree />} />
        <Route path="/Outdoors" element={<Outdoors />} />
        <Route path="/Office" element={<Office />} />
        <Route path="/Laundry" element={<Laundry />} />
        <Route path="/Rent" element={<Rent />} />
        <Route path="/KitchenFurn" element={<KitchenFurn />} />
        <Route path="/LivingFurn" element={<LivingFurn />} />
        <Route path="/OfficeFurn" element={<OfficeFurn />} />
        <Route path="/LaundryFurn" element={<LaundryFurn />} />
        <Route path="/BathOneFurn" element={<BathOneFurn />} />
        <Route path="/BathTwoFurn" element={<BathTwoFurn />} />
        <Route path="/BathThreeFurn" element={<BathThreeFurn />} />
        <Route path="/OutdoorsFurn" element={<OutdoorsFurn />} />
      </Routes>
    </div>
  );
}
export default App;
