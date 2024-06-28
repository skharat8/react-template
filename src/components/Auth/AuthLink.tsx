import AuthType from "@data/types";

function AuthLink({ authType, onAuthToggle }: AuthLinkProps) {
  const linkTo = authType === "signup" ? "Login" : "Register";

  return (
    <div>
      <div className="login-register-link">
        <p>
          {authType === "signup" ? "Already" : "Don't"} have an account?{" "}
          <button
            type="button"
            className="button-link auth-link"
            onClick={onAuthToggle}
          >
            {linkTo}
          </button>
        </p>
      </div>
    </div>
  );
}

type AuthLinkProps = {
  authType: AuthType;
  onAuthToggle: () => void;
};

export default AuthLink;
