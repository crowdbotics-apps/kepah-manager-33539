import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const VehicleActionLogs = () => {
  const [showTagInfo, setShowTagInfo] = useState(null);
  const [workStatus, setWorkStatus] = useState(false);
  const [reportType, setReportType] = useState("");
  const [actionLogs, setVehicleActionLogs] = useState([]);
  const [token, setToken] = useState(null);
  const [vehicleStatus] = useState(["", "Booted", "Towed"]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [popOverDetails, setPopOverDetails] = useState(null);
  const getVehicleActionLog = (buildingno, _token) => {
    var config = {
      method: "get",
      url: `https://kepah-24275.botics.co/api/v1/illegal-parking/?residence_building=${buildingno}`,
      headers: {
        Authorization: `token ${_token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function(response) {
        let actionLogs = response.data;
        console.log(response, "reeessponse");
        setVehicleActionLogs(actionLogs);
        setFiltered(actionLogs);
      })
      .catch(function(error) {
        console.log(error, "It's a error!!!");
      });
  };

  const updateParkingViolation = (status, vehicle_id, index) => {
    let token = localStorage.getItem("token");
    let data = JSON.stringify({
      status: status,
    });

    let config = {
      method: "patch",
      url: `https://kepah-24275.botics.co/api/v1/illegal-parking/${vehicle_id}/`,
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        // console.log(response.data)
        actionLogs.splice(index, 1, response.data);

        setVehicleActionLogs((actionLogs) => [...actionLogs]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getVehicleActionLog(
      localStorage.getItem("buildingno"),
      localStorage.getItem("token")
    );
    setToken(localStorage.getItem("token"));
  }, [localStorage.getItem("token") && localStorage.getItem("buildingno")]);

  useEffect(() => {
    let filter = actionLogs.filter((val) => {
      if (search !== "" && val.created.includes(search)) {
        return val;
      }
    });
    if (filter.length < 1 && search === "") {
      setVehicleActionLogs(actionLogs);
    } else {
      setVehicleActionLogs(filter);
    }
  }, [search]);

  const popover = (
    <Popover id="popover-basic">
      {popOverDetails && (
        <div>
          <div className="popup_header">
            <span className="width_div" />
            <span className="taginfo_profile_name">{popOverDetails.name}</span>
          </div>

          <div className="taginfo_background">
            <div className="profile_pic_div">
              {popOverDetails.profile_picture ? (
                <img
                  className="taginfo_profile_pic"
                  src={popOverDetails.profile_picture}
                />
              ) : (
                <img
                  className="taginfo_profile_pic"
                  src={require("../../../assets/profile.png").default}
                />
              )}
            </div>
            <div className="resident_info">
              {/* <span>resident 123/53C</span> */}
              <span>{popOverDetails.email}</span>
              <span>{popOverDetails.phone_number}</span>
            </div>
          </div>
        </div>
      )}
    </Popover>
  );

  return (
    <div>
      <div className="list_of_officers_manage_div_main_page">
        <div>
          <span className="list_of_officers_text_main_page">
            Vehicle Action Logs
          </span>
        </div>
      </div>

      <div className="vehicle_action_input_div">
        <input
          type="text"
          className="list_of_officers_input"
          placeholder="Name or License No...."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="list_of_officers_search_btn">
          <img src={require("../../../assets/Search.png").default} />
        </div>
      </div>

      <div className="license_scroll_div_vehicle_page">
        {actionLogs.map((val, ind) => {
          return (
            <>
              <div key={ind} className="vehicle_actions_logs_all">
                <span className="date_time">
                  {new Date(val.created).getMonth()}/
                  {new Date(val.created).getDate()}/
                  {new Date(val.created).getFullYear()} -{" "}
                  {new Date(val.created).getUTCHours()}:
                  {new Date(val.created).getMinutes()}
                </span>
                {/* 
                <div className="booted_text">
                  <img
                    className="vehicle_profile_img"
                    src={require("../../../assets/profile.png").default}
                  />
                </div> */}
                <span className="booted_text"></span>

                {/* <span className="booted_text">{val.status}</span> */}
                {/* <span className="booted_text">Booted</span> */}

                <div className="taginfo_width">
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popover}
                    // show={showTagInfo === ind + 1 ? true : false}
                    // onToggle={() => setShowTagInfo(ind + 1)}
                    show={showTagInfo === ind + 1 ? true : false}
                    onToggle={() => {
                      // setIncidentDetails(val);
                      setPopOverDetails(val.reporter_details);
                      setShowTagInfo(ind + 1);
                    }}
                  >
                    <span className="license_main_page">
                      Tag Info: <span>{val.tag}</span>
                    </span>
                  </OverlayTrigger>
                </div>
                <div className="owner_name_div">
                  <span className="owner_name_text">Report Owner:</span>
                  <span className="resident_profile_name_text">
                    {val.reporter_details.name}
                  </span>
                </div>
                {/* <OverlayTrigger
                  trigger="click"
                  placement="left"
                  overlay={popover2}
                  show={showReport === ind + 1 ? true : false}
                  onToggle={() => setShowReport(ind + 1)}
                >
                  <div className="round_back_div">
                    <img
                      className="round_background"
                      src={require("../../../assets/round.png").default}
                    />
                  </div>
                </OverlayTrigger> */}

                <div className="vehicle_report_div">
                  <div
                    className="report_div"
                    onClick={() =>
                      setWorkStatus(workStatus === val ? null : val)
                    }
                  >
                    <span>
                      {val.status
                        ? vehicleStatus[val.status]
                        : "No action taken"}
                      {/* {reportType !== "" ? reportType : "Select report"} */}
                    </span>
                    {workStatus === val ? (
                      <img
                        className="up_arrow_img"
                        src={require("../../../assets/up-arrow.png").default}
                      />
                    ) : (
                      <img
                        src={require("../../../assets/scroll-down.png").default}
                      />
                    )}
                  </div>

                  {workStatus === val ? (
                    <div>
                      <div
                        className="report_choose"
                        onClick={() => {
                          setWorkStatus(false);
                          setReportType("Booted");
                          updateParkingViolation(1, val.id, ind);
                        }}
                      >
                        <span>Booted</span>
                      </div>
                      <div
                        className="report_choose1"
                        onClick={() => {
                          setWorkStatus(false);
                          setReportType("Towed");
                          updateParkingViolation(2, val.id, ind);
                        }}
                      >
                        <span>Towed</span>
                      </div>
                      <div
                        className="report_choose2"
                        onClick={() => {
                          setWorkStatus(false);

                          setReportType("No action taken");
                          updateParkingViolation(null, val.id, ind);
                        }}
                      >
                        <span>No action taken</span>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="bottom_border_vehicle_page" />
            </>
          );
        })}

        {showTagInfo ? (
          <div
            onClick={() => {
              setShowTagInfo(false);
            }}
            className="incident-class"
          ></div>
        ) : null}

        {/* <div className="vehicle_actions_logs_all">
          <span className="date_time">6/25/2021 - 14:53</span>
          <span className="booted_text">Towed</span>

          <span className="license_main_page">Tag Info: 123SDF</span>
          <div className="owner_name_div">
            <span className="owner_name_text">Report Owner:</span>
            <span className="resident_profile_name_text">
              John Doe (Resident)
            </span>
          </div>

          <div className="round_back_div">
            <img
              className="round_background"
              src={require("../../../assets/round.png").default}
            />
          </div>
        </div>
        <div className="bottom_border_vehicle_page" />

        <div className="vehicle_actions_logs_all">
          <span className="date_time">6/25/2021 - 14:53</span>
          <span className="booted_text">No action taken</span>

          <span className="license_main_page">Tag Info: 123SDF</span>
          <div className="owner_name_div">
            <span className="owner_name_text">Report Owner:</span>
            <span className="resident_profile_name_text">
              John Doe (Resident)
            </span>
          </div>

          <div className="round_back_div">
            <img
              className="round_background"
              src={require("../../../assets/round.png").default}
            />
          </div>
        </div>
        <div className="bottom_border_vehicle_page" />

        <div className="vehicle_actions_logs_all">
          <span className="date_time">6/25/2021 - 14:53</span>
          <span className="booted_text">Towed</span>

          <span className="license_main_page">Tag Info: 123SDF</span>
          <div className="owner_name_div">
            <span className="owner_name_text">Report Owner:</span>
            <span className="resident_profile_name_text">
              John Doe (Resident)
            </span>
          </div>

          <div className="round_back_div">
            <img
              className="round_background"
              src={require("../../../assets/round.png").default}
            />
          </div>
        </div>
        <div className="bottom_border_vehicle_page" />

        <div className="vehicle_actions_logs_all">
          <span className="date_time">6/25/2021 - 14:53</span>
          <span className="booted_text">Booted</span>

          <span className="license_main_page">Tag Info: 123SDF</span>
          <div className="owner_name_div">
            <span className="owner_name_text">Report Owner:</span>
            <span className="resident_profile_name_text">
              John Doe (Resident)
            </span>
          </div>

          <div className="round_back_div">
            <img
              className="round_background"
              src={require("../../../assets/round.png").default}
            />
          </div>
        </div>
        <div className="bottom_border_vehicle_page" />

        <div className="vehicle_actions_logs_all">
          <span className="date_time">6/25/2021 - 14:53</span>
          <span className="booted_text">Booted</span>

          <span className="license_main_page">Tag Info: 123SDF</span>
          <div className="owner_name_div">
            <span className="owner_name_text">Report Owner:</span>
            <span className="resident_profile_name_text">
              John Doe (Resident)
            </span>
          </div>

          <div className="round_back_div">
            <img
              className="round_background"
              src={require("../../../assets/round.png").default}
            />
          </div>
        </div>
        <div className="bottom_border_vehicle_page" />

        <div className="vehicle_actions_logs_all">
          <span className="date_time">6/25/2021 - 14:53</span>
          <span className="booted_text">Booted</span>

          <span className="license_main_page">Tag Info: 123SDF</span>
          <div className="owner_name_div">
            <span className="owner_name_text">Report Owner:</span>
            <span className="resident_profile_name_text">
              John Doe (Resident)
            </span>
          </div>

          <div className="round_back_div">
            <img
              className="round_background"
              src={require("../../../assets/round.png").default}
            />
          </div>
        </div>
        <div className="bottom_border_vehicle_page" /> */}
      </div>
    </div>
  );
};

export default VehicleActionLogs;
