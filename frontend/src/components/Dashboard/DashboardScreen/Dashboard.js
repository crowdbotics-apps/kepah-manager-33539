import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import DailyIncidentReports from "../DailyIncidentReports/DailyIncidentReports";
import ListOfOfficers from "../ListOfOfficers/ListOfOfficers";
import ManageOfficersSchedule from "../ManageOfficersSchedule/ManageOfficersSchedule";
import QuickRentRoll from "../QuickRentRoll/QuickRentRoll";
import "./style.css";

const Dashboard = ({ ...props }) => {
  return (
    <div className="main-dashboard">
      <div className="side_nav">
        <Sidebar history={props.history} nav="dashboard" />
      </div>


      <div className="all_components">
        <div className="manage_officers_lis_officers_div">
          <div className="manage_officers">
            <div>
              <ManageOfficersSchedule history={props.history} />
            </div>
          </div>
          <div className="list_of_officers">
            <ListOfOfficers history={props.history} />
          </div>
        </div>
        <div className="daily_incident_quick_rent_roll">
          <div className="Daily_incident">
            <DailyIncidentReports history={props.history} />
          </div>
          <div className="quick_rent_roll_padding">
            <QuickRentRoll history={props.history} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
