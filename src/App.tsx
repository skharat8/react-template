import logo from "@images/app-logo-96x96.png";
import AuthForm from "./pages/AuthPage";
import styles from "./App.module.css";

function App() {
  // const [user, setUser] = useState<User | null>(null);

  return (
    <div className="container">
      <h1>A modern Twitter experience</h1>
      <img className={styles.logo} src={logo} alt="Main App Logo" />
      <AuthForm />;
    </div>
  );
}

export default App;

// type ContextType = { user: User | null };
// Use with: <Outlet context={{ user } satisfies ContextType} />

// export function useUser() {
//   return useOutletContext<ContextType>();
// }
