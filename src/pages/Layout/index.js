import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Outlet />
      我是 Layout 组件
    </div>
  );
};

export default Layout;
