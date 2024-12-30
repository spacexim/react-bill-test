import { Outlet } from "react-router-dom";
import { Button } from "antd-mobile";

const Layout = () => {
  return (
    <div>
      <Outlet />
      我是 Layout 组件
      {/* 测试全局生效样式 */}
      <Button color="primary">测试全局</Button>
      <div className="purple">
        {/* 测试局部生效样式 */}
        <Button color="primary">测试局部</Button>
      </div>
    </div>
  );
};

export default Layout;
