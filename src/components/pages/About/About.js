import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
const About = () => {
  return (
    <>
      <PageTitle title="About" />
      <div className="container my-5 mx-auto ">
        <h2 className="text-5xl font-semibold text-center mb-5 text-gray-400">7 Years of Glory</h2>
        <p className="text-center">More to go and come</p>
        <div className=" my-8 flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 ">
          <div className="flex flex-row-reverse md:contents ">
            <div className="bg-green-500 col-start-1 animate__animated animate__fadeInLeft col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1"><span className="text-bold text-3xl">2016: </span> When It All Start</h3>
              <p className="leading-tight text-justify">
              I opened an independent bookshop at Uttara on September 28th, 2016. Some People thought that i was foolish. But I didn't take what they think of.
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-100 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow animate-bounce hover:animate-ping"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-100 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow animate-bounce hover:animate-ping" ></div>
            </div>
            <div className="bg-green-500 animate__animated animate__fadeInRight col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1"><span className="text-bold text-3xl">2017:</span> A New Place To Start</h3>
              <p className="leading-tight text-justify">
                I bought a Big Place to give my Books Some space to Breath. Big Place a lots off books. Oh!! That smells of old and new book I love ❤️ 
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div className="bg-green-500 animate__animated animate__fadeInLeft col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1"><span className="text-bold text-3xl">2019:</span> New Way to Sell</h3>
              <p className="leading-tight text-justify">
                As It's a digital era of online shopping. So I make an addition to our shop. It's now not only available offline but also Online.
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-100 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow animate-bounce hover:animate-ping"></div>
            </div>
          </div>

          <div className="flex flex-row-reverse  md:contents">
            <div className="bg-green-500 animate__animated animate__fadeInLeft col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md ">
              <h3 className="font-semibold text-lg mb-1"><span className="text-bold text-3xl">2020:</span> Free of Charge</h3>
              <p className="leading-tight text-justify">
                Started Home Delivery Services Which is free of cost. Isn't That Great!!! 🎉
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-100 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow animate-bounce hover:animate-ping" ></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-100 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow animate-bounce hover:animate-ping"></div>
            </div>
            <div className="bg-green-500 animate__animated animate__fadeInRight col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1"><span className="text-bold text-3xl">2022:</span> More To Come</h3>
              <p className="leading-tight text-justify">
                There are many People Who Love to read peacefully in a Library. So a small gift for them added a Library. This is Just The Beginning. Looking forward to Add more 🤠
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
