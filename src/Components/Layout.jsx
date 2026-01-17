import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
function Layout() {
  return (
    <div className="app-container flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="bg-accent transition-colors duration-200 flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
