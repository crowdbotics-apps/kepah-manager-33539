import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DailySchedule from "./DailySchedule/DailySchedule";
import ListOfOfficersSchedule from "./ListOfOfficersSchedule/ListOfOfficersSchedule";
import OfficersManagementCalendar from "./OfficersManagementCalendar/OfficersManagementCalendar";
import ChooseDate from "./MakeASchedule/MakeASchedule";

import "./style.css";

const Dashboard = ({ ...props }) => {
  const [chooseDate, setChooseDate] = useState(false);
  const [officerId, setOfficerId] = useState(null);
  const [dateSelected, setDateSelected] = useState(new Date());
  const clickDate = (e) => {
    if (e && e !== undefined) {
      setDateSelected(e);
    }
  };

  const closeCalendar = () => {
    setChooseDate(false);
  };

  const openCalendar = (id) => {
    setChooseDate(true);
    setOfficerId(id);
  };
  return (
    <div className="main-officer_schedule">
      <div className="side_nav">
        <Sidebar history={props.history} nav="Officers Schedule" />
      </div>

      {chooseDate ? (
        <div className="go-back_choose-day">
          <div>
            <p onClick={closeCalendar} className="Go_back_officers_schedule">
              Go back to Officers Schedule
            </p>
          </div>
          <div className="choose-day_main_back">
            <ChooseDate officerId={officerId} closeCalendar={closeCalendar} history={props.history} />
          </div>
        </div>
      ) : (
        <div className="all_components_schedule">
          <div className="officer_daily_schedule">
            <div className="officer_management_calendar">
              <OfficersManagementCalendar
                dateSelected={dateSelected}
                setDateSelected={setDateSelected}
                clickDate={clickDate}
              />
            </div>
            <div className="daily_schedule">
              <DailySchedule dateSelected={dateSelected} />
            </div>
          </div>
          <div className="list_of_officers_schedule">
            <ListOfOfficersSchedule
              makeSchedule={openCalendar}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
