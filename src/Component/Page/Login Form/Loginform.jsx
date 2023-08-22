import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";

import "./Loginform.css";

const LoginForm = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="LoginCard">
      <h1 className="Title">Login</h1>
      <div className="wrapper-input">
        <h1 className="Title-Login">Email</h1>
        <Input
          type="email"
          variant="bordered"
          placeholder="Enter Your Email"
          className="max-w-xs input"
        />
      </div>
      <div className="wrapper-input">
        <h1 className="Title-Login">Password</h1>
        <Input
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs input"
        />
      </div>
      <Button color="primary" className="btn-login">
        Login
      </Button>
      <h1 className="Text-Form">or continue with</h1>
      <div className="SocialMedia">
        <button className="Wrapper-Sosmed">
          <img src="src\assets\Icon & Logo\google.png" alt="" />
        </button>
        <button className="Wrapper-Sosmed">
          <img src="src\assets\Icon & Logo\github.png" alt="" />
        </button>
        <button className="Wrapper-Sosmed">
          <img src="src\assets\Icon & Logo\facebook.png" alt="" />
        </button>
      </div>
      <h1 className="Text-Form">
        Don’t have an account yet? <span>Register for free</span>
      </h1>
    </div>
  );
};

export default LoginForm;
