import Logo from "@/components/Logo";
import Auth from "@/features/authentication/Auth";

function Login() {
  return (
    <div className="centered-container">
      <h1 className="main-title">A modern Twitter experience</h1>
      <Logo marginBottom="1.5em" hasHoverEffect />
      <Auth />
    </div>
  );
}

export default Login;
