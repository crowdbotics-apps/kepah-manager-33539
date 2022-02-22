import React from "react";
import RemoveLogoPage from "./RemoveLogoPage/RemoveLogoPage";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";

const InsuranceCertificate = ({ ...props }) => {
  console.log(props);
  return (
    <div className="policy_back">
      <div className="side_nav">
        <Sidebar history={props.history} nav="Add / Remove Logo" />
      </div>
      <div className="policy_main_div">
        <div className="policy_main_page">
          <RemoveLogoPage />
        </div>
      </div>
    </div>
  );
};

export default InsuranceCertificate;
