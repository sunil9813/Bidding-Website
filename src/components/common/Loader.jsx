import React from "react";
import ReactDOM from "react-dom";

export const Loader = () => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-gray-950/80 z-[200]">
      <div className=" fixed top-1/2 left-[45%] w-full h-full">
        <div className="custom-loader z-50"></div>
      </div>
    </div>,
    document.getElementById("loader")
  );
};
