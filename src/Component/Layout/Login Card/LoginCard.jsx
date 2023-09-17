import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import "./LoginCardstyle.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/slice/LoginSlice";
import { useNavigate } from "react-router";

const LoginCard = (props) => {
  // Set State Login
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const dispatch = useDispatch();
  const status = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);
  const token = useSelector((state) => state.register.token);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const navigate = useNavigate();

  // handle submit
  const handleSubmit = (e) => {
    onOpen();
    dispatch(loginUser({ email: emailLogin, password: passwordLogin }));
    e.preventDefault(e);
  };

  useEffect(() => {
    if (status === "success") {
      navigate("/");
    }
  }, [status]);

  return (
    <div className="LoginCard">
      {status === "failed" && (
        <Modal isOpen={isOpen} onClose={onOpenChange}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">Warning</ModalHeader>
            <ModalBody>
              <p>Missing email login or password!</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onOpenChange}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      <h1 className="Title">Login</h1>
      <div className="wrapper-input">
        <h1 className="Title-Login">Email</h1>
        <Input
          type="email"
          variant="bordered"
          placeholder="Enter your email"
          className="max-w-xs input"
          value={emailLogin} // Add value attribute to Input
          onChange={(event) => {
            setEmailLogin(event.target.value);
          }}
        />
      </div>
      <div className="wrapper-input">
        <h1 className="Title-Login">Password</h1>
        <Input
          value={passwordLogin} // Add value attribute to Input
          onChange={(event) => {
            setPasswordLogin(event.target.value);
          }}
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
      <Button color="primary" className="btn-login" onClick={handleSubmit}>
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
        Don’t have an account yet?{" "}
        <span>
          <a href="#" onClick={props.handleSetRegister}>
            Register
          </a>
        </span>
      </h1>
    </div>
  );
};

export default LoginCard;
