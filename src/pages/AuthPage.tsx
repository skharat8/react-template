import { useState } from "react";
import type AuthType from "@data/types";
import AuthForm from "@components/Auth/AuthForm";
import AuthLink from "@components/Auth/AuthLink";
import styles from "@components/Auth/Auth.module.css";

function AuthPage() {
  const [authType, setAuthType] = useState<AuthType>("login");

  function onAuthToggle() {
    setAuthType(prevAuthType =>
      prevAuthType === "login" ? "signup" : "login"
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{authType}</h2>
      <div className={styles.divider} />
      <AuthForm authType={authType} />
      <AuthLink authType={authType} onAuthToggle={onAuthToggle} />
    </div>
  );
}

export default AuthPage;
