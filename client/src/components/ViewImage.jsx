import React from "react";
import { IoClose } from "react-icons/io5";

const ViewImage = ({ url, close }) => {
  return (
    <section className="fixed left-0 right-0 top-0 bottom-0 bg-neutral-900 bg-opacity-70 p-4 z-50 flex justify-center items-center">
      <div className=" w-full max-w-md max-h-[80vh] p-4 bg-white">
        <button onClick={close} className=" w-fit ml-auto block ">
          <IoClose size={20} />
        </button>
        <img
          onClick={close}
          src={url}
          alt="Full Image"
          className="w-full h-full object-scale-down"
        />
      </div>
    </section>
  );
};

export default ViewImage;
