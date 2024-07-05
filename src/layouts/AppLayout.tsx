import { Outlet, useNavigation } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import Header from "./Header";
import Navbar from "./Navbar";

function AppLayout() {
  // React Router Loader state is app wide, not per component. So, handle it here.
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <BeatLoader color="#b63b63" />}
      <Header />

      <main>
        <Outlet />
      </main>

      <Navbar />
    </div>
  );
}

export default AppLayout;
