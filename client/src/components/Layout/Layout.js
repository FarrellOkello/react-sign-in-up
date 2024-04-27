import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";

const Layout = () => {
  return (
    <main className="App">
      <Header />
      <Menu/>
      <Outlet />
    </main>
  );
};

export default Layout;
