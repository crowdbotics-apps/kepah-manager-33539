import React, { useEffect, useState } from "react";
import Timeline from "../../../utils/TimelineGraph/index";
import axios from "axios";
import "./style.css";

const ManageOfficersSchedule = ({ ...props }) => {
  let _date = new Date();
  let _endDate = new Date(_date.getTime() + 24 * 60 * 60 * 1000 * 2);

  let dateMDY = `${_date.getFullYear()}-${_date.getMonth() +
    1}-${_date.getDate() + 1}`;

  let endDateMDY = `${_endDate.getFullYear()}-${_endDate.getMonth() +
    1}-${_endDate.getDate()}`;

  const [actualDate, setActualDate] = useState(_date);

  const [date, setDate] = useState(dateMDY);
  const [endDate, setEndDate] = useState(endDateMDY);
  const [groups, setGroups] = useState([]);
  const [schedule, setSchedule] = useState([]);

  const changeDate = () => {
    let currentDate = new Date(actualDate.getTime() + 24 * 60 * 60 * 1000);
    let dateMDY = `${currentDate.getFullYear()}-${currentDate.getMonth() +
      1}-${currentDate.getDate() + 1}`;

    let endDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000 * 2);

    let endDateMDY = `${endDate.getFullYear()}-${endDate.getMonth() +
      1}-${endDate.getDate()}`;


    setDate(dateMDY);
    setEndDate(endDateMDY);
    setActualDate(currentDate);
  };

  const previous = () => {

    setEndDate(date)

    let currentDate = new Date(actualDate.getTime() - 24 * 60 * 60 * 1000);
    let dateMDY = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() +
      1}`;


    setDate(dateMDY);
    setActualDate(currentDate);
  };

  useEffect(() => {
    let buildingno = localStorage.getItem("buildingno");
    let token = localStorage.getItem("token");

    var config = {
      method: "get",
      url: `https://kepah-24275.botics.co/api/v1/schedule/?residence_building=${buildingno}&user_id=14&start_date=${date}&end_date=${endDate}`,
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

  return (
    <div className="manage_officer_schedule_main">
      <div className="manage_officer_schedule_input_btn">
        <div className="manage_officer_schedule_text_div">
          <span className="manage_officer_schedule_text">
            Manage Officers Schedule
          </span>
        </div>
        <div className="manage_officer_schedule_input_div">
          <div
            onClick={() => {
              props.history.push("officerschedule");
            }}
          >
            <span className="manage_officers_schedule_text">
              Officers Schedule
            </span>
          </div>
        </div>
      </div>

      <div className="calendar">
        <img
          onClick={() => previous()}
          src={require("../../../assets/previous.png").default}
        />
        <span>{date}</span>
        <img
          onClick={() => changeDate()}
          src={require("../../../assets/next.png").default}
        />
      </div>

      <div className="chart">
        {groups.length > 0 && schedule.length > 0 && (
          <Timeline
            groups={groups}
            items={schedule}
            defaultTimeStart={schedule[0].start_time}
            defaultTimeEnd={schedule[0].start_time + 100000000}
          />
        )}
      </div>
    </div>
  );
};

export default ManageOfficersSchedule;



// import React, { useEffect, useState } from "react";
// // import { Chart } from "react-google-charts";
// import "./style.css";
// import Timeline from "../../../utils/TimelineGraph/index";
// import moment from "moment";
// import axios from "axios";

// const columns = [
//   { type: "string", id: "President" },
//   { type: "datetime", id: "Start" },
//   { type: "datetime", id: "End" },
// ];

// const rows = [
//   ["Washington", new Date(0, 0, 1), new Date(0, 0, 10)],
//   // ["Washington", new Date(1700, 3, 30), new Date(1697, 2, 4)],
//   ["Adams", new Date(0, 0, 1), new Date(0, 0, 10)],
//   ["Jeff", new Date(0, 0, 11), new Date(0, 0, 20)],
//   ["Jason", new Date(0, 0, 31), new Date(0, 0, 40)],
//   ["Henry", new Date(0, 0, 41), new Date(0, 0, 50)],
//   ["Jefferson", new Date(0, 0, 51), new Date(0, 0, 60)],
// ];
// const data = [columns, ...rows];

// const groups = [
//   { id: 1, title: "group 1" },
//   { id: 2, title: "group 2" },
//   { id: 3, title: "group 3" },
//   { id: 4, title: "group 4" },
//   { id: 5, title: "group 5" },
//   { id: 6, title: "group 6" },
//   { id: 7, title: "group 7" },
//   { id: 8, title: "group 8" },
//   { id: 9, title: "group 9" },
// ];

// const items = [
//   {
//     id: 1,
//     group: 1,
//     title: "item 1",
//     start_time: moment(),
//     end_time: moment().add(1, "hour"),
//   },
//   {
//     id: 2,
//     group: 2,
//     title: "item 2",
//     start_time: moment().add(-11.2, "hour"),
//     end_time: moment().add(-8.5, "hour"),
//   },
//   {
//     id: 3,
//     group: 3,
//     title: "item 3",
//     start_time: moment().add(2, "hour"),
//     end_time: moment().add(3, "hour"),
//   },
//   {
//     id: 4,
//     group: 4,
//     title: "item 2",
//     start_time: moment().add(-10.5, "hour"),
//     end_time: moment().add(-5.5, "hour"),
//   },
//   {
//     id: 5,
//     group: 5,
//     title: "item 2",
//     start_time: moment().add(-0.5, "hour"),
//     end_time: moment().add(0.5, "hour"),
//   },
//   {
//     id: 6,
//     group: 6,
//     title: "item 2",
//     start_time: moment().add(-6.5, "hour"),
//     end_time: moment().add(0, "hour"),
//   },
//   {
//     id: 7,
//     group: 7,
//     title: "item 2",
//     start_time: moment().add(-0.5, "hour"),
//     end_time: moment().add(0.5, "hour"),
//   },
// ];

// const ManageOfficersSchedule = ({ ...props }) => {
//   let _date = new Date();
//   let dateMDY = `${_date.getMonth() + 1}-${_date.getDate() +
//     1}-${_date.getFullYear()}`;
//   const [actualDate, setActualDate] = useState(_date);

//   const [date, setDate] = useState(dateMDY);
//   const [schedule, setSchedule] = useState([]);
//   const [isTrue, setIsTrue] = useState(false);


//   const changeDate = () => {
//     // let dateMDY = `${_date.getMonth() + 1}-${
//     //   _date.getDate() + 1
//     // }-${_date.getFullYear()}`;
//     // alert(date);

//     let currentDate = new Date(actualDate.getTime() + 24 * 60 * 60 * 1000);

//     let dateMDY = `${currentDate.getMonth() + 1}-${currentDate.getDate() +
//       1}-${currentDate.getFullYear()}`;

//     setDate(dateMDY);
//     setActualDate(currentDate);
//   };

//   const previous = () => {
//     // let dateMDY = `${_date.getMonth() + 1}-${
//     //   _date.getDate() + 1
//     // }-${_date.getFullYear()}`;
//     // alert(date);

//     let currentDate = new Date(actualDate.getTime() - 24 * 60 * 60 * 1000);

//     let dateMDY = `${currentDate.getMonth() + 1}-${currentDate.getDate() +
//       1}-${currentDate.getFullYear()}`;

//     setDate(dateMDY);
//     setActualDate(currentDate);
//   };

//   useEffect(() => {


//   let buildingno = localStorage.getItem("buildingno")
//   let token = localStorage.getItem("token")


//     var config = {
//       method: "get",
//       url:
//         `https://kepah-24275.botics.co/api/v1/schedule/?residence_building=${buildingno}&user_id=1`,
//       headers: {
//         Authorization: `token ${token}`,
//         "Content-Type": "application/json",
//       },
//     };

//     axios(config)
//       .then(function(response) {
//         console.log(response.data);
//         // setSchedule(response.data)
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }, [      
//     localStorage.getItem("buildingno") &&
//   localStorage.getItem("token")
// ]);

//   return (
//     <div className="manage_officer_schedule_main">
//       <div className="manage_officer_schedule_input_btn">
//         <div className="manage_officer_schedule_text_div">
//           <span className="manage_officer_schedule_text">
//             Manage Officers Schedule
//           </span>
//         </div>
//         <div className="manage_officer_schedule_input_div">
//           <div
//             onClick={() => {
//               props.history.push("officerschedule");
//             }}
//           >
//             <span className="manage_officers_schedule_text">
//               Officers Schedule
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="calendar">
//         <img
//           onClick={() => previous()}
//           src={require("../../../assets/previous.png").default}
//         />
//         <span>{date}</span>
//         <img
//           onClick={() => changeDate()}
//           src={require("../../../assets/next.png").default}
//         />
//       </div>

//       <div className="chart">
//         {/* {schedule.length > 0&& */}
//         <Timeline
//           groups={groups}
//           items={items}
//           // items={schedule}
//           defaultTimeStart={moment().add(-12, "hour")}
//           defaultTimeEnd={moment().add(12, "hour")}
//         />
//         {/* } */}
//       </div>
//     </div>
//   );
// };

// export default ManageOfficersSchedule;
