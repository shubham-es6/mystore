import { Outlet } from "react-router";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-200">
      <Header />

      <div className="h-[57px] lg:h-[97px]"></div>

      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
