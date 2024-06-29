import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";

const routes = [
  { path: "/", element: <App />, errorElement: <ErrorPage /> },

  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/home", element: <HomePage /> }],
  },
];

export default routes;
