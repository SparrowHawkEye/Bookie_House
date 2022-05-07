import React from "react";
import soulImage from "../../../assets/soul.jpg";

const Banner = () => {
  return (
    <div className="flex w-11/12 mx-auto justify-around items-center bg-slate-200">
      <div className=" w-[50%] h-[100%] animate__animated animate__bounceInLeft">
        <h1 className="text-5xl font-medium text-green-400">A Book Can Change Your Life</h1>
        <p className="text-lg mt-5 text-justify">Every book, every volume you see here, has a soul. The soul of the person who wrote it and of those who read it and lived and dreamed with it. Every time a book changes hands, every time someone runs his eyes down its pages, its spirit grows and strengthens.</p>
      </div>
      <div className="w-[22%] relative">
        <img className="z-0 animate__animated animate__zoomInLeft slow" src={soulImage} alt="book in hand" />        
      </div>
    </div>
  );
};

export default Banner;

// #F9F5E8
