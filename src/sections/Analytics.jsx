import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import donut from "../assets/images/donut-chart.png";

function Analytics() {
  return (
    <div className="px-16 py-4 py-20 flex pt-20 gap-12 md:gap-0 flex-col-reverse md:flex-row justify-center md:justify-between bg-[#F9F9F9] my-8">
      <div className=" w-full md:w-[45%]">
        <h1 className="font-Poppins text-3xl font-bold text-black py-1 ">
          Analyze your daily, weekly and monthly activity
        </h1>
        <p className="text-sm text-left text-gray py-3 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo a
          dolores animi?
        </p>
        <div className="gap-4 flex text-sm py-3">
          <div className="flex gap-2 text-gray">
            <AiOutlineCheck />
            <p>Get updates</p>
          </div>
          <div className="flex gap-2 text-gray">
            <AiOutlineCheck />
            <p>Track activity</p>
          </div>
        </div>
        <button className="bg-yellow text-white text-sm rounded-lg px-4 py-2">
          Learn More
        </button>
      </div>
      {/* section 2 */}
      <div
        className="w-full md:w-[45%] 
      "
      >
        <div className="flex flex-col w-full md:w-[80%] h-full bg-white rounded-2xl text-gray justify-center">
          <h2 className="font-Poppins text-md my-4 text-black font-semibold self-center">
            Course Statistics
          </h2>
          <div className="w-full flex">
            <img src={donut} className="w-[50%] object-contain" alt="" />
            <div className="flex flex-col justify-center gap-3">
              <div className="flex  text-gray  gap-2 items-center">
                <div className="w-2 h-2 rounded full bg-green"></div>
                <p>tasks</p>
              </div>
              <div className="flex gap-2 items-center  ">
                <div className="w-2 h-2 rounded full bg-yellow"></div>
                <p>tasks</p>
              </div>
              <div className="flex gap-2 items-center text-gray ">
                <div className="w-2 h-2 rounded full bg-pink"></div>
                <p>tasks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
