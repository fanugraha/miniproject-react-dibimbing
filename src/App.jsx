import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import LoginForm from "./Component/Page/Login Form/Loginform";
import UserList from "./Component/Page/User List Page/UserList";

function App() {
  return (
    <NextUIProvider>
      <UserList />
    </NextUIProvider>
  );
}

export default App;
