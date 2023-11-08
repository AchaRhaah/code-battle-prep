import React from "react";

function CallToAction() {
  return (
    <div className="w-full flex justify-center items-center py-24">
      <div className="w-[70%] flex flex-col md:flex-row p-16 bg-green text-white rounded-xl justify-center md:justify-between">
        <h1 className="font-bold text-2xl text-center my-8 md:my-0 font-Poppins md:w-[47%] w-full">
          Are you ready to start your course now!
        </h1>
        <div className="flex w-full md:w-[55%] gap-6  justify-end items-center font-medium font-Poppins transition-all duration-300">
          <button className="bg-white w-[45%] text-sm text-green  rounded-md h-12 px-2">
            Get Started
          </button>
          <button className="border border-white text-sm w-[45%] px-2  bg-green rounded-md h-12 ">
            contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
