import React, { useState } from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import ListOfManagersPage from "./ListOfManagersPage/ListOfManagersPage";
import EditManager from "./EditManager/EditManager";

const RentRoll = ({ ...props }) => {
  const [editManager, setEditManager] = useState(false);
  const manager = () => {
    setEditManager(true);
  };
  const closeEditManager = () => {
    setEditManager(false);
  };
  return (
    <div
      // className="incident_back"
      className={props.popup ? "incident_back_popup" : "incident_back"}
    >
      <div className="side_nav">
        <Sidebar history={props.history} nav="ListOfManagers" />
      </div>
      <div className="rent_main_div">
        {editManager === false ? (
          <div className="incident_action_main_page">
            <ListOfManagersPage setManager={manager} />
          </div>
        ) : (
          <EditManager closeEditManager={closeEditManager} />
        )}
      </div>
    </div>
  );
};

export default RentRoll;
