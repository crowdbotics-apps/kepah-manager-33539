import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ListoftheAppartments from "./ListoftheAppartments/ListoftheApartments";
import HistoryofthePayments from "./HistoryofthePayments/HistoryofthePayments";

import "./style.css";

const UpdateLeaseInformation = ({ ...props }) => {
  return (
    <div className="main-officer_schedule">
      <div className="side_nav">
        <Sidebar history={props.history} nav="Update Lease Information" />
      </div>

      <div className="update_lease_information">
        <div className="list_of_appartments">
          <ListoftheAppartments />
        </div>
        <div className="history_of_payments">
          <HistoryofthePayments />
        </div>
      </div>
    </div>
  );
};

export default UpdateLeaseInformation;
