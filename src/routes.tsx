import App from "./App";

const routes = [
  { path: "/", element: <App authType="login" /> },
  { path: "/register", element: <App authType="signup" /> },

  // {
  //   element: <AppLayout />,
  //   children: [{ path: "/home", element: <HomePage /> }],
  // },
];

export default routes;
