import React, { useState } from "react";
import "./style.css";

const Sidebar = ({ ...props }) => {
  const [incidentStatus, setIncidentStatus] = useState(false);
  const [statusType, setStatusType] = useState("");
  const [workStatus, setWorkStatus] = useState(false);
  const [buildingNo, setBuildingNo] = useState("");

  return (
    <div className="sidebar_back">
      <div className="properties_main_div">
        <div className="property_div">
          <span className="property_text">Property:</span>
        </div>
        <div
          className="select_property_div"
          style={{ cursor: "pointer" }}
          onClick={() => setWorkStatus(true)}
        >
          <span className="property_text">Forest Core Apt.</span>
          <img
            src={require("../../assets/dropdown.png").default}
            className="see_more"
          />
        </div>
      </div>

      <div className="side_bar_property">
        {workStatus ? (
          <div style={{ position: "absolute" }}>
            <div
              onClick={() =>
                setBuildingNo(localStorage.setItem("buildingno", 1))
              }
              className="property_choose"
              // onClick={}
            >
              <span>Property Name #2</span>
            </div>
            <div
              className="property_choose2"
              onClick={() =>
                setBuildingNo(localStorage.setItem("buildingno", 1))
              }
            >
              <span>Property Name #3</span>
            </div>
            <div
              className="property_choose3"
              onClick={() =>
                setBuildingNo(localStorage.setItem("buildingno", 1))
              }
            >
              <span>Property Name #4</span>
            </div>
          </div>
        ) : null}
      </div>

      <div className="forest_img_div">
        <img
          src={require("../../assets/forestCove.png").default}
          className="forest_img"
        />
      </div>
      <div className="all_screens_div">
        {props.nav === "dashboard" ? (
          <div className="select_dashboard_div sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("dashboard");
              }}
            >
              Dashboard
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("dashboard");
            }}
          >
            <span className="officer_text">Dashboard</span>
          </div>
        )}

        {props.nav === "ListOfManagers" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("list");
              }}
            >
              List of Managers
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("list");
            }}
          >
            <span className="officer_text"> List of Managers</span>
          </div>
        )}
        {/* <div className="select_officers_div sidebar-common">
          <span className="officer_text"> Officers Schedule</span>
        </div> */}

        {props.nav === "ListofResidents" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("listofresidents");
              }}
            >
              List of Residents
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("listofresidents");
            }}
          >
            <span className="officer_text">List of Residents</span>
          </div>
        )}

        {props.nav === "ListofTenants" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("listoftenants");
              }}
            >
              List of Tenants
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("listoftenants");
            }}
          >
            <span className="officer_text">List of Tenants</span>
          </div>
        )}

        {props.nav === "Insurance Policy" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("insurancecertificate");
              }}
            >
              Insurance Policy
            </span>
            <span className="star">*</span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("insurancepolicy");
            }}
          >
            <span className="officer_text"> Insurance Policy</span>
            <span className="star">*</span>
          </div>
        )}

        {props.nav === "Update Lease Information" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("updateleaseinformation");
              }}
            >
              Update Lease Information
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("updateleaseinformation");
            }}
          >
            <span className="officer_text">Update Lease Information</span>
          </div>
        )}

        {props.nav === "Incident Reports" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("incidentreports");
              }}
            >
              Incident reports
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("incidentreports");
            }}
          >
            <span className="officer_text">Incident reports</span>
          </div>
        )}

        {/* <div className="select_officers_div sidebar-common">
          <span className="officer_text"> Sex offenders</span>
        </div> */}

        {props.nav === "Sex Offender" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("offenders");
              }}
            >
              Vehicle Action
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("offenders");
            }}
          >
            <span className="officer_text"> Vehicle Action</span>
          </div>
        )}

        {props.nav === "Maintenance Request" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("maintenancerequest");
              }}
            >
              Maintenance Request
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("maintenancerequest");
            }}
          >
            <span className="officer_text">Maintenance Request</span>
          </div>
        )}

        {/* <div className="select_officers_div sidebar-common">
          <span className="officer_text"> Rent roll</span>
        </div> */}

        {props.nav === "List Of Vehicles" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("Listofvehicles");
              }}
            >
              List of Vehicles
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("Listofvehicles");
            }}
          >
            <span className="officer_text">List Of Vehicles</span>
          </div>
        )}

        {props.nav === "List Of Vendors" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("listofvendors");
              }}
            >
              List of Vendors
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("listofvendors");
            }}
          >
            <span className="officer_text">List of Vendors</span>
          </div>
        )}

        {/* <div className="select_officers_div sidebar-common">
          <span className="officer_text"> Police Liaison</span>
        </div> */}

        {props.nav === "Security Companies" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("listofsecuritycompanies");
              }}
            >
              List of Security Companies
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("listofsecuritycompanies");
            }}
          >
            <span className="officer_text">List of Security Companies</span>
          </div>
        )}

        {props.nav === "Officers Schedule" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("officersmanagement");
              }}
            >
              Officers Management
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("officersmanagement");
            }}
          >
            <span className="officer_text">Officers Management</span>
          </div>
        )}

        {props.nav === "List of Officer" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("listofofficers");
              }}
            >
              List of Officers
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("listofofficers");
            }}
          >
            <span className="officer_text">List of Officers</span>
          </div>
        )}

        {props.nav === "Add / Remove Logo" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("addremovelogo");
              }}
            >
              Add/Remove Logo
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("addremovelogo");
            }}
          >
            <span className="officer_text">Add/Remove Logo</span>
          </div>
        )}

        {props.nav === "Sex Offender" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("sexoffender");
              }}
            >
              Sex Offenders
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("sexoffender");
            }}
          >
            <span className="officer_text">Sex Offenders</span>
          </div>
        )}

        {props.nav === "Criminal" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("criminal");
              }}
            >
              Criminal Trespassers
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("criminal");
            }}
          >
            <span className="officer_text"> Criminal Trespassers</span>
          </div>
        )}

        {props.nav === "Police Liasion" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("policeliasion");
              }}
            >
              Police Liasion
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("policeliasion");
            }}
          >
            <span className="officer_text"> Police Liasion</span>
          </div>
        )}

        {props.nav === "Terms and Conditions" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("termsandconditions");
              }}
            >
              Terms & Conditions
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("termsandconditions");
            }}
          >
            <span className="officer_text">Terms & Conditions</span>
          </div>
        )}

        {props.nav === "Rent Roll" ? (
          <div className="select_officers_div  sidebar-common">
            <span className="dash" />
            <span
              className="dashboard_text"
              onClick={() => {
                props.history.push("rentroll");
              }}
            >
              Rent Roll
            </span>
          </div>
        ) : (
          <div
            className="select_officers_div sidebar-common"
            onClick={() => {
              props.history.push("rentroll");
            }}
          >
            <span className="officer_text">Rent Roll</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
