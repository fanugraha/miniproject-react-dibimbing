import { useState } from "react";
import LoginCard from "../../Layout/Login Card/LoginCard";
import RegisterCard from "../../Layout/Register Card/RegisterCard";

const AuthForm = () => {
  //state
  const [AuthType, setAuthType] = useState("Login");

  const handleSetLogin = () => {
    setAuthType("Login");
  };

  const handleSetRegister = () => {
    setAuthType("Register");
  };

  return (
    <div>
      {AuthType === "Login" && (
        <LoginCard handleSetRegister={handleSetRegister} />
      )}
      {AuthType === "Register" && (
        <RegisterCard handleSetLogin={handleSetLogin} />
      )}
    </div>
  );
};

export default AuthForm;
