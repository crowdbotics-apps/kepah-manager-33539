import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ListOfOfficersPage from "./ListOfOfficersPage/ListOfOfficersPage";
import "./style.css";

const UpdateLeaseInformation = ({ ...props }) => {
  return (
    <div className="main-officer_schedule">
      <div className="side_nav">
        <Sidebar history={props.history} nav="List of Officer" />
      </div>

      <div className="list_of_officers_main_div">
        <div className="list_of_appartments">
          <ListOfOfficersPage />
        </div>
      </div>
    </div>
  );
};

export default UpdateLeaseInformation;
