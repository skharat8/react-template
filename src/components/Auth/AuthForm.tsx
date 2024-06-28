import { useState } from "react";
import AuthType from "@data/types";
import Signup from "./Signup";
import Login from "./Login";
import "./auth.css";
import AuthLink from "./AuthLink";

function AuthForm() {
  const [authType, setAuthType] = useState<AuthType>("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function onAuthToggle() {
    setAuthType(prevAuthType =>
      prevAuthType === "login" ? "signup" : "login"
    );
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <div className="auth-container">
      <h2 className="auth-header">{authType}</h2>
      <div className="divider" />

      <form className="form-container" onSubmit={handleSubmit}>
        {authType === "signup" && (
          <Signup formData={formData} handleChange={handleChange} />
        )}
        <Login formData={formData} handleChange={handleChange} />

        {authType === "login" && (
          <button type="button" className="guest-button-link">
            Demo the app with a guest login?
          </button>
        )}

        <button type="submit" className="login-register-button">
          {authType}
        </button>

        <AuthLink authType={authType} onAuthToggle={onAuthToggle} />
      </form>
    </div>
  );
}

export default AuthForm;
