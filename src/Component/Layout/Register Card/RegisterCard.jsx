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

const RegisterCard = ({ handleSetLogin }) => {
  // Set State Register
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  // Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Invisible Passwod
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // Post Login API
  const postApiRegister = () => {
    axios
      .post("https://reqres.in/api/register", {
        email: emailRegister,
        password: passwordRegister,
      })
      .then((res) => {
        console.log("Berhasil", res);
      })
      .catch((err) => {
        console.log(err?.response.data.error);
        onOpen();
      });
  };

  return (
    <div className="RegisterCard">
      <h1 className="Title">Register</h1>
      <div className="wrapper-input">
        <h1 className="Title-Login">Email</h1>
        <Input
          type="emailRegister"
          variant="bordered"
          placeholder="Enter your email"
          className="max-w-xs input"
          // Ngambil inputan user dan di save di useState
          onChange={(event) => {
            setEmailRegister(event.target.value);
          }}
        />
      </div>
      <div className="wrapper-input">
        <h1 className="Title-Login">Password</h1>
        <Input
          // Ngambil inputan user dan di save di useState
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
        onClick={postApiRegister}
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
          <a href="#" onClick={handleSetLogin}>
            Login
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

export default RegisterCard;
