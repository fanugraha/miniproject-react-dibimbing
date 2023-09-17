import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import "./RegisterCardstyle.css";
import axios from "axios";
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
import { registerUser } from "../../../redux/slice/RegisterSlice";
import { useNavigate } from "react-router";

const RegisterCard = (props) => {
  // Set State Register
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const dispatch = useDispatch();
  const status = useSelector((state) => state.register.status);
  const error = useSelector((state) => state.register.error);
  const token = useSelector((state) => state.register.token);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    onOpen();
    dispatch(
      registerUser({ email: emailRegister, password: passwordRegister })
    );
  };

  // Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Invisible Passwod
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="RegisterCard">
      {status === "failed" && (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Warning
                </ModalHeader>
                <ModalBody>
                  <p>Missing email login or username!</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
            {status === "success" && useNavigate("/")}
          </ModalContent>
        </Modal>
      )}
      <h1 className="Title">Register</h1>
      <div className="wrapper-input">
        <h1 className="Title-Login">Email</h1>
        <Input
          type="email"
          variant="bordered"
          placeholder="Enter your email"
          className="max-w-xs input"
          value={emailRegister}
          // Ngambil inputan user dan di save di useState
          onChange={(event) => {
            setEmailRegister(event.target.value);
          }}
        />
      </div>
      <div className="wrapper-input">
        <h1 className="Title-Login">Password</h1>
        <Input
          value={passwordRegister}
          onChange={(event) => {
            setPasswordRegister(event.target.value);
          }}
          variant="bordered"
          placeholder="Create your password"
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
      <Button
        color="primary"
        className="btn-login"
        // Action
        onClick={handleSubmit}
      >
        Register
      </Button>
      <h1 className="Text-Form">or register with</h1>
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
        Have an account yet?{" "}
        <span>
          <a href="#" onClick={props.handleSetLogin}>
            Login
          </a>
        </span>
      </h1>
    </div>
  );
};

export default RegisterCard;
