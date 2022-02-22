import React from "react";

import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import TermsandConditionsPage from "./Terms&ConditionsPage/Terms&ConditionsPage";

const index = ({ ...props }) => {
  return (
    <div className="incident_back">
      <div className="side_nav">
        <Sidebar history={props.history} nav="Terms and Conditions" />
      </div>
      <div className="maintenance_main_div">
        <div className="terms_conditions_main_div_back">
          <TermsandConditionsPage />
        </div>
      </div>
    </div>
  );
};

export default index;
