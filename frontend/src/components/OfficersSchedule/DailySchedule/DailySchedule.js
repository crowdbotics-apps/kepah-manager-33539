import React, { useEffect, useState } from "react";
// import CustomTimeline from "../../Dashboard/CustomTimeline";
import Timeline from "../../../utils/TimelineGraph/index";
import axios from "axios";

import "./style.css";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const DailySchedule = ({ ...props }) => {
  const [groups, setGroups] = useState([]);
  const [items, setSchedule] = useState([]);
  
  const [date, setDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  
  useEffect(() => {
    console.log("-",date)
    let buildingno = localStorage.getItem("buildingno");
    let token = localStorage.getItem("token");

    var config = {
      method: "get",
      url: `https://kepah-24275.botics.co/api/v1/schedule/?residence_building=${buildingno}&start_date=${date}&end_date=${endDate}`,
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        var resultArray = response.data.map((elm, ind) => {
          let obj = elm;
          obj.id = ind + 1;
          obj.group = elm.officer_details.name;
          obj.start_time = new Date(elm.start_time).getTime();
          obj.end_time = new Date(elm.end_time).getTime();
          return obj;
        });
        var get_groups = response.data.map((elm) => {
          let obj = {};
          obj.id = elm.officer_details.name;
          obj.title = elm.officer_details.name;
          return obj;
        });
        const arrObjTwo = [
          ...new Map(get_groups.map((item) => [item["group"], item])).values(),
        ];


        setGroups(arrObjTwo);
        setSchedule(resultArray);
      })
      .catch(() => {
        setGroups([]);
        setSchedule([]);
      });
  }, [
    localStorage.getItem("buildingno") && localStorage.getItem("token"),
    date,
  ]);

  useEffect(() => {
    let startDate = `${new Date(props.dateSelected).getFullYear()}-${new Date(
      props.dateSelected
    ).getMonth() + 1}-${new Date(props.dateSelected).getDate()}`;

    let endDateObj = new Date(
      new Date(props.dateSelected).getTime() + 24 * 60 * 60 * 1000
    );

    let endDate = `${new Date(endDateObj).getFullYear()}-${new Date(
      endDateObj
    ).getMonth() + 1}-${new Date(endDateObj).getDate()}`;

    setDate(startDate);
    setEndDate(endDate);

    console.log(startDate, endDate)
  }, [props.dateSelected]);
  return (
    <div className="daily_schedule_back">
      <div className="daily_schedule_for_div">
        <span className="daily_schedule_for_text">Daily Schedule for</span>
        <span className="date_day_schedule">
          {new Date(props.dateSelected).getDate()}/
          {new Date(props.dateSelected).getMonth() + 1}/
          {new Date(props.dateSelected).getFullYear()} -
          {days[new Date(props.dateSelected).getDay()]}
        </span>
      </div>
      <div className="posts_main_div">
        <div className="posts_white">
          <span>Posts #1</span>
          <img src={require("../../../assets/scroll-down.png").default} />
        </div>
      </div>

      <div className="chart2">
      

        <div className="chart">
          {groups.length > 0 && items.length > 0 && (
            <Timeline
              groups={groups}
              items={items}
              defaultTimeStart={items[0].start_time}
              defaultTimeEnd={items[0].start_time + 100000000}
            />
          )}
        </div>
      </div>

      <div className="empty_slots_div">
        <span className="empty_slots_text">Empty Slots:</span>
        <span className="slots_no_empty">12:00-20:00; 12:00-20:00:</span>
      </div>
    </div>
  );
};

export default DailySchedule;
