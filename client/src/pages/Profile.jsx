import React from "react";
import { useSelector } from "react-redux";
import { LuCircleUserRound } from "react-icons/lu";

const Profile = () => {
  const user = useSelector((state) => state.user);
  console.log("user", user);
  return (
    <div>
      <div>
        {user.avatar ? (
          <img src={user.avatar} alt="profile" />
        ) : (
          <LuCircleUserRound size={60} />
        )}
      </div>
    </div>
  );
};

export default Profile;
