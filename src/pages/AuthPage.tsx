import { useState } from "react";
import type AuthType from "@data/types";
import AuthForm from "@components/Auth/AuthForm";
import AuthLink from "@components/Auth/AuthLink";
import "@components/Auth/auth.css";

function AuthPage() {
  const [authType, setAuthType] = useState<AuthType>("login");

  function onAuthToggle() {
    setAuthType(prevAuthType =>
      prevAuthType === "login" ? "signup" : "login"
    );
  }

  return (
    <div className="auth-container">
      <h2 className="auth-header">{authType}</h2>
      <div className="divider" />
      <AuthForm authType={authType} />
      <AuthLink authType={authType} onAuthToggle={onAuthToggle} />
    </div>
  );
}

export default AuthPage;
