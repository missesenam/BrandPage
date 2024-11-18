import React from "react";
import brand_logo from "/src/assets/images/brand_logo.png";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between h-16 items-center w-[85%] mx-auto shadow-sm">
        <div>
          <img src={brand_logo} alt="" />
        </div>

        <ul className="flex space-x-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Location</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <button className="py-1 px-3 bg-red-400 text-white rounded-lg">
          sign up
        </button>
      </div>
    </>
  );
};

export default NavBar;
