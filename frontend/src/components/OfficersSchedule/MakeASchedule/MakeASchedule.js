import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const MakeASchedule = ({ officerId }) => {
  const [value, setChange] = useState("");
  const [endingDate, setEndingValue] = useState("");
  const [chooseDate, setChooseDate] = useState(true);
  const [chooseTime, setChooseTime] = useState(false);
  const [choosePost, setChoosePost] = useState(false);
  const [increment, setIncrement] = useState(0);
  const [to_hrs, setTo_hrs] = useState(0);
  const [button, setButton] = useState("");
  const [incrementTo, setIncrementTo] = useState(0);
  const [to_hrsTo, setTo_hrsTo] = useState(0);
  const [buttonTo, setButtonTo] = useState("");

  const [chooseEndDate, setChooseEndDate] = useState(false);

  const clickChoose = (e) => {
    setChooseEndDate(true);
    setChooseTime(false);
    setChoosePost(false);
    setChooseDate(false);
    setChange(e);
    // setEndingValue(e);
  };

  const openTime = (e) => {
    setChooseTime(true);
    setChooseEndDate(false);
    setChoosePost(false);
    setChooseDate(false);
    setEndingValue(e);
    // setChange(e);
  };

  const selectNew = (e) => {
    setChooseEndDate(true);
    setChooseTime(false);
    setChoosePost(false);
    setChooseDate(false);
    setEndingValue(e);
    setChange(e);
  };

  const openPost = () => {
    setChooseTime(false);
    setChooseDate(false);

    setChoosePost(true);
  };
  const fromIncreament = () => {
    setButton("inc_btn");
    // setIncrement(increment + 1);

    if (increment < 60) {
      setIncrement(increment + 1);
    }
  };
  const fromDecrement = () => {
    setButton("dec_btn");

    if (increment > 0) {
      setTimeout(() => setIncrement(increment - 1), 10);
    }
    if (increment === 0 && to_hrs > 0) {
      setTimeout(() => setTo_hrs(to_hrs - 1), 10);
    }
  };

  const ToIncreament = () => {
    setButtonTo("inc_btnTo");
    if (incrementTo < 60) {
      setIncrementTo(incrementTo + 1);
    }
  };
  const ToDecrement = () => {
    setButtonTo("dec_btn");

    if (incrementTo > 0) {
      setTimeout(() => setIncrementTo(incrementTo - 1), 10);
    }
    if (incrementTo === 0 && to_hrsTo > 0) {
      setTimeout(() => setTo_hrsTo(to_hrsTo - 1), 10);
    }
  };

  useEffect(() => {
    console.log(button, increment);
    if (button === "inc_btn" && Number(increment) + 1 > 59) {
      setIncrement(0);
      setTo_hrs(Number(to_hrs) + 1);
    }

    if (button === "dec_btn" && Number(increment) === 0 && Number(to_hrs) > 0) {
      setTo_hrs(Number(to_hrs) - 1);

      setIncrement(59);
    }
  }, [increment]);

  useEffect(() => {
    if (buttonTo === "inc_btnTo" && Number(incrementTo) + 1 > 60) {
      setIncrementTo(0);
      setTo_hrsTo(Number(to_hrsTo) + 1);
    }

    if (
      buttonTo === "dec_btn" &&
      Number(incrementTo) === 0 &&
      Number(to_hrsTo) > 0
    ) {
      setTo_hrsTo(Number(to_hrsTo) - 1);
      setIncrementTo(59);
    }
  }, [incrementTo]);

  const addToSchedule = () => {
    let buildingno = localStorage.getItem("buildingno");

    var data = JSON.stringify({
      start_time: `${new Date(value).getFullYear()}-${new Date(
        value
      ).getMonth() + 1}-${new Date(
        value
      ).getDate()}T${to_hrs}:${increment}:00Z`,

      end_time: `${new Date(endingDate).getFullYear()}-${new Date(
        endingDate
      ).getMonth() + 1}-${new Date(
        endingDate
      ).getDate()}T${to_hrsTo}:${incrementTo}:00Z`,

      user: officerId,
      residence_building: buildingno,
    });

    var config = {
      method: "post",
      url: "https://kepah-24275.botics.co/api/v1/schedule/",
      headers: {
        Authorization: `token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function(response) {
        NotificationManager.success(
          "Schedule successfully added!",
          "Confirmation"
        );

        // console.log(JSON.stringify(response.data));
      })
      .catch(function(error) {
        NotificationManager.error("Failed to add", "Error occured");

        console.log(error);
      });
  };

  return (
    <div>
      {chooseDate ? (
        <div className="choose-day_back">
          <div className="officers_management_div">
            <span className="officers_management_text">
              Choose Starting Day
            </span>
          </div>
          <div className="calendar_display">
            <Calendar
              prev2Label={null}
              next2Label={null}
              onChange={(e) => setChange(e.target.value)}
              value={value}
              onClickDay={clickChoose}
            />
          </div>
          <div className="slots_div">
            <div>
              <img src={require("../../../assets/green.png").default} />
              <span className="all_slots_officers_management">
                All slots are full
              </span>
            </div>

            <div>
              <img src={require("../../../assets/yellow.png").default} />
              <span className="all_slots_officers_management">
                All slots are full
              </span>
            </div>

            <div>
              <img src={require("../../../assets/red.png").default} />
              <span className="all_slots_officers_management">
                All slots are full
              </span>
            </div>
          </div>
        </div>
      ) : null}
      {chooseEndDate ? (
        <div className="choose-day_back">
          <div className="officers_management_div">
            <span className="officers_management_text">Choose Ending Day</span>
          </div>
          <div className="calendar_display">
            <Calendar
              prev2Label={null}
              next2Label={null}
              onChange={(e) => setEndingValue(e.target.value)}
              value={endingDate}
              onClickDay={openTime}
            />
          </div>
          <div className="slots_div">
            <div>
              <img src={require("../../../assets/green.png").default} />
              <span className="all_slots_officers_management">
                All slots are full
              </span>
            </div>

            <div>
              <img src={require("../../../assets/yellow.png").default} />
              <span className="all_slots_officers_management">
                All slots are full
              </span>
            </div>

            <div>
              <img src={require("../../../assets/red.png").default} />
              <span className="all_slots_officers_management">
                All slots are full
              </span>
            </div>
          </div>
        </div>
      ) : null}
      {chooseTime ? (
        <div>
          <div className="choose-day_back">
            <div className="choose_time_div" onClick={openPost}>
              <div>
                <span className="list_of_officers_text">Choose Day</span>
              </div>
              <div>
                <span
                  className="manage_officers_text"
                  onClick={() => selectNew()}
                >
                  Select New
                </span>
              </div>
            </div>

            <div className="date_span">
              <p>Starting Date: </p>
              <p>
                {new Date(value).getDate()}/{new Date(value).getMonth() + 1}/
                {new Date(value).getFullYear()}
              </p>
            </div>
            <div className="date_span">
              <p>Ending Date: </p>

              <p>
                {new Date(endingDate).getDate()}/
                {new Date(endingDate).getMonth() + 1}/
                {new Date(endingDate).getFullYear()}
                {console.log("ending", endingDate)}
              </p>
            </div>
          </div>
          <div className="choose-time_back">
            <div className="choose_time_div">
              <span className="list_of_officers_text">Choose Time</span>
            </div>
            <div>
              <div className="time_selector">
                <div className="from-div-timer">
                  <div className="timer_input-button">
                    <div className="time-numbers">
                      {/* <input onChange={changeTime} value={startingTime} /> */}

                      {/* {to_hrs < 10 ? `0${to_hrs}` : to_hrs} */}
                      {/* <input
                        onChange={handleTime()}
                        className="input-time"
                        value={to_hrs < 10 ? `0${to_hrs}` : to_hrs}
                      />
                      <span>:</span>
                      <input
                        onChange={(e) => setIncrement(e.target.value)}
                        className="input-time"
                        value={increment < 10 ? `0${increment}` : increment}
                      /> */}

                      <input
                        onChange={(e) =>
                          e.target.value < 24 ? setTo_hrs(e.target.value) : {}
                        }
                        className="input-time"
                        value={to_hrs}
                      />
                      <span>:</span>
                      <input
                        onChange={(e) => {
                          if (e.target.value < 60) {
                            setButton("inc_btn");
                            setIncrement(Number(e.target.value));
                          }
                        }}
                        className="input-time"
                        value={increment}
                      />
                    </div>
                    <div className="time-arrow">
                      <div
                        className="arrow-background"
                        onClick={fromIncreament}
                      >
                        <img
                          src={require("../../../assets/up-arrow.png").default}
                        />
                      </div>
                      <div className="arrow-background" onClick={fromDecrement}>
                        <img
                          src={
                            require("../../../assets/down-arrow.png").default
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="from-div-timer">
                  <div className="timer_input-button">
                    <div className="time-numbers">
                      {/* {to_hrsTo < 10 ? `0${to_hrsTo}` : to_hrsTo} */}

                      <input
                        onChange={(e) =>
                          e.target.value < 24 ? setTo_hrsTo(e.target.value) : {}
                        }
                        className="input-time"
                        value={to_hrsTo}
                      />
                      <span>:</span>
                      <input
                        onChange={(e) => {
                          if (e.target.value < 60) {
                            setButtonTo("inc_btnTo");
                            setIncrementTo(Number(e.target.value));
                          }
                        }}
                        className="input-time"
                        value={incrementTo}
                      />
                    </div>
                    <div className="time-arrow">
                      <div className="arrow-background" onClick={ToIncreament}>
                        <img
                          src={require("../../../assets/up-arrow.png").default}
                        />
                      </div>
                      <div className="arrow-background" onClick={ToDecrement}>
                        <img
                          src={
                            require("../../../assets/down-arrow.png").default
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {incrementTo !== 0 && increment !== 0 ? (
            <div>
              <div className="choose-time_back">
                <div className="choose_time_div">
                  <span className="list_of_officers_text">Choose Post</span>
                </div>
                <div className="choose_post_type">
                  <span className="type_text_post">Type:</span>
                  <div className="posts_white">
                    <span>Posts #1</span>
                    <img
                      src={require("../../../assets/scroll-down.png").default}
                    />
                  </div>
                </div>
              </div>

              <Button
                // onClick={props.closeCalendar}
                onClick={addToSchedule}
                className="save_btn"
                variant="primary"
                type="submit"
              >
                ADD TO SCHEDULE
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}
      <NotificationContainer />
    </div>
  );
};

export default MakeASchedule;
