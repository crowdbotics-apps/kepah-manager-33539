import React, { useState } from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import PoliceLiasionPage from "./PoliceLiasionPage/PoliceLiasonPage";
const RentRoll = ({ ...props }) => {
  const [editTenant, setTenant] = useState(false);
  const tenant = () => {
    setTenant(true);
  };
  const closeEditTenant = () => {
    setTenant(false);
  };
  return (
    <div
      // className="incident_back"
      className={props.popup ? "incident_back_popup" : "incident_back"}
    >
      <div className="side_nav">
        <Sidebar history={props.history} nav="Police Liasion" />
      </div>
      <div className="police_main_div">
        <div className="police_liasion_main_page">
          <PoliceLiasionPage />
        </div>
      </div>
    </div>
  );
};

export default RentRoll;
