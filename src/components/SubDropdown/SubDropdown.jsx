import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";

export const items = [
  {
    label: "1st menu",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const SubDropdown = ({ title, item }) => {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  return (
    <div>
      <Dropdown
        arrow={true}
        menu={{
          items,
          onClick,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {title}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default SubDropdown;
