import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import LoginForm from "./Component/Login Form/Loginform";

function App() {
  return (
    <NextUIProvider>
      <LoginForm />
    </NextUIProvider>
  );
}

export default App;
