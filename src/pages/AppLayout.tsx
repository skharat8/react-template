import Header from "@components/Header";
import LoadingIndicator from "@components/LoadingIndicator";
import Navbar from "@components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <LoadingIndicator />}
      <Header />

      <main>
        <Outlet />
      </main>

      <Navbar />
    </div>
  );
}

export default AppLayout;
