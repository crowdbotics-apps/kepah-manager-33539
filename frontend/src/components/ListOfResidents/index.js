import React, { useState } from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import ListOfResidentsPage from "./ListOfResidentsPage/ListOfResidentsPage";
import EditResident from "./EditResident/EditResident";
import AddNewResident from "./AddNewResident/AddNewResident";

const RentRoll = ({ ...props }) => {
  const [addResident, setResident] = useState(false);
  const resident = () => {
    setResident(true);
  };
  const closeAddNewResident = () => {
    setResident(false);
  };
  return (
    <div
      // className="incident_back"
      className={props.popup ? "incident_back_popup" : "incident_back"}
    >
      <div className="side_nav">
        <Sidebar history={props.history} nav="ListofResidents" />
      </div>
      <div className="rent_main_div">
        {addResident === false ? (
          <div className="incident_action_main_page">
            <ListOfResidentsPage setResident={resident} />
          </div>
        ) : (
          <AddNewResident closeAddNewResident={closeAddNewResident} />
        )}
      </div>
    </div>
  );
};

export default RentRoll;
