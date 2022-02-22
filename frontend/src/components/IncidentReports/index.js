import React from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import IncidentReport from "./IncidentReportsPage/IncidentReport";

const Caseload = ({ ...props }) => {
  console.log(props);
  return (
    <div className="incident_back">
      <div className="side_nav">
        <Sidebar history={props.history} nav="Incident Reports" />
      </div>
      <div className="incident_action_main_div">
        <div className="incident_action_main_page">
          <IncidentReport />
        </div>
      </div>
    </div>
  );
};

export default Caseload;
