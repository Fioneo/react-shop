import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="bg-accent transition-colors duration-200">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
