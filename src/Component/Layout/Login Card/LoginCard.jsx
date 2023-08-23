import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import "./LoginCardstyle.css";
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

const LoginCard = ({ handleSetRegister }) => {
  // Set State Logim
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  // Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Invisible Passwod
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // Post Login API
  const postApiLogin = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: emailLogin,
        password: passwordLogin,
      })
      .then((res) => {
        console.log("Berhasil", res);
      })
      .catch((err) => {
        console.log("Gagal", err?.response.data.error);
        onOpen();
      });
  };

  return (
    <div className="LoginCard">
      <h1 className="Title">Login</h1>
      <div className="wrapper-input">
        <h1 className="Title-Login">Email</h1>
        <Input
          type="emailLogin"
          variant="bordered"
          placeholder="Enter your email"
          className="max-w-xs input"
          // Ngambil inputan user dan di save di useState
          onChange={(event) => {
            setEmailLogin(event.target.value);
          }}
        />
      </div>
      <div className="wrapper-input">
        <h1 className="Title-Login">Password</h1>
        <Input
          // Ngambil inputan user dan di save di useState
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
      <Button
        color="primary"
        className="btn-login"
        // Action
        onClick={postApiLogin}
      >
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
          <a href="#" onClick={handleSetRegister}>
            Register
          </a>
        </span>
      </h1>
      {/* Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Warning</ModalHeader>
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
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LoginCard;
