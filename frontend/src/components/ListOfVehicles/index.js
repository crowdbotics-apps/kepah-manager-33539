import React from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import ListOfVehiclesPage from "./ListOfVehiclesPage/ListOfVehiclesPage";

const CriminalTrespassList = ({ ...props }) => {
  console.log(props);
  return (
    <div className="incident_back">
      <div className="side_nav">
        <Sidebar history={props.history} nav="List Of Vehicles" />
      </div>
      <div className="incident_action_main_div">
        <div className="incident_action_main_page">
          <ListOfVehiclesPage />
        </div>
      </div>
    </div>
  );
};

export default CriminalTrespassList;
