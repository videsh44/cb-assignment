import { Button, DatePicker, Input, message, Select } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { createJob } from "../../actions";

const { TextArea } = Input;
const { Option } = Select;

const AddEvent = ({
  dispatch,
  setCreateNewModalShow,
  setLoadAgain,
  loadAgain,
}) => {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");

  const [dateReceived, setDateReceived] = useState("");
  const [discount, setDiscount] = useState("false");
  const [venue, setVenue] = useState("");
  const [discountNumber, setDiscountNumber] = useState(null);
  const [discountNumberError, setDiscountNumberError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [price, setPrice] = useState(null);

  const onEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onVenueChange = (event) => {
    setVenue(event.target.value);
  };

  const onDateChange = (date, dateString) => {
    // console.log(dateString);
    setDateReceived(dateString);
  };

  const onDiscountNumberChange = (e) => {
    if (e.target.value < 1 || e.target.value > 100) {
      setDiscountNumberError(true);
      setDiscountNumber(null);
    } else {
      setDiscountNumberError(false);
      setDiscountNumber(e.target.value);
    }
  };

  const onPriceChange = (e) => {
    if (e.target.value < 0) {
      setPriceError(true);
      setPrice(null);
    } else {
      setPriceError(false);
      setPrice(e.target.value);
    }
  };

  const createNew = () => {
    if (
      eventName === "" ||
      eventName === " " ||
      eventName === undefined ||
      eventName === null
    ) {
      setEventName(null);
      message.warning("Please Enter Event Name");
      return;
    }
    if (
      description === "" ||
      description === " " ||
      description === undefined ||
      description === null
    ) {
      setDescription(null);
      message.warning("Please Enter description");
      return;
    }

    if (
      venue === "" ||
      venue === " " ||
      venue === undefined ||
      venue === null
    ) {
      setVenue(null);
      message.warning("Please Enter Venue");
      return;
    }

    let tempDiscount;

    if (
      discount === "" ||
      discount === " " ||
      discount === undefined ||
      discount === null
    ) {
      setDiscount(null);
      message.warning("Please Select Discount");
      return;
    }

    if (discount === "true") {
      if (
        discountNumber === "" ||
        discountNumber === " " ||
        discountNumber === undefined ||
        discountNumber === null
      ) {
        setDiscountNumberError(true);
        message.warning("Please Enter Discount");
        return;
      }
    } else {
      tempDiscount = 0;
    }

    if (
      price === "" ||
      price === " " ||
      price === undefined ||
      price === null
    ) {
      setPriceError(true);
      message.warning("Please Enter Price");
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
        eventName,
        description,
        venue,
        discount,
        discount === "true" ? discountNumber : tempDiscount,
        price,
        dateReceived
      )
    );
    message.success("Event Added Succesfully");
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
          Event Name
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="text"
              placeholder="Event Name"
              style={
                eventName === null
                  ? {
                      width: "100%",
                      border: "0.5px solid red",
                    }
                  : {
                      width: "100%",
                    }
              }
              onChange={onEventNameChange}
            />
          </div>
          {eventName === null ? (
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
          Description
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <TextArea
              placeholder="Event Description"
              style={{ width: "100%" }}
              onChange={onDescriptionChange}
              rows={4}
            />
          </div>
          {description === null ? (
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
          Venue
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="text"
              placeholder="Venue"
              style={
                venue === null
                  ? {
                      width: "100%",
                      border: "0.5px solid red",
                    }
                  : {
                      width: "100%",
                    }
              }
              onChange={onVenueChange}
            />
          </div>
          {venue === null ? (
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
          Discount
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Select
              placeholder="Select Discount"
              //  defaultValue="lucy"
              style={{ width: "100%" }}
              onChange={(val) => setDiscount(val)}
            >
              <Option value={"true"}>True</Option>
              <Option value={"false"}>False</Option>
            </Select>
          </div>
          {discount === null ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>

      {discount === "true" ? (
        <div style={{ display: "flex", marginBottom: "25px" }}>
          <div
            style={{
              width: "140px",
              fontWeight: 600,
            }}
          >
            Discount (%)
            <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
          </div>
          <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
            <div>
              <Input
                type="number"
                min={0}
                max={100}
                placeholder="discount"
                onChange={onDiscountNumberChange}
              />
            </div>
            {discountNumberError ? (
              <div style={{ color: "red", marginTop: "5px" }}>
                * Required (cannot be less than 0 or greater than 100)
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Price
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="number"
              min={0}
              placeholder="Price"
              onChange={onPriceChange}
            />
          </div>
          {priceError ? (
            <div style={{ color: "red", marginTop: "5px" }}>
              * Required (cannot be less than 0 )
            </div>
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
          Date
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

      <div style={{ margin: "60px 0px 30px 0px", textAlign: "center" }}>
        <Button type="primary" onClick={() => createNew()}>
          Add New
        </Button>
      </div>
    </div>
  );
};

export default connect()(AddEvent);
