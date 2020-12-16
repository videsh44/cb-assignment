import { DollarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import Details from "./Details";
import "./event.scss";

const EventCard = (props) => {
  const [selectedDataForDetails, setSelectedDataForDetails] = useState([]);
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  const onLearnMoreClick = (data) => {
    setSelectedDataForDetails(data);
    setDetailsModalShow(true);
  };

  return (
    <>
      <div className="event_container">
        <div
          className="event_bg"
          style={{
            backgroundImage: `url(
              https://images.unsplash.com/photo-1483443487168-a49ed320d532?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=25a13b3cccc5f22a2d4cb32c4171e3c4
            )`,
          }}
        ></div>
        <div className="event_info">
          <div className="event_title">
            <h4> {props.data.eventName}</h4>
          </div>
          <div className="event_desc">
            <p> {props.data.description}</p>
            {/**
            <p>
              <EnvironmentOutlined /> {props.data.venue}
            </p>
            <p style={{ color: "green" }}>
              <DollarOutlined /> rs.{props.data.price} /-
            </p>
             */}
          </div>
          <div className="event_footer">
            <div className="event_date">
              Event on : {props.data.dateReceived}
            </div>
            <div className="event_more">
              {/**
              <span>
                {props.data.discount === "true" ? (
                  <span
                    style={{
                      background: "#22a4ef",
                      color: "#fff",
                      padding: "5px 5px",
                      borderRadius: "50px",
                    }}
                  >
                    {props.data.discountNumber} %
                  </span>
                ) : (
                  <span
                    style={{
                      background: "#22a4ef",
                      color: "#fff",
                      padding: "5px 5px",
                      borderRadius: "50px",
                    }}
                  >
                    0%
                  </span>
                )}
              </span>
               */}
              <a
                className="btn_more"
                onClick={() => onLearnMoreClick(props.data)}
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {detailsModalShow === true ? (
        <Modal
          style={{ width: "100%" }}
          title="Event Details"
          closable={true}
          footer={null}
          visible={detailsModalShow}
          destroyOnClose={true}
          onCancel={() => setDetailsModalShow(false)}
        >
          <Details selectedDataForDetails={selectedDataForDetails} />
        </Modal>
      ) : null}
    </>
  );
};

export default EventCard;
