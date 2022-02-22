import React from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import SexOffendersPage from "./SexOffendersPage/SexOffendersPage";

const SexOffenders = ({ ...props }) => {
  console.log(props);
  return (
    <div className="incident_back">
      <div className="side_nav">
        <Sidebar history={props.history} nav="Sex Offender" />
      </div>
      <div className="incident_action_main_div">
        <div className="incident_action_main_page">
          <SexOffendersPage />
        </div>
      </div>
    </div>
  );
};

export default SexOffenders;
