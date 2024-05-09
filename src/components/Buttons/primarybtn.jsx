import React from "react";

const Primarybtn = ({
  name = "primary",
  children = null,
  isdisabled = false,
}) => {
  return isdisabled ? (
    <div className="bg-[#C9C9C9] text-white py-4 px-3 rounded-full flex items-center justify-center gap-2 w-full">
      {name}
      {children !== null && children}
    </div>
  ) : (
    <div className="bg-black hover:bg-[#4E4E4E] text-white py-4 px-3 rounded-full flex items-center justify-center gap-2 w-full">
      {name}
      {children !== null && children}
    </div>
  );
};

export default Primarybtn;
