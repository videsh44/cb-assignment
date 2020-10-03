import { GooglePlusOutlined, LinkedinOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  let salesData = [
    {
      text: "Work Order",
      value: 18,
    },
    {
      text: "Loog Book",
      value: 4,
    },
  ];

  let accountingData = [
    {
      text: "Billed",
      value: "$22290",
    },
    {
      text: "Lorem Ipsum",
      value: "$22290",
    },
    {
      text: "Dolar Amet",
      value: "$22290",
    },
    {
      text: "Dolar Amet",
      value: "$22290",
    },
  ];

  let collectionData = [
    {
      text: "Receivable",
      value: "$2345669",
    },
    {
      text: "Sales Calls",
      value: 18,
    },
    {
      text: "Requests",
      value: 13,
    },
  ];

  let operationData = [
    {
      text: "Work Order",
      value: 18,
    },
    {
      text: "Loog Book",
      value: 4,
    },
    {
      text: "Work Order",
      value: 18,
    },
    {
      text: "Loog Book",
      value: 4,
    },
  ];

  return (
    <div
      style={{
        background: "#163152",
        color: "#fff",
        paddingTop: "20px",
        paddingBottom: "30px",
      }}
    >
      <div className="card__container">
        <div className="card__box">
          <div className="card__heading">Sales</div>
          <div style={{ textAlign: "right", padding: "10px 40px" }}>
            {salesData.map((sale, i) => (
              <div key={i}>
                <div>{sale.text}</div>
                <div style={{ fontSize: "20px", fontWeight: 700 }}>
                  {sale.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card__box">
          <div className="card__heading">Accounting</div>
          <div>
            {accountingData.map((acc, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div>{acc.value} </div>
                <div>{acc.text} </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card__box">
          <div className="card__heading">Marketing</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div>
              <span style={{ fontSize: "25px", fontWeight: 900 }}>6</span>
              <span>Email Companies</span>
            </div>
            <div>
              <span style={{ fontSize: "25px", fontWeight: 900 }}>56</span>
              <span>Leads</span>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>Website Traffic</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div style={{ width: "45%" }}>
              <span>
                <GooglePlusOutlined style={{ fontSize: "40px" }} />
              </span>
              <span>Top Reffering Sites</span>
            </div>
            <div style={{ width: "45%" }}>
              <span>
                <LinkedinOutlined style={{ fontSize: "40px" }} />
              </span>
              <span>Top Reffering Searches</span>
            </div>
          </div>
        </div>

        <div className="card__box">
          <div className="card__heading">Collections</div>
          <div style={{ textAlign: "left", padding: "10px 40px" }}>
            {collectionData.map((coll, i) => (
              <div key={i}>
                <div>{coll.text}</div>
                <div style={{ fontSize: "20px", fontWeight: 700 }}>
                  {coll.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card__box__large">
          <div className="card__heading">Operations</div>
          <div style={{ textAlign: "center", padding: "10px 40px" }}>
            {operationData.map((op, i) => (
              <div key={i}>
                <div>{op.text}</div>
                <div style={{ fontSize: "20px", fontWeight: 700 }}>
                  {op.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
