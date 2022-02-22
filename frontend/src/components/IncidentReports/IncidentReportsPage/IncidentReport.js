import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Popover, OverlayTrigger } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const IncidentReport = () => {
  const [status] = useState(["", "Active", "Closed"]);
  const [policeMatter, setPoliceMatter] = useState("");
  const [incidentReports, setIncidentReports] = useState(null);
  const [policeCall, setPoliceCall] = useState(true);
  const [incidentStatus, setIncidentStatus] = useState(false);
  const [statusType, setStatusType] = useState("");
  const [incidentDetails, setIncidentDetails] = useState(null);
  const [incidentList, setIncidentList] = useState([]);
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(null);
  const [idForComment, setIdForComment] = useState("");
  const [comment, setComment] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let _date = new Date();
  let dateMDY = `${_date.getFullYear()}-${_date.getMonth() +
    1}-${_date.getDate()}`;
  const [actualDate, setActualDate] = useState(_date);

  const [date, setDate] = useState(dateMDY);

  const changeDate = () => {
    let currentDate = new Date(actualDate.getTime() + 24 * 60 * 60 * 1000);

    let dateMDY = `${currentDate.getFullYear()}-${currentDate.getMonth() +
      1}-${currentDate.getDate()}`;

    setDate(dateMDY);
    setActualDate(currentDate);
  };

  const previous = () => {
    let currentDate = new Date(actualDate.getTime() - 24 * 60 * 60 * 1000);

    let dateMDY = `${currentDate.getFullYear()}-${currentDate.getMonth() +
      1}-${currentDate.getDate()}`;

    setDate(dateMDY);
    setActualDate(currentDate);
    console.log(dateMDY);
  };

  const getIncidentReport = (buildingno, _token) => {
    var config = {
      method: "get",
      // url:
      // "https://kepah-24275.botics.co/api/v1/security-report/?residence_building=1&incident_status=0,1",
      url: `https://kepah-24275.botics.co/api/v1/security-report/?residence_building=${buildingno}&incident_status=0&start_date=2021-05-20&end_date=2021-05-24`,

      headers: {
        Authorization: `token ${_token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function(response) {
        // console.log(response, "reeessponse");
        let incidentList = response.data;

        // if (incidentList && incidentList.length > 0) {
        console.log(response, "reeessponse");

        //   incidentList.reverse();
        setIncidentList(incidentList);
        // }
      })
      .catch(function(error) {
        console.log(error, "It's a error!!!");
      });
  };

  const updateStatus = (id, status, option, key) => {
    var data = JSON.stringify({
      incident_status: status,
    });

    var config = {
      method: "patch",
      url: `https://kepah-24275.botics.co/api/v1/security-report/${id}/`,
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
        setIncidentStatus(false);
        setStatusType(option);
        if (option === "Closed") {
          incidentList.splice(key, 1);
        } else {
          incidentList.splice(key, 1, response.data);
        }
        setIncidentList((incidentList) => [...incidentList]);
      })
      .catch(function(error) {
        setIncidentStatus(false);
        setStatusType(option);
      });
  };

  const addComment = () => {
    let data = JSON.stringify({
      comment: comment,
    });

    let config = {
      method: "post",
      url: `https://kepah-24275.botics.co/api/v1/security-report/${idForComment}/add-comment/`,
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
        handleClose();
      })
      .catch(function(error) {
        console.log(error);
        handleClose();
      });
  };

  useEffect(() => {
    getIncidentReport(
      localStorage.getItem("buildingno"),
      localStorage.getItem("token")
    );
    setToken(localStorage.getItem("token"));
  }, [localStorage.getItem("token") && localStorage.getItem("buildingno")]);

  const popover = (
    // <>
    <Popover id="popover-basic">
      {incidentDetails && (
        <div className="incident_report_popup_background">
          <div className="incident_reporter_div">
            <span className="incident_reporter_text">Incident Reporter:</span>
            <span className="reporter_name">
              {incidentDetails.emergency_person_name}
            </span>
          </div>
          <div className="incident_reporter_div">
            <span className="incident_reporter_text">Date:</span>
            <span className="reporter_name">{incidentDetails.report_date}</span>
          </div>
          <div className="incident_reporter_div">
            <span className="incident_reporter_text">Time:</span>
            <span className="reporter_name">{incidentDetails.report_time}</span>
          </div>
          <div className="incident_reporter_div">
            <span className="incident_reporter_text">Incident Type:</span>
            <span className="reporter_name">
              {incidentDetails.incident_type}
            </span>
          </div>
          <div className="incident_reporter_div">
            <span className="incident_reporter_text">Summary:</span>
            <span className="reporter_name">
              {incidentDetails.incident_summary}
            </span>
          </div>
          <div className="incident_reporter_div">
            <span className="incident_reporter_text">
              Potential Witness Name:
            </span>
            <span className="reporter_name">
              {incidentDetails.witness_name}
            </span>
          </div>
          <div className="incident_reporter_div">
            <span className="incident_reporter_text">
              Potential Witness Phone:
            </span>
            <span className="reporter_name">
              {incidentDetails.witness_phone}
            </span>
          </div>
          <div className="police_matter_div">
            <span className="incident_reporter_text">Police Matter:</span>

            <div className="police-matter-buttons-div">
              {incidentDetails.police_call ? (
                <div className="radio">
                  <input checked={true} type="radio" value="yes" readOnly />
                  <label className="yes-text">Yes</label>
                </div>
              ) : (
                <div className="radio">
                  <input
                    onClick={() => setPoliceCall(false)}
                    className="no_button"
                    type="radio"
                    value="no"
                    // checked={incidentDetails.police_call ? === "no"}
                    onChange={(e) => setPoliceMatter(e.target.value)}
                  />
                  <label className="yes-text">No</label>
                </div>
              )}
            </div>
            {incidentDetails.police_call ? (
              <>
                <div className="incident_reporter_div">
                  <span className="incident_reporter_text">Police Name:</span>
                  <span className="reporter_name">
                    {incidentDetails.emergency_person_name
                      ? incidentDetails.emergency_person_name
                      : "-"}
                  </span>
                </div>
                <div className="incident_reporter_div">
                  <span className="incident_reporter_text">Agency Name:</span>
                  <span className="reporter_name">
                    {incidentDetails.agency_name
                      ? incidentDetails.agency_name
                      : "-"}
                  </span>
                </div>
                <div className="incident_reporter_div">
                  <span className="incident_reporter_text">
                    Badge/Vehicle No:
                  </span>
                  <span className="reporter_name">
                    {incidentDetails.vehicle_number
                      ? incidentDetails.vehicle_number
                      : "-"}
                  </span>
                </div>
              </>
            ) : (
              <div className="incident_reporter_div">
                <span className="incident_reporter_text">Why Not:</span>
                <span className="reporter_name">Phoenix</span>
              </div>
            )}
          </div>
        </div>
      )}
    </Popover>
  );

  return (
    <div>
      <div className="incident_report_div_main_page">
        <div>
          <span className="list_of_officers_text_main_page">
            Incident Reports
          </span>
        </div>
        <div className="download_create_btns">
          <Form className="download_btn_form">
            <Button
              className="download_btn_incident"
              variant="primary"
              type="submit"
            >
              <div className="download_icon_div">
                <img
                  src={
                    require("../../../assets/incident-download-icon.png")
                      .default
                  }
                />
                <img
                  src={
                    require("../../../assets/incident-download-dash.png")
                      .default
                  }
                />
              </div>
              <span className="download_text">DOWNLOAD</span>
            </Button>
          </Form>
          <Form className="download_btn_form">
            <Button
              className="create_new_incident_btn"
              variant="primary"
              type="submit"
            >
              CREATE NEW REPORT
            </Button>
          </Form>
        </div>
      </div>

      <div className="calendar_incident">
        <img
          onClick={() => previous()}
          src={require("../../../assets/previous.png").default}
        />
        <span>{date}</span>
        <img
          onClick={() => changeDate()}
          src={require("../../../assets/next.png").default}
        />
      </div>

      <div className="scroll_div_incident_page">
        {incidentList.map((val, ind) => {
          return (
            <div key={ind}>
              {/* {val.incident_status === null || val.incident_status === 0 ? ( */}
              <div className="incident_all_reports_div">
                <div className="incident_report_name_time_div">
                  <div className="incident_report_div">
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={popover}
                      show={incidentReports === ind + 1 ? true : false}
                      onToggle={() => {
                        setIncidentDetails(val);
                        setIncidentReports(ind + 1);
                      }}
                    >
                      <div>
                        <span className="incident_report_no_name">
                          {val.incident_type}- #{val.id}
                        </span>
                      </div>
                    </OverlayTrigger>

                    <span className="incident_report_time_date">
                      {val.report_date} - {val.report_time}
                    </span>
                  </div>
                  <div>
                    <p className="incident_main_report">
                      “{val.incident_summary}”
                    </p>
                  </div>
                </div>
                <div className="incident_share_report_page_div">
                  <div
                    onClick={() => {
                      handleShow(true);
                      setIdForComment(val.id);
                    }}
                  >
                    <img src={require("../../../assets/text.png").default} />
                  </div>

                  <div className="incident_report_status_div">
                    <div
                      className="status_report_div"
                      onClick={() =>
                        setIncidentStatus(incidentStatus === val ? null : val)
                      }
                    >
                      <span>
                        {!val.incident_status
                          ? "Filed"
                          : status[val.incident_status]}
                      </span>
                      {incidentStatus === val ? (
                        <img
                          className="up_arrow_img"
                          src={require("../../../assets/up-arrow.png").default}
                        />
                      ) : (
                        <img
                          src={
                            require("../../../assets/scroll-down.png").default
                          }
                        />
                      )}
                    </div>

                    {incidentStatus === val ? (
                      <div>
                        <div
                          className="status_report_choose"
                          onClick={() => {
                            updateStatus(val.id, null, null, ind);
                          }}
                        >
                          <span>Filed</span>
                        </div>
                        <div
                          className="status_report_choose1"
                          onClick={() => {
                            updateStatus(val.id, 0, "Active", ind);
                          }}
                        >
                          <span>Active</span>
                        </div>
                        <div
                          className="status_report_choose2"
                          onClick={() => {
                            updateStatus(val.id, 1, "Closed", ind);
                          }}
                        >
                          <span>Closed</span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="bottom_border_vehicle_page" />
            </div>
          );
        })}
        {incidentReports ? (
          <div
            onClick={() => {
              setIncidentReports(false);
            }}
            className="incident-class"
          ></div>
        ) : null}

        <Modal
          style={{ widht: "200px" }}
          show={show}
          onHide={handleClose}
          className="dialog-modal"
        >
          <div className="comment_modal_div">
            <div className="add_comment_background">
              <span className="add_comment_text"> Add a Comment</span>
            </div>
            <div className="comment_main_div">
              <div>
                <span className="comment_text">Comment:</span>
                <div className="comment_input_div">
                  <textarea
                    className="incident_comment_input"
                    rows="5"
                    placeholder="Add a Comment"
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div>
                  <Form className="comment_form">
                    <Button
                      className="confirm_button"
                      variant="primary"
                      onClick={() => addComment()}
                    >
                      CONFIRM
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <div onClick={handleClose} />
    </div>
  );
};

export default IncidentReport;
