import React from "react";

const Secondary = ({ name = "secondary" }) => {
  return (
    <div className="bg-white hover:bg-[#F1F1F1] text-black py-4 px-3 border rounded-full w-full">
      {name}
    </div>
  );
};

export default Secondary;
