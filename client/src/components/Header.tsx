import { HomeTwoTone, InfoCircleOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState("h");
  const onClick = (event) => {
    console.log("click ", event);
    setCurrent(event.key);
  };
  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="h" icon={<HomeTwoTone />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="a" icon={<InfoCircleOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  );
};
export default Header;
