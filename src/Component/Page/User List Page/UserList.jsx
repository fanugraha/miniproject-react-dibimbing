import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../Layout/UserCard/UserCard";
import "./UserListstyle.css";
import React, { useEffect } from "react";
import { userData } from "../../../redux/slice/UserSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const data = useSelector((state) => state.user.data);

  // Mounting
  useEffect(() => {
    dispatch(userData());
  }, []);

  return (
    <div className="WrapperCard">
      {status === "succeeded" &&
        data.map((item) => <UserCard key={item.id} item={item} />)}
    </div>
  );
};

export default UserList;
