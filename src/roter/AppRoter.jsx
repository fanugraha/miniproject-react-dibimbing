import { Navigate, Outlet } from "react-router";

const AppRoter = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token || token === undefined) {
    return <Navigate to={"/auth"} />;
  }

  return <div>{children || <Outlet />}</div>;
};

export default AppRoter;
