import logo from "@images/phoenix-logo-96.png";
import AuthPage from "./pages/AuthPage";
import "./App.css";

function App() {
  // const [user, setUser] = useState<User | null>(null);
  return (
    <>
      <img src={logo} alt="Logo" />
      <AuthPage />;
    </>
  );
}

// type AppProps = {
//   title?: string;
// };

// App.defaultProps = {
//   title: "Sign Up",
// };

export default App;

// type ContextType = { user: User | null };
// Use with: <Outlet context={{ user } satisfies ContextType} />

// export function useUser() {
//   return useOutletContext<ContextType>();
// }
