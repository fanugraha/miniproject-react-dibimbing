import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import AuthForm from "./Component/Page/Auth Form Page/AuthForm";
import UserList from "./Component/Page/User List Page/UserList";
import { useRoutes } from "react-router";
import AppRoter from "./roter/AppRoter";

const routes = [
  {
    path: "/",
    element: (
      <AppRoter>
        <UserList />
      </AppRoter>
    ),
  },
  {
    path: "/auth",
    element: <AuthForm />,
  },
];

function App() {
  const element = useRoutes(routes);
  return <NextUIProvider>{element}</NextUIProvider>;
}

export default App;
