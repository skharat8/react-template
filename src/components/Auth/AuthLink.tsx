import type AuthType from "@data/types";

function AuthLink({ authType, onAuthToggle }: AuthLinkProps) {
  const linkTo = authType === "signup" ? "Login" : "Register";

  return (
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
  );
}

type AuthLinkProps = {
  authType: AuthType;
  onAuthToggle: () => void;
};

export default AuthLink;
