import App from "./App";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";

const routes = [
  { path: "/", element: <App /> },

  {
    element: <AppLayout />,
    children: [{ path: "/home", element: <HomePage /> }],
  },
];

export default routes;
