import { DollarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Descriptions, Divider } from "antd";
import React from "react";

const Details = (props) => {
  const data = props.selectedDataForDetails;
  return (
    <div>
      <Descriptions title="Student Info">
        <Descriptions.Item label="Name">{data.eventName}</Descriptions.Item>
        <Divider type="vertical" />
        <Descriptions.Item label="Description">
          {data.description}
        </Descriptions.Item>
        <Divider type="vertical" />
        <Descriptions.Item label={<span>Location</span>}>
          <EnvironmentOutlined /> {data.venue}
        </Descriptions.Item>
        <Divider type="vertical" />
        <Descriptions.Item label="price">
          <span style={{ color: "green" }}>
            {" "}
            <DollarOutlined /> rs.{data.price} /-
          </span>
        </Descriptions.Item>
        <Descriptions.Item label="Discount">
          {data.discountNumber} %
        </Descriptions.Item>
        <Descriptions.Item label="Event on">
          {data.dateReceived}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Details;
