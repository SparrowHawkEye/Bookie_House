import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex justify-center">
      <lord-icon
        src="https://cdn.lordicon.com/ttioogfl.json"
        trigger="loop"
        delay="500"
        style={{ width: "72px", height: "72px" }}
      ></lord-icon>
    </div>
  );
};

export default Loading;
