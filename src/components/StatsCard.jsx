import React from "react";

function StatsCard({ text, icon }) {
  return (
    <div className="w-80  gap-4 text-sm flex font-Poppins items-center">
      <div className="w-20 md:w-12 md:h-12 h-20 bordeer rounded-full bg-[rgb(245,245,245)]  items-center  flex gap-2 justify-center">
        {icon}
      </div>
      <p className="text-gray w-[60%] text-lg md:text-sm">{text}</p>
    </div>
  );
}

export default StatsCard;
