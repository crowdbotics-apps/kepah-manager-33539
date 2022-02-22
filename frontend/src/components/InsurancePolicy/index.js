import React from "react";
import InsurancePolicyPage from "./InsurancePolicyPage/InsurancePolicyPage";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";

const InsuranceCertificate = ({ ...props }) => {
  console.log(props);
  return (
    <div className="policy_back">
      <div className="side_nav">
        <Sidebar history={props.history} nav="Insurance Policy" />
      </div>
      <div className="policy_main_div">
        <div className="policy_main_page">
          <InsurancePolicyPage />
        </div>
      </div>
    </div>
  );
};

export default InsuranceCertificate;
