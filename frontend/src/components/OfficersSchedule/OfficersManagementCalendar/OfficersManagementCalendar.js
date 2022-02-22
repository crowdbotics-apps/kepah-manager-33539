import React, { useState } from "react";
import "./style.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const OfficersManagementCalendar = ({...props}) => {
  // const [value, onChange] = useState(new Date());

  return (
    <div className="officer_management_back">
      <div className="officers_management_div">
        <span className="officers_management_text">
          Officers Management - Calendar
        </span>
      </div>
      <div className="calendar_display">
        <Calendar
          prev2Label={null}
          next2Label={null}
          onChange={props.setDateSelected}
          value={props.dateSelected}
          onClickDay={props.clickDate()}
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
  );
};

export default OfficersManagementCalendar;
