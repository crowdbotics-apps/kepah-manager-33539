import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ListOfSecurityCompaniesPage from "./ListOfSecurityCompaniesPage/ListOfSecurityCompaniesPage";
import ListOfOfficers from "./ListOfOfficers/ListOfOfficers";

import "./style.css";

const UpdateLeaseInformation = ({ ...props }) => {
  return (
    <div className="main-officer_schedule">
      <div className="side_nav">
        <Sidebar history={props.history} nav="Security Companies" />
      </div>

      <div className="update_lease_information">
        <div className="list_of_appartments">
          <ListOfSecurityCompaniesPage />
        </div>
        <div className="history_of_payments">
          <ListOfOfficers />
        </div>
      </div>
    </div>
  );
};

export default UpdateLeaseInformation;
