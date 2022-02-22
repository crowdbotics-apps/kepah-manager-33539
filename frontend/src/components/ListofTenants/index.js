import React, { useState } from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import ListofTenantsPage from "./ListofTenantsPage/ListofTenantsPage";
import EditTenantProfile from "./EditTenantProfile/EditTenantProfile";
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
        <Sidebar history={props.history} nav="ListofTenants" />
      </div>
      <div className="rent_main_div">
        {editTenant === false ? (
          <div className="incident_action_main_page">
            <ListofTenantsPage setTenant={tenant} />
          </div>
        ) : (
          <EditTenantProfile  closeEditTenant={closeEditTenant}/>
        )}
      </div>
    </div>
  );
};

export default RentRoll;
