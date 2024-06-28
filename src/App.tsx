import { useState } from "react";
import logo from "@images/app-logo-96x96.png";
import AuthType from "@data/types";
import AuthForm from "./components/Auth/AuthForm";
import "./App.css";

function App() {
  // const [user, setUser] = useState<User | null>(null);
  const [authType, setAuthType] = useState<AuthType>("login");

  function onAuthToggle() {
    setAuthType(authType === "login" ? "signup" : "login");
  }

  return (
    <div className="container">
      <h1>A modern Twitter experience</h1>
      <img className="logo" src={logo} alt="Main App Logo" />
      <AuthForm authType={authType} onAuthToggle={onAuthToggle} />;
    </div>
  );
}

export default App;

// type ContextType = { user: User | null };
// Use with: <Outlet context={{ user } satisfies ContextType} />

// export function useUser() {
//   return useOutletContext<ContextType>();
// }
