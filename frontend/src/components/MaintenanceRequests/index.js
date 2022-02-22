import React from "react";
import MaintenanceProfile from "./MaintenanceProfile/MaintenanceProfile";
import Request from "./Request/Request";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";

const index = ({ ...props }) => {
  return (
    <div className="incident_back">
      <div className="side_nav">
        <Sidebar history={props.history} nav="Maintenance Request" />
      </div>
      <div className="maintenance_main_div">
       <div className="maintenance_profile_main_page">
       <MaintenanceProfile />
       </div>
        <div className="request_page_main_div">
        <Request />
        </div>
      </div>
    </div>
  );
};

export default index;
