import React from "react";
import img_1 from "../../../assets/1.jpg";
import img_2 from "../../../assets/2.jpg";
import img_3 from "../../../assets/3.jpg";
import img_5 from "../../../assets/5.jpg";
import img_6 from "../../../assets/6.jpg";
import img_7 from "../../../assets/7.jpg";
import img_9 from "../../../assets/9.jpg";
import img_10 from "../../../assets/10.jpg";

const PopularBooks = () => {
  return (
    <section className="overflow-hidden text-gray-700 mb-20">
      <h2 className="text-5xl font-semibold mt-10 text-center text-gray-400 border_bottom">
        All Time Most Popular Books
      </h2>
      <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full  rounded-lg  hover:scale-105 transform duration-200 ease-linear "
                src={img_6}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 hover:scale-105 transform duration-200 ease-linear ">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={img_5}
              />
            </div>
            <div className="w-full p-1 md:p-2 hover:scale-105 transform duration-200 ease-linear ">
              <img
                alt="gallery"
                className="block object-cover object-center w-full rounded-lg"
                src={img_3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2 ">
            <div className="w-full p-1 md:p-2 hover:scale-105 transform duration-200 ease-linear ">
              <img
                alt="gallery"
                className="block object-cover object-center w-full rounded-lg "
                src={img_7}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 hover:scale-105 transform duration-200 ease-linear ">
              <img
                alt="gallery"
                className="block object-cover object-center w-full rounded-lg"
                src={img_9}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 hover:scale-105 transform duration-200 ease-linear ">
              <img
                alt="gallery"
                className="block object-cover object-center w-full rounded-lg"
                src={img_1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 hover:scale-105 transform duration-200 ease-linear ">
              <img
                alt="gallery"
                className="block object-cover object-center w-full rounded-lg"
                src={img_2}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 hover:scale-105 transform duration-200 ease-linear">
              <img
                alt="gallery"
                className="block object-cover object-center w-full rounded-lg"
                src={img_10}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
