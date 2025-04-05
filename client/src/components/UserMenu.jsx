import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Divider from "./Divider";
import Axios from "../utils/Axios";
import SummaryApi from "../common/summeryApi";
import { logout } from "../store/userSlice";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";
import { TbExternalLink } from "react-icons/tb";

const UserMenu = ({ close }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.logout,
      });
      if (response.data.success) {
        if (close) {
          close();
        }
        dispatch(logout());
        localStorage.clear();
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <div className=" ">
      <div className="font-semibold">My Account</div>

      <div className="text-sm mb-2 flex gap-2 items-center">
        <span className="mx-w-52 text-ellipsis line-clamp-1">
          {" "}
          {user.name || user.mobile}{" "}
        </span>
        <Link to={"/dashboard/profile"} className="hover:text-primary-200">
          <TbExternalLink />
        </Link>
      </div>

      <Divider />
      <div className="text-sm grid gap-1 my-2">
        <Link
          to={"/dashboard/myorders"}
          className="px-2 hover:bg-orange-200 py-1"
        >
          My Orders
        </Link>
        <Link
          to={"/dashboard/address"}
          className="px-2 hover:bg-orange-200 py-1"
        >
          Save Address
        </Link>
        <button
          onClick={handleLogOut}
          className="text-left px-2 hover:bg-orange-200 py-1"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
