import React from "react";
import { AiFillFile, AiFillMessage } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import StatsCard from "../components/StatsCard";
function Stats() {
  return (
    <div className=" flex flex-col md:flex-row  w-full  items-center justify-center py-4 gap-6 px-12 ">
      <StatsCard
        icon={
          <AiFillFile className="text-green text-[1.8rem] md:text-[1.3rem]" />
        }
        text="1,000+ free best online courses"
      />
      <StatsCard
        icon={
          <BsFillPersonFill className="text-pink  text-[1.8rem] md:text-[1.3rem]" />
        }
        text="1,000+ experienced and expert mentors"
      />
      <StatsCard
        icon={
          <AiFillMessage className="text-green text-[1.8rem] md:text-[1.3rem]" />
        }
        text="1M+ students rate and review"
      />
    </div>
  );
}

export default Stats;
