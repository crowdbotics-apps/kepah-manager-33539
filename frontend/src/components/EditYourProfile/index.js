import React from "react";
import SecurityCompanyName from "./SecurityCompanyName/SecurityCompanyName";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";

const InsuranceCertificate = ({ ...props }) => {
  console.log(props);
  return (
    <div className="insurance_back">
      <div className="side_nav">
        <Sidebar history={props.history} nav="Edit Profile" />
      </div>
      <div className="edit_main_div">
        <div className="insurances_main_page">
          <SecurityCompanyName />
        </div>
      </div>
    </div>
  );
};

export default InsuranceCertificate;
