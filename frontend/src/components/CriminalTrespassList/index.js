import React from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import CriminalTrespassListPage from "./CriminalTrespassListPage/CriminalTrespassListPage";

const CriminalTrespassList = ({ ...props }) => {
  console.log(props);
  return (
    <div className="incident_back">
      <div className="side_nav">
        <Sidebar history={props.history} nav="Criminal" />
      </div>
      <div className="incident_action_main_div">
        <div className="incident_action_main_page">
          <CriminalTrespassListPage />
        </div>
      </div>
    </div>
  );
};

export default CriminalTrespassList;
