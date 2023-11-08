import React from "react";
import { IoRibbonSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import FeatureCard from "../components/FeatureCard";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";

function Features() {
  return (
    <div className="w-full  flex flex-col justify-center items-center py-20">
      <h1 className="font-Poppins text-3xl font-bold text-black py-1 ">
        Why Choose Jesco?
      </h1>
      <p className="text-gray text-lg pt-4 text-center items-center pb-12 w-[40%] font-Poppins font-medium ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi.
      </p>
      <div className="px-12 py-4 flex gap-6 flex-wrap justify-center">
        <FeatureCard
          customProp="border-2 border-[#F9F9F9]"
          text="We are providing a certificcate to  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        "
          title={"Get Certificate"}
          icon={<IoRibbonSharp className="text-2xl text-yellow" />}
        />
        <FeatureCard
          customProp="shadow-lg"
          text="We are providing a certificcate to  Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          title="Get Membership"
          icon={<BsPeopleFill className="text-2xl text-green" />}
        />{" "}
        <FeatureCard
          customProp="border-2 border-[#F9F9F9]"
          text="We are providing a certificcate to  Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          title={"Become a Teacher"}
          icon={<HiMiniClipboardDocumentList className="text-2xl text-pink" />}
        />
      </div>
    </div>
  );
}

export default Features;
