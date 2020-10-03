import { Button, DatePicker, Input, message, Select } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { createJob } from "../../actions";

const { TextArea } = Input;
const { Option } = Select;

const AddNewJob = ({
  dispatch,
  setCreateNewModalShow,
  setLoadAgain,
  loadAgain,
}) => {
  const [franchise, setFranchise] = useState("");
  const [address, setAddress] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [lossType, setLossType] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const [dateReceived, setDateReceived] = useState("");

  const onFranchiseChange = (event) => {
    setFranchise(event.target.value);
  };

  const onCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const onLossTypeChange = (event) => {
    setLossType(event.target.value);
  };

  const onAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const onDateChange = (date, dateString) => {
    // console.log(dateString);
    setDateReceived(dateString);
  };

  const createNew = () => {
    if (
      franchise === "" ||
      franchise === " " ||
      franchise === undefined ||
      franchise === null
    ) {
      setFranchise(null);
      message.warning("Please Enter Franchise");
      return;
    }
    if (
      address === "" ||
      address === " " ||
      address === undefined ||
      address === null
    ) {
      setAddress(null);
      message.warning("Please Enter Address");
      return;
    }

    if (
      customerName === "" ||
      customerName === " " ||
      customerName === undefined ||
      customerName === null
    ) {
      setCustomerName(null);
      message.warning("Please Enter customerName");
      return;
    }

    if (
      lossType === "" ||
      lossType === " " ||
      lossType === undefined ||
      lossType === null
    ) {
      setLossType(null);
      message.warning("Please Enter lossType");
      return;
    }

    if (
      jobStatus === "" ||
      jobStatus === " " ||
      jobStatus === undefined ||
      jobStatus === null
    ) {
      setJobStatus(null);
      message.warning("Please Select jobStatus");
      return;
    }

    if (
      dateReceived === "" ||
      dateReceived === " " ||
      dateReceived === undefined ||
      dateReceived === null
    ) {
      setDateReceived(null);
      message.warning("Please Select dateReceived");
      return;
    }

    dispatch(
      createJob(
        franchise,
        address,
        customerName,
        lossType,
        jobStatus,
        dateReceived
      )
    );
    message.success("Job Added Succesfully");
    setCreateNewModalShow(false);
    setLoadAgain(!loadAgain);
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Franchise
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="text"
              placeholder="Franchise"
              style={
                franchise === null
                  ? {
                      width: "100%",
                      border: "0.5px solid red",
                    }
                  : {
                      width: "100%",
                    }
              }
              onChange={onFranchiseChange}
            />
          </div>
          {franchise === null ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Status
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Select
              placeholder="Select Status"
              //  defaultValue="lucy"
              style={{ width: "100%" }}
              onChange={(val) => setJobStatus(val)}
            >
              <Option value="active">Active</Option>
              <Option value="pending">Pending</Option>
              <Option value="expired">Expired</Option>
            </Select>
          </div>
          {jobStatus === null ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Loss Type
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="text"
              placeholder="Loss Type"
              style={
                lossType === null
                  ? {
                      width: "100%",
                      border: "0.5px solid red",
                    }
                  : {
                      width: "100%",
                    }
              }
              onChange={onLossTypeChange}
            />
          </div>
          {lossType === null ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Date Received
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <DatePicker onChange={onDateChange} />
          </div>
          {dateReceived === null ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Customer Name
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="text"
              placeholder="Customer Name"
              style={
                customerName === null
                  ? {
                      width: "100%",
                      border: "0.5px solid red",
                    }
                  : {
                      width: "100%",
                    }
              }
              onChange={onCustomerNameChange}
            />
          </div>
          {customerName === null ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Customer Address
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <TextArea
              placeholder="Customer Address"
              style={{ width: "100%" }}
              onChange={onAddressChange}
              rows={4}
            />
          </div>
          {address === null ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>

      <div style={{ margin: "60px 0px 30px 0px", textAlign: "center" }}>
        <Button type="primary" onClick={() => createNew()}>
          Add New
        </Button>
      </div>
    </div>
  );
};

export default connect()(AddNewJob);
