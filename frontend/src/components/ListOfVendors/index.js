import React, {useState} from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import ListOfVendors from "./ListOfVendorsPage/ListOfVendorsPage";
import AddNewVendor from "./AddNewVendor/AddNewVendor";

const Caseload = ({ ...props }) => {
  const [addVendor, setVendor] = useState(false);
  const vendor = () => {
    setVendor(true);
  };
  const closeAddNewVendor = () => {
    setVendor(false);
  };
  return (
    <div className="incident_back">
      <div className="side_nav">
        <Sidebar history={props.history} nav="List Of Vendors" />
      </div>
      <div className="incident_action_main_div">
        {/* <div className="incident_action_main_page">
          <ListOfVendors />
        </div> */}

        {addVendor === false ? (
          <div className="incident_action_main_page" >
            <ListOfVendors vendor={vendor} />
          </div>
        ) : (
          <AddNewVendor closeAddNewVendor={closeAddNewVendor} />
        )}
      </div>
    </div>
  );
};

export default Caseload;
