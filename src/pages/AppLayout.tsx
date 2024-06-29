import Header from "@components/Header";
import Navbar from "@components/Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Navbar />
    </div>
  );
}

export default AppLayout;
