import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
  PrinterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Divider, Input, Modal, Popconfirm, Switch, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddNewJob from "./AddNewJob";
import LogbookStats from "./LogbookStats";
import "./operations.css";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const Logbook = () => {
  const jobData = useSelector((state) => state.jobData);

  // console.log("jobData", jobData);

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

  const columns = [
    {
      title: "Franchise",
      dataIndex: "franchise",
      key: "franchise",
      width: 120,
      minWidth: 120,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 200,
      minWidth: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      width: 200,
      minWidth: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },
    {
      title: "Loss Type",
      dataIndex: "lossType",
      key: "lossType",
      width: 200,
      minWidth: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },
    {
      title: "Job Status",
      dataIndex: "jobStatus",
      key: "jobStatus",
      width: 200,
      minWidth: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },
    {
      title: "Date Received",
      dataIndex: "dateReceived",
      key: "dateReceived",
      width: 200,
      minWidth: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 105,
      minWidth: 105,
      render: (record) => (
        <span style={{ minWidth: "105px" }}>
          <span>
            <EditOutlined
              // onClick={() => onEditClick(record)}
              style={{ cursor: "pointer", color: "#22a4ef", fontSize: "20px" }}
            />
          </span>
          <Divider type="vertical" />
          <span>
            <Popconfirm
              title="Are you sure delete this?"
              //  onConfirm={() => onDeleteMember(record)}
            >
              <span
                // onClick={() => onDeleteMember(record)}
                style={{ color: "red", cursor: "pointer" }}
              >
                <DeleteOutlined style={{ fontSize: "20px" }} />
              </span>
            </Popconfirm>
          </span>
          <span>
            <CopyOutlined style={{ fontSize: "20px" }} />
          </span>
          <Divider type="vertical" />
          <span>
            <PrinterOutlined style={{ fontSize: "20px" }} />
          </span>
        </span>
      ),
    },
  ];

  const onSelectChange = (RowKeys) => {
    setSelectedRowKeys(RowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const SearchValFromTable = (filterString) => {
    setSearchfilterString(filterString);
    if (filterString) {
      const list = globalData.filter(
        (item) =>
          item.franchise.toLowerCase().includes(filterString.toLowerCase()) ||
          item.customerName
            .toLowerCase()
            .includes(filterString.toLowerCase()) ||
          item.jobStatus.toLowerCase().includes(filterString.toLowerCase()) ||
          item.address.toLowerCase().includes(filterString.toLowerCase()) ||
          item.lossType.toLowerCase().includes(filterString.toLowerCase())
      );
      setData(list);
    } else {
      setData(globalData);
    }
  };

  const onDateFilterChange = (dates, dateStrings) => {
    //console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    //console.log("dateStrings", dateStrings);
    console.log("dates", dates);
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

  return (
    <div style={{ padding: 24 }}>
      {/**........LOGBOOK HEADER STARTS */}
      <div className="log__header">
        <div className="log__header__left">LOGBOOK OF JOBS</div>
        <div className="log__header__right">
          <span style={{ fontWeight: 600 }}>
            Show Jobs Added By:
            <Switch
              style={{ marginLeft: "10px" }}
              checkedChildren="new users"
              unCheckedChildren="All Users"
            />
          </span>
        </div>
      </div>
      {/**........LOGBOOK HEADER ENDS */}

      {/**...........STATS STARTS............. */}
      <div style={{ marginTop: "40px" }}>
        <LogbookStats />
      </div>

      <Divider />

      {/**...........STATS ENDS............. */}

      {/**..........................SEARCH STARTS..................................... */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div style={{ color: "#3C4078", fontSize: "18px", fontWeight: 500 }}>
          Total : {data.length} Records
        </div>
        <div style={{ marginBottom: "10px" }}>
          <RangePicker onChange={onDateFilterChange} />
        </div>
        <div>
          <Input
            placeholder="Search using Franchise Name"
            prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            value={SearchfilterString}
            allowClear
            onChange={(e) =>
              SearchValFromTable(e.target.value ? e.target.value : null)
            }
            style={{ width: 350 }}
          />
        </div>
        <div style={{}}>
          <Button size="large" type="primary" onClick={onAddJobClick}>
            <PlusCircleOutlined /> Add Job
          </Button>
        </div>
      </div>

      {/**..........................SEARCH ENDS..................................... */}
      <Divider />

      {/**........................TABLE STARTS............................. */}
      <div style={{ marginTop: "30px" }}>
        <Table
          className="theadDark"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          loading={loading}
          rowKey={(k, i) => i}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 1300 }}
        />
      </div>

      {/**........................TABLE EMDS............................. */}

      {createNewModalShow === true ? (
        <Modal
          style={{ minWidth: "600px" }}
          title="Add New Job"
          closable={true}
          footer={null}
          onCancel={() => setCreateNewModalShow(false)}
          visible={createNewModalShow}
          destroyOnClose={true}
        >
          <AddNewJob
            setLoadAgain={setLoadAgain}
            loadAgain={loadAgain}
            setCreateNewModalShow={setCreateNewModalShow}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default Logbook;
