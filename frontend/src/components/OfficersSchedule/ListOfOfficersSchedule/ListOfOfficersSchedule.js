import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import axios from "axios";

const ListOfOfficersSchedule = ({ ...props }) => {
  const [officers, setOfficers] = useState([]);
  const [search, setSearch] = useState("");
  const [workStatus, setWorkStatus] = useState(false);
  const [token, setToken] = useState(null);
  const [buildingno, setBuildingno] = useState(null);

  const getSecurityOfficersList = (buildingno, _token) => {
    var config = {
      method: "get",
      url: `https://kepah-24275.botics.co/api/v1/security-officer/?residence_building=${buildingno}`,
      headers: {
        Authorization: `token ${_token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function(response) {
        console.log(response, "reeessponse");
        let officerList = response.data;
        if (officerList && officerList.length > 0) {
          // console.log(response, "reeessponse");

          officerList.reverse();
          setOfficers(officerList);
        }
      })
      .catch(function(error) {
        console.log(error, "It's a error!!!");
      });
  };

  const updateStatus = (officer_id, status, index) => {
    var data = JSON.stringify({
      officer_working_status: status,
    });

    var config = {
      method: "patch",
      url: `https://kepah-24275.botics.co/api/v1/security-officer/${officer_id}/?residence_building=${buildingno}`,
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
        setWorkStatus(false);
        officers.splice(index, 1, response.data);
        setOfficers((officers) => [...officers]);
      })
      .catch(function(error) {
        console.log(error);
        setWorkStatus(false);
        // setSWorktatusType(option);
      });
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setBuildingno(localStorage.getItem("buildingno"));
    getSecurityOfficersList(
      localStorage.getItem("buildingno"),
      localStorage.getItem("token")
    );
  }, [localStorage.getItem("token") && localStorage.getItem("buildingno")]);

  useEffect(() => {
    let filter = officers.filter((val) => {
      console.log(val);
      if (
        search !== "" &&
        (val.name.includes(search) ||
          // val.phone.includes(search) ||
          val.email.includes(search))
      ) {
        return val;
      }
    });
    if (filter.length < 1 && search === "") {
      getSecurityOfficersList(
        localStorage.getItem("buildingno"),
        localStorage.getItem("token")
      );
    } else {
      setOfficers(filter);
    }
  }, [search]);
  return (
    <div className="list_of_officer_back">
      <div className="list_of_officer_text_input">
        <div>
          <span>List of Officers</span>
        </div>
        <div className="list_of_officers_input_div">
          <input
            type="text"
            className="list_of_officers_input"
            placeholder="Name or email...."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="list_of_officers_search_btn">
            <img src={require("../../../assets/Search.png").default} />
          </div>
        </div>
      </div>

      <div>
        <span className="recent_vacation_report_request">
          Recent Vacation Requests:
        </span>
      </div>

      <div className="recent_requests_top ">
        <div className="recent_profiles_requests">
          <div className="profile_img_name_date">
            <div>
              <img
                className="profile_name_officers"
                src={require("../../../assets/profile.png").default}
              />
            </div>
            <div className="profile_name_date">
              <span className="profile_name_list">Braylon Hensley</span>
              <span className="date_list">07/07/21 - 14/07/21</span>
            </div>
          </div>
          <div className="check_crose_div">
            <div className="check_div">
              <img
                src={require("../../../assets/check.png").default}
                className="check_img"
              />
            </div>
            <div className="crose_div">
              <img
                src={require("../../../assets/crose.png").default}
                className="crose_img"
              />
            </div>
          </div>
        </div>

        <div className="recent_profiles_requests ml-3">
          <div className="profile_img_name_date">
            <div>
              <img
                className="profile_name_officers"
                src={require("../../../assets/profile.png").default}
              />
            </div>
            <div className="profile_name_date">
              <span className="profile_name_list">Braylon Hensley</span>
              <span className="date_list">07/07/21 - 14/07/21</span>
            </div>
          </div>
          <div className="check_crose_div">
            <div className="check_div">
              <img
                src={require("../../../assets/check.png").default}
                className="check_img"
              />
            </div>
            <div className="crose_div">
              <img
                src={require("../../../assets/crose.png").default}
                className="crose_img"
              />
            </div>
          </div>
        </div>

        <div className="recent_profiles_requests ml-3">
          <div className="profile_img_name_date">
            <div>
              <img
                className="profile_name_officers"
                src={require("../../../assets/profile.png").default}
              />
            </div>
            <div className="profile_name_date">
              <span className="profile_name_list">Braylon Hensley</span>
              <span className="date_list">07/07/21 - 14/07/21</span>
            </div>
          </div>
          <div className="check_crose_div">
            <div className="check_div">
              <img
                src={require("../../../assets/check.png").default}
                className="check_img"
              />
            </div>
            <div className="crose_div">
              <img
                src={require("../../../assets/crose.png").default}
                className="crose_img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="license_scroll_div_main_page_schedule">
        <div className="officer_license_number_main_page_schedule">
          <span className="officer_text_list_main_page_schedule">officer</span>
          <span className="license_text_main_page_schedule">Work Status</span>
          <span className="phone_no_text_schedule">Phone Number</span>
          <span className="email_text_schedule">Email</span>
        </div>
        <div className="bottom_border_main_page" />

        <div className="all_names_profiles_license_div_main_page_schedule">
          {officers.map((val, ind) => {
            return (
              <div
                key={ind}
                className="officer_license_number_white_back_main_page_schedule"
                data-toggle="modal"
                data-target="#exampleModal"
                style={{ backgroundColor: ind % 2 === 0 ? "#ebf4fe" : "white" }}
              >
                <div className="profile_name_main_page_schedule">
                  <img
                    src={require("../../../assets/profile.png").default}
                    className="profile_img_main_page_schedule"
                  />
                  <span className="user_name_main_page_schedule">
                    {val.name}
                  </span>
                </div>
                {/* <div className="license_number_div_main_page"> */}
                <div className="license_text_main_page_schedule">
                  <div
                    className="work_status"
                    onClick={() =>
                      setWorkStatus(workStatus === val.id ? null : val.id)
                    }
                    style={{ background: ind % 2 === 0 ? "white" : "#ebf4fe" }}
                  >
                    <span>
                      {val.officer_working_status === ""
                        ? "Regular"
                        : val.officer_working_status}
                    </span>
                    <img
                      src={require("../../../assets/scroll-down.png").default}
                    />
                  </div>

                  {workStatus === val.id ? (
                    <div style={{ position: "relative" }}>
                      <div
                        className="work_status_choose1"
                        style={{
                          background: ind % 2 === 0 ? "white" : "#ebf4fe",
                        }}
                      >
                        <span
                          onClick={() => {
                            updateStatus(val.id, "regular", ind);
                          }}
                        >
                          Regular
                        </span>
                      </div>
                      <div
                        className="work_status_choose2"
                        onClick={() => {
                          updateStatus(val.id, "vacation", ind);
                        }}
                        style={{
                          background: ind % 2 === 0 ? "white" : "#ebf4fe",
                        }}
                      >
                        <span>Vacation</span>
                      </div>
                      <div
                        className="work_status_choose3"
                        onClick={() => {
                          updateStatus(val.id, "sick", ind);
                        }}
                        style={{
                          background: ind % 2 === 0 ? "white" : "#ebf4fe",
                        }}
                      >
                        <span>Sick</span>
                      </div>
                    </div>
                  ) : null}
                </div>
                <span className="phone_no_text_schedule">
                  {val.phone ? val.phone : "-"}
                </span>
                <span className="email_text_schedule">{val.email}</span>
                <span
                  className="make_a_schedule"
                  onClick={() => props.makeSchedule(val.id)}
                >
                  Make a Schedule
                </span>
                {/* </div> */}
              </div>
            );
          })}
          {/* <div className="officer_license_number_blue_back_main_page_schedule">
            <div className="profile_name_main_page_schedule">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page_schedule"
              />
              <span className="user_name_main_page_schedule">
                Phoenix Schaefer
              </span>
            </div>
            <div className="license_text_main_page_schedule">
              <div className="work_status_white">
                <span>Regular</span>
                <img src={require("../../../assets/scroll-down.png").default} />
              </div>
            </div>
            <span className="phone_no_text_schedule">012345678910</span>
            <span className="email_text_schedule">e.com</span>
            <span className="make_a_schedule" onClick={props.makeSchedule}>
              Make a Schedule
            </span>
          </div>

          <div
            className="officer_license_number_white_back_main_page_schedule"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_main_page_schedule">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page_schedule"
              />
              <span className="user_name_main_page_schedule">
                Phoenix Schaefer
              </span>
            </div>
            <div className="license_text_main_page_schedule">
              <div className="work_status">
                <span>Regular</span>
                <img src={require("../../../assets/scroll-down.png").default} />
              </div>
            </div>
            <span className="phone_no_text_schedule">012345678910</span>
            <span className="email_text_schedule">example.example.com</span>
            <span className="make_a_schedule" onClick={props.makeSchedule}>
              Make a Schedule
            </span>
          </div>

          <div className="officer_license_number_blue_back_main_page_schedule">
            <div className="profile_name_main_page_schedule">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page_schedule"
              />
              <span className="user_name_main_page_schedule">
                Phoenix Schaefer
              </span>
            </div>
            <div className="license_text_main_page_schedule">
              <div className="work_status_white">
                <span>Regular</span>
                <img src={require("../../../assets/scroll-down.png").default} />
              </div>
            </div>
            <span className="phone_no_text_schedule">012345678910</span>
            <span className="email_text_schedule">e.com</span>
            <span className="make_a_schedule" onClick={props.makeSchedule}>
              Make a Schedule
            </span>
          </div>

          <div
            className="officer_license_number_white_back_main_page_schedule"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_main_page_schedule">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page_schedule"
              />
              <span className="user_name_main_page_schedule">
                Phoenix Schaefer
              </span>
            </div>
            <div className="license_text_main_page_schedule">
              <div className="work_status">
                <span>Regular</span>
                <img src={require("../../../assets/scroll-down.png").default} />
              </div>
            </div>
            <span className="phone_no_text_schedule">012345678910</span>
            <span className="email_text_schedule">example.example.com</span>
            <span className="make_a_schedule" onClick={props.makeSchedule}>
              Make a Schedule
            </span>
          </div>

          <div className="officer_license_number_blue_back_main_page_schedule">
            <div className="profile_name_main_page_schedule">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page_schedule"
              />
              <span className="user_name_main_page_schedule">
                Phoenix Schaefer
              </span>
            </div>
            <div className="license_text_main_page_schedule">
              <div className="work_status_white">
                <span>Regular</span>
                <img src={require("../../../assets/scroll-down.png").default} />
              </div>
            </div>
            <span className="phone_no_text_schedule">012345678910</span>
            <span className="email_text_schedule">e.com</span>
            <span className="make_a_schedule" onClick={props.makeSchedule}>
              Make a Schedule
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ListOfOfficersSchedule;
