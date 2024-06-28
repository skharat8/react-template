import { Link } from "react-router-dom";

function AuthLink({ authType }: AuthLinkProps) {
  const linkTo = authType === "signup" ? "Login" : "Register";

  return (
    <div>
      <div className="login-register-link">
        <p>
          {authType === "signup" ? "Already" : "Don't"} have an account?{" "}
          <Link to={authType === "signup" ? "/" : "register"}>{linkTo}</Link>
        </p>
      </div>
    </div>
  );
}

type AuthLinkProps = {
  authType: string;
};

export default AuthLink;
