import logo from "@images/app-logo-96x96.png";
import AuthForm from "./components/Auth/AuthForm";
import "./App.css";

function App({ authType }: AppProps) {
  // const [user, setUser] = useState<User | null>(null);
  return (
    <div className="container">
      <h1>A modern Twitter experience</h1>
      <img className="logo" src={logo} alt="Main App Logo" />
      <AuthForm authType={authType} />;
    </div>
  );
}

type AppProps = {
  authType: string;
};

// App.defaultProps = {
//   title: "Sign Up",
// };

export default App;

// type ContextType = { user: User | null };
// Use with: <Outlet context={{ user } satisfies ContextType} />

// export function useUser() {
//   return useOutletContext<ContextType>();
// }
