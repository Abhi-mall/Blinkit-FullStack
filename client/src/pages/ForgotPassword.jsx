import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const validField = Object.values(data).every((el) => el);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios({
        ...SummaryApi.forgot_password,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/verify-forgot-password", {
          state: data,
        });
        setData({
          email: "",
        });
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <section className="  w-full container mx-auto px-2">
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
        <p className="font-bold text-lg">Forgot Password</p>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4 ">
          <div className="grid gap-1 ">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              value={data.email}
              onChange={handleChange}
              name="email"
              className="bg-blue-50 p-2 border rounded outline-none focus:border-primary-200"
            ></input>
          </div>

          <button
            disabled={!validField}
            className={` ${
              validField ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"
            }    text-white py-2 rounded font-semibold my-3 tracking-wide`}
          >
            Send otp
          </button>
        </form>
        <p>
          Already have account ?
          <Link
            to={"/login"}
            className="font-semibold text-green-700 hover:text-green-800"
          >
            {" "}
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;
