import React from "react";
import nodata from "../assets/nothing here yet.webp";

export const NoData = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-4">
      <img src={nodata} alt="no data" className="w-36" />
      <p className="text-neutral-500">No data</p>
    </div>
  );
};
