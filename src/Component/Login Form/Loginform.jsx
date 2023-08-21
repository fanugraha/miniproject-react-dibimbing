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
    <div className="container">
      <div className="LoginCard">
        <h1 className="Title">Login</h1>
        <Input
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter Your Email"
          className="max-w-xs input"
        />
        <Input
          label="Password"
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
        <Button color="primary" className="btn-login">
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
