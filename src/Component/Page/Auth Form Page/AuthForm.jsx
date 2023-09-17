import { useState } from "react";
import LoginCard from "../../Layout/Login Card/LoginCard";
import RegisterCard from "../../Layout/Register Card/RegisterCard";

const AuthForm = () => {
  //Set state defaut login
  const [authType, setauthType] = useState(true);

  const handleSetLogin = () => {
    setauthType(true);
  };
  const handleSetRegister = () => {
    setauthType(false);
  };

  return (
    <div>
      {authType === true && <LoginCard handleSetRegister={handleSetRegister} />}
      {authType === false && <RegisterCard handleSetLogin={handleSetLogin} />}
    </div>
  );
};

export default AuthForm;
