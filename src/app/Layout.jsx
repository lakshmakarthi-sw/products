import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useApp } from "./AppProvider";
import { lazy, Suspense } from "react";
import MessagePage from "../components/Message";

const SideBar = lazy(() => import("../components/SideBar"))

function Layout() {
  const { isToggled } = useApp();

  return (
    <div className="layout">
      <Header title="Products" />
      {isToggled && <Suspense fallback={<MessagePage content="Loading" />}>
        <SideBar />
      </Suspense>}
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;