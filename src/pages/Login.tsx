import logo from "@images/app-logo-96x96.png";
import Auth from "@/features/authentication";

function Login() {
  return (
    <div className="centered-container">
      <h1 className="main-title">A modern Twitter experience</h1>
      <img className="logo" src={logo} alt="Main App Logo" />
      <Auth />;
    </div>
  );
}

export default Login;
