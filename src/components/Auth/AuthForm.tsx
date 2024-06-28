import AuthType from "@data/types";
import Signup from "./Signup";
import Login from "./Login";
import "./auth.css";
import AuthLink from "./AuthLink";

function AuthForm({ authType, onAuthToggle }: AuthProps) {
  return (
    <div className="auth-container">
      <h2 className="auth-header">{authType}</h2>
      <div className="divider" />

      <form className="form-container">
        {authType === "signup" && <Signup />}
        <Login />

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

type AuthProps = {
  authType: AuthType;
  onAuthToggle: () => void;
};

export default AuthForm;
