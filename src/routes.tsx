import { Route, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

export default routes;
