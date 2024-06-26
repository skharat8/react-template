import Signup from "@components/Auth/Signup";
import Login from "@components/Auth/Login";

function AuthPage({ authType }: AuthProps) {
  return (
    <div className="container">
      <div className="header">
        <h2>{authType}</h2>
        <div className="divider" />
      </div>
      {authType === "Signup" ? <Signup /> : <Login />}
    </div>
  );
}

type AuthProps = {
  authType?: string;
};

AuthPage.defaultProps = {
  authType: "Signup",
};

export default AuthPage;
