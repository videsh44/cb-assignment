import React, { useEffect, useState } from "react";
import "./home.css";

import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Modal, DatePicker, Select, Empty, BackTop } from "antd";
import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import AddEvent from "./AddEvent";

const { RangePicker } = DatePicker;

const { Option } = Select;

const EventPage = () => {
  const jobData = useSelector((state) => state.jobData);

  console.log("jobData", jobData);

  const [createNewModalShow, setCreateNewModalShow] = useState(false);
  const [loadAgain, setLoadAgain] = useState(false);
  const [data, setData] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [SearchfilterString, setSearchfilterString] = useState("");

  useEffect(() => {
    setLoading(true);

    //  console.log("tempList", tempList);
    setData(jobData);
    setGlobalData(jobData);
    setLoading(false);

    return () => {
      setData([]);
    };
  }, [loadAgain]);

  const onAddJobClick = () => {
    setCreateNewModalShow(true);
  };

  const SearchValFromTable = (filterString) => {
    setSearchfilterString(filterString);
    if (filterString) {
      const list = globalData.filter(
        (item) =>
          item.eventName.toLowerCase().includes(filterString.toLowerCase()) ||
          item.description.toLowerCase().includes(filterString.toLowerCase()) ||
          item.venue.toLowerCase().includes(filterString.toLowerCase()) ||
          item.price.includes(filterString)
      );
      setData(list);
    } else {
      setData(globalData);
    }
  };

  const onDateFilterChange = (dates, dateStrings) => {
    //console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    //console.log("dateStrings", dateStrings);
    //  console.log("dates", dates);
    if (dates.length > 1) {
      let startDateArray = dateStrings[0].split("-");
      let endDateArray = dateStrings[1].split("-");

      let startDateTimeStamp = new Date(
        startDateArray[2],
        +startDateArray[0],
        startDateArray[1]
      ).getTime();
      let endDateTimeStamp = new Date(
        endDateArray[2],
        +endDateArray[0],
        endDateArray[1]
      ).getTime();

      const list = globalData.filter((item) => {
        let rowDateArray = item.dateReceived.split("-");
        let rowDateTimeStamp = new Date(
          rowDateArray[2],
          +rowDateArray[0],
          rowDateArray[1]
        ).getTime();
        if (
          startDateTimeStamp <= rowDateTimeStamp &&
          rowDateTimeStamp <= endDateTimeStamp
        ) {
          return item;
        }
      });
      setData(list);
    } else {
      setData(globalData);
    }
  };

  const onSelectDiscountFilter = (val) => {
    if (val) {
      if (val === "free") {
        const list = globalData.filter((item) => item.price === "0");
        setData(list);
      } else {
        const list = globalData.filter((item) => item.discount === val);
        setData(list);
      }
    } else {
      setData(globalData);
    }
  };

  return (
    <>
      <div className="event__container">
        {/**..........................SEARCH STARTS..................................... */}
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ marginTop: "20px" }}>
            <RangePicker onChange={onDateFilterChange} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Input
              placeholder="Input Search Text"
              prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              value={SearchfilterString}
              allowClear
              onChange={(e) =>
                SearchValFromTable(e.target.value ? e.target.value : null)
              }
              style={{ width: 300 }}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button size="large" type="primary" onClick={onAddJobClick}>
              <PlusCircleOutlined /> Add Event
            </Button>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "50px",
          }}
        >
          <Select
            onChange={(val) => onSelectDiscountFilter(val)}
            placeholder="select"
            style={{ width: 120 }}
            allowClear
          >
            <Option value="true">Discount</Option>
            <Option value="false">No Discount</Option>
            <Option value="free">Free</Option>
          </Select>
        </div>

        {/**..........................SEARCH ENDS..................................... */}

        <div className="event__card__container">
          {data.length < 1 ? (
            <Empty />
          ) : (
            <div>
              {data.map((evnt) => (
                <div key={evnt.id}>
                  <EventCard data={evnt} />
                </div>
              ))}
            </div>
          )}
        </div>

        <BackTop>
          <div
            style={{
              height: 40,
              width: 40,
              lineHeight: "40px",
              borderRadius: 4,
              backgroundColor: "#1088e9",
              color: "#fff",
              textAlign: "center",
              fontSize: 14,
            }}
          >
            UP
          </div>
        </BackTop>

        {createNewModalShow === true ? (
          <Modal
            style={{ width: "100%" }}
            title="Add New Job"
            closable={true}
            footer={null}
            onCancel={() => setCreateNewModalShow(false)}
            visible={createNewModalShow}
            destroyOnClose={true}
          >
            <AddEvent
              setLoadAgain={setLoadAgain}
              loadAgain={loadAgain}
              setCreateNewModalShow={setCreateNewModalShow}
            />
          </Modal>
        ) : null}
      </div>
    </>
  );
};

export default EventPage;
