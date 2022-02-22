import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

const DailyIncidentReports = ({ ...props }) => {
  const [status] = useState(["", "Active", "Closed"]);
  const [incidentStatus, setIncidentStatus] = useState(false);
  const [statusType, setStatusType] = useState("");
  const [incidentList, setIncidentList] = useState([]);
  const [token, setToken] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  let _date = new Date();
  let dateMDY = `${_date.getMonth() + 1}-${_date.getDate() +
    1}-${_date.getFullYear()}`;
  const [actualDate, setActualDate] = useState(_date);

  const [date, setDate] = useState(dateMDY);

  const changeDate = () => {
    let currentDate = new Date(actualDate.getTime() + 24 * 60 * 60 * 1000);

    let dateMDY = `${currentDate.getMonth() + 1}-${currentDate.getDate() +
      1}-${currentDate.getFullYear()}`;

    setDate(dateMDY);
    setActualDate(currentDate);
  };

  const previous = () => {
    let currentDate = new Date(actualDate.getTime() - 24 * 60 * 60 * 1000);
    let dateMDY = `${currentDate.getMonth() + 1}-${currentDate.getDate() +
      1}-${currentDate.getFullYear()}`;

    setDate(dateMDY);
    setActualDate(currentDate);
  };

  const getIncidentReport = (buildingno, _token) => {
    var config = {
      method: "get",
      url: `https://kepah-24275.botics.co/api/v1/security-report/?residence_building=${buildingno}`,
      headers: {
        Authorization: `token ${_token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function(response) {
        let incidentList = response.data;
        setIncidentList(incidentList);
        setFiltered(incidentList);
      })
      .catch(function(error) {
        console.log(error, "It's a error!!!");
      });
  };

  // const updateStatus = (id, status, option, key) => {
  //   var data = JSON.stringify({
  //     incident_status: status,
  //   });

  //   var config = {
  //     method: "patch",
  //     url: `https://kepah-24275.botics.co/api/v1/security-report/${id}/`,
  //     headers: {
  //       Authorization: `token ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function(response) {
  //       console.log(JSON.stringify(response.data));
  //       setIncidentStatus(false);
  //       setStatusType(option);
  //       if (option === "Closed") {
  //         incidentList.splice(key, 1);
  //       }
  //       setIncidentList((incidentList) => [...incidentList]);
  //     })
  //     .catch(function(error) {
  //       setIncidentStatus(false);
  //       setStatusType(option);
  //     });
  // };

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

  useEffect(() => {
    getIncidentReport(
      localStorage.getItem("buildingno"),
      localStorage.getItem("token")
    );
    setToken(localStorage.getItem("token"));
  }, [localStorage.getItem("token") && localStorage.getItem("buildingno")]);

  useEffect(() => {
    let filter = incidentList.filter((val) => {
      if (search !== "" && val.incident_type.includes(search)) {
        return val;
      }
    });
    if (filter.length < 1 && search === "") {
      setIncidentList(incidentList);
    } else {
      setIncidentList(filter);
    }
    if (search === "") {
      getIncidentReport(
        localStorage.getItem("buildingno"),
        localStorage.getItem("token")
      );
    }
  }, [search]);

  return (
    <div className="daily_incident_main">
      <div className="daily_incident_input_btn">
        <div className="daily_incident_text_div">
          <span className="Daily_incident_text">Daily Incident Reports</span>
        </div>
        <div className="daily_incident_input_div">
          <input
            type="text"
            className="daily_incident_input"
            placeholder="Name or ID...."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="search_btn">
            <img src={require("../../../assets/Search.png").default} />
          </div>
        </div>
      </div>

      <div className="calendar">
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

      <div className="daily_incident_scroll">
        {incidentList.map((val, ind) => {
          return (
            <>
              {val.incident_status === null || "Active" ? (
                <div className="incident_all_reports_div">
                  <div className="incident_report_name_time_div">
                    <div
                      className="incident_report_div"
                      // onClick={() => {
                      //   openReport ? setOpenReport(false) : setOpenReport(true);
                      // }}
                    >
                      <div>
                        <span
                          onClick={() => {
                            props.history.push("incidentreports");
                          }}
                          className="incident_report_no_name"
                        >
                          {val.incident_type}- #{val.id}
                        </span>
                      </div>

                      <span className="incident_report_time_date">
                        {val.report_date} - {val.report_time}{" "}
                      </span>
                    </div>
                    <div>
                      <p className="incident_main_report">
                        “{val.incident_summary}”
                      </p>
                    </div>
                  </div>
                  <div className="incident_share_report_page_div">
                    <div className="down_arrow_incident">
                      <img
                        src={require("../../../assets/arrow_down.png").default}
                      />
                      <img
                        className="down_border"
                        src={
                          require("../../../assets/bottom_arrow_border.png")
                            .default
                        }
                      />
                    </div>
                    {/* <div>
                    <img
                      className="round_background"
                      src={require("../../../assets/round.png").default}
                    />
                  </div> */}

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
                            src={
                              require("../../../assets/up-arrow.png").default
                            }
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
                              updateStatus(val.id, 1, "Active", ind);
                            }}
                          >
                            <span>Active</span>
                          </div>
                          <div
                            className="status_report_choose2"
                            onClick={() => {
                              updateStatus(val.id, 2, "Closed", ind);
                            }}
                          >
                            <span>Closed</span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="bottom_border_vehicle_page" />
            </>
          );
        })}

        {/* <div className="daily_incident_all_reports_div">
          <div className="daily_incident_report_name_time_div">
            <div>
              <span
                onClick={() => {
                  props.history.push("incidentreports");
                }}
                className="daily_incident_report_no_name"
              >
                Noise Violation - #625211453
              </span>
              <span className="daily_incident_report_time_date">
                6/25/2021 - 14:53
              </span>
            </div>
            <div>
              <p className="daily_incident_main_report">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque vel sapien at lorem mollis faucibus. Proin varius...”
              </p>
            </div>
          </div>
          <div className="incident_share_report_div">
            <div>
              <img src={require("../../../assets/right-arrow.png").default} />
            </div>
            <div className="down_arrow">
              <img src={require("../../../assets/arrow_down.png").default} />
              <img
                className="down_border"
                src={require("../../../assets/bottom_arrow_border.png").default}
              />
            </div>
            <div>
              <img
                className="round_background"
                src={require("../../../assets/round.png").default}
              />
            </div>
          </div>
        </div>

        <div className="bottom_border_daily_incident" />

        <div className="daily_incident_all_reports_div">
          <div className="daily_incident_report_name_time_div">
            <div>
              <span
                onClick={() => {
                  props.history.push("incidentreports");
                }}
                className="daily_incident_report_no_name"
              >
                Noise Violation - #625211453
              </span>
              <span className="daily_incident_report_time_date">
                6/25/2021 - 14:53
              </span>
            </div>
            <div>
              <p className="daily_incident_main_report">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque vel sapien at lorem mollis faucibus. Proin varius...”
              </p>
            </div>
          </div>
          <div className="incident_share_report_div">
            <div>
              <img src={require("../../../assets/right-arrow.png").default} />
            </div>
            <div className="down_arrow">
              <img src={require("../../../assets/arrow_down.png").default} />
              <img
                className="down_border"
                src={require("../../../assets/bottom_arrow_border.png").default}
              />
            </div>
            <div>
              <img
                className="round_background_2"
                src={require("../../../assets/red-round.png").default}
              />
            </div>
          </div>
        </div>

        <div className="bottom_border_daily_incident" />

        <div className="daily_incident_all_reports_div">
          <div className="daily_incident_report_name_time_div">
            <div>
              <span
                onClick={() => {
                  props.history.push("incidentreports");
                }}
                className="daily_incident_report_no_name"
              >
                Noise Violation - #625211453
              </span>
              <span className="daily_incident_report_time_date">
                6/25/2021 - 14:53
              </span>
            </div>
            <div>
              <p className="daily_incident_main_report">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque vel sapien at lorem mollis faucibus. Proin varius...”
              </p>
            </div>
          </div>
          <div className="incident_share_report_div">
            <div>
              <img src={require("../../../assets/right-arrow.png").default} />
            </div>
            <div className="down_arrow">
              <img src={require("../../../assets/arrow_down.png").default} />
              <img
                className="down_border"
                src={require("../../../assets/bottom_arrow_border.png").default}
              />
            </div>
            <div>
              <img
                className="round_background_3"
                src={require("../../../assets/yellow-round.png").default}
              />
            </div>
          </div>
        </div>

        <div className="bottom_border_daily_incident" /> */}
      </div>
    </div>
  );
};

export default DailyIncidentReports;
