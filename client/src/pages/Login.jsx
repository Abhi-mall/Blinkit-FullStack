import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi.js";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";
import fetchUserDetails from "../utils/fetchUserDetails";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../store/userSlice";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        ...SummaryApi.login,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);

        const userDetails = await fetchUserDetails();
        dispatch(setUserDetails(userDetails.data));
        setData({
          email: "",
          password: "",
        });

        navigate("/");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <section className="  w-full container mx-auto px-2">
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
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
          <div className="grid gap-1 ">
            <label htmlFor="password">Password :</label>
            <div className="bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                id="password"
                value={data.password}
                onChange={handleChange}
                name="password"
                className="w-full outline-none"
              ></input>
              <div
                onClick={() => {
                  setShowPassword((preve) => !preve);
                }}
                className="cursor-pointer"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <Link
              to={"/forgot-password"}
              className="ml-auto hover:text-primary-200"
            >
              Forgot password?
            </Link>
          </div>

          <button
            disabled={!validField}
            className={` ${
              validField ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"
            }    text-white py-2 rounded font-semibold my-3 tracking-wide`}
          >
            Login
          </button>
        </form>
        <p>
          Don't have account ?
          <Link
            to={"/register"}
            className="font-semibold text-green-700 hover:text-green-800"
          >
            {" "}
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
