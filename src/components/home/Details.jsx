import { DollarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Descriptions, Divider } from "antd";
import React from "react";

const Details = (props) => {
  const data = props.selectedDataForDetails;
  return (
    <div>
      <Descriptions title="Event Info">
        <Descriptions.Item label="Name" span={3}>
          {data.eventName}
        </Descriptions.Item>

        <Descriptions.Item label="Description" span={3}>
          {data.description}
        </Descriptions.Item>

        <Descriptions.Item label="Location" span={3}>
          <EnvironmentOutlined /> {data.venue}
        </Descriptions.Item>

        <Descriptions.Item label="Event on" span={3}>
          {data.dateReceived}
        </Descriptions.Item>

        <Descriptions.Item label="price">
          <span style={{ color: "green" }}>
            {" "}
            <DollarOutlined /> rs.{data.price} /-
          </span>
        </Descriptions.Item>
        <Descriptions.Item label="Discount">
          {data.discountNumber} %
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Details;
