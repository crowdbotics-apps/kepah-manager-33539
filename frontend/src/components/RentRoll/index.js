import React from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import RentRollPage from "./RentRollPage/RentRollPage";

const RentRoll = ({ ...props }) => {
  console.log(props);
  return (
    <div
      // className="incident_back"
      className={props.popup ? "incident_back_popup" : "incident_back"}
    >
      <div className="side_nav">
        <Sidebar history={props.history} nav="Rent" />
      </div>
      <div className="rent_main_div">
        <div className="incident_action_main_page">
          <RentRollPage />
        </div>
      </div>
    </div>
  );
};

export default RentRoll;
