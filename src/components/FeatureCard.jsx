import React from "react";

function FeatureCard({ icon, text, title, customProp }) {
  return (
    <div className={`${customProp}  rounded-lg w-[90%] md:w-[28%] p-4`}>
      <div className="w-16 h-16 bordeer rounded-full bg-[#F5F5F5]  items-center  flex gap-2 justify-center">
        {/* <IoRibbonSharp className="text-2xl" /> */}
              {icon}
             
      </div>
      <h1 className="text-bold font-Poppins py-4 text-black font-semibold">
        {title}{" "}
      </h1>
      <p className="font-Roboto text-sm text-left text-gray">
        {text} <dolor className="lorem4"></dolor>
      </p>
    </div>
  );
}

export default FeatureCard;
