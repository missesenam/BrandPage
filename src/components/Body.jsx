import React from "react";
import heroimage from "/src/assets/images/hero-image.png";
import amazon from "/src/assets/images/amazon.png";
import flipkart from "/src/assets/images/flipkart.png";

const Body = () => {
  return (
    <>
      <div
        className="flex w-[80%] mx-auto
      h-[calc(100vh-4rem)] items-center"
      >
        <div className="w-[50%]">
          <h1 className="font-extrabold text-[5rem] uppercase leading-none text-black">
            your feet deserve the best
          </h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus
            voluptates qui odio magnam facere soluta, fugiat quia saepe rem quas
            at exercitationem obcaecati ipsam eos. Ut, corrupti. Commodi,
            beatae?
          </p>
          <div className="flex space-x-3 mb-3">
            <button className="bg-red-500 text-white py-1 px-3">
              Shop Now
            </button>
            <button className="border border-black py-1 px-3">Category</button>
          </div>
          <div>
            <p>Also available on</p>
            <div className="flex space-x-3">
              <img src={amazon} alt="" />
              <img src={flipkart} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src={heroimage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Body;
