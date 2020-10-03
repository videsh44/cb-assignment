import {
  ClockCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  ShoppingOutlined,
  StarOutlined,
} from "@ant-design/icons";
import React from "react";

const LogbookStats = () => {
  let StatData = [
    {
      icon: <ClockCircleOutlined className="stat__icon" />,
      value: "1489",
      text: "Pending Jobs",
    },
    {
      icon: <StarOutlined className="stat__icon" />,
      value: "1489",
      text: "Active Jobs",
    },
    {
      icon: <ShoppingOutlined className="stat__icon" />,
      value: "1489",
      text: "Invoiced Jobs",
    },
    {
      icon: <CloseOutlined className="stat__icon" />,
      value: "1489",
      text: "Dead Jobs",
    },
    {
      icon: <CloseCircleOutlined className="stat__icon" />,
      value: "1489",
      text: "Closed Jobs",
    },
  ];

  return (
    <div className="stats__box">
      {StatData.map((stat, i) => (
        <div key={i}>
          <span>{stat.icon}</span>
          <span style={{ fontSize: "24px", fontWeight: 900, margin: "10px" }}>
            {stat.value}
          </span>
          <span>{stat.text}</span>
        </div>
      ))}
    </div>
  );
};

export default LogbookStats;
