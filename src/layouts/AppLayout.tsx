import { Outlet, useNavigation } from "react-router-dom";

import LoadingIndicator from "@/components/LoadingIndicator";
import Header from "./Header";
import Navbar from "./Navbar";

function AppLayout() {
  // TODO: If user is not logged in, restrict access to all routes within this app layout.

  // React Router Loader state is app wide, not per component. So, handle it here.
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
