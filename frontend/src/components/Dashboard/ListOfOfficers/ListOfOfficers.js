import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

const ListOfOfficers = ({ ...props }) => {
  const [officerList, setOfficerList] = useState([]);
  const [token, setToken] = useState(null);

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
        // console.log(response, "reeessponse");
        let officerList = response.data;
        if (officerList && officerList.length > 0) {
          // console.log(response, "reeessponse");

          officerList.reverse();
          setOfficerList(officerList);
        }
      })
      .catch(function(error) {
        console.log(error, "It's a error!!!");
      });
  };
  useEffect(() => {
    getSecurityOfficersList(
      localStorage.getItem("buildingno"),
      localStorage.getItem("token")
    );
    setToken(localStorage.getItem("token"));
  }, [localStorage.getItem("token") && localStorage.getItem("buildingno")]);

  return (
    <div className="list_of_officers_main">
      <div className="list_of_officers_manage_div">
        <div>
          <span className="list_of_officers_text">List of Officers</span>
        </div>
        <div
          onClick={() => {
            props.history.push("officerschedule");
          }}
        >
          <span className="manage_officers_text">Manage Officers</span>
        </div>
      </div>
      <div className="license_scroll_div">
        <div className="officer_license_number">
          <span className="officer_text_list">officer</span>
          <span className="license_text">License Number</span>
        </div>
        <div className="bottom_border" />

        <div className="all_names_profiles_license_div">
          {officerList.map((val, ind) => {
            return (
              <div key={ind} className="officer_license_number_white_back"
              style={{ backgroundColor: ind % 2 !== 0 ? "#ebf4fe" : "white" }}
              >
                <div className="profile_name">
                  <img
                    src={require("../../../assets/profile.png").default}
                    className="profile_img"
                  />
                  <span className="user_name">
                    {val.name.length > 15
                      ? `${val.name.slice(0, 15)}...`
                      : val.name}
                  </span>
                </div>
                <div className="license_number_div">
                  <span className="license_text">
                    {" "}
                    {val.license_number ? val.license_number : "-"}
                  </span>
                </div>
              </div>
            );
          })}
          {/* <div className="officer_license_number_blue_back">
            <div className="profile_name">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img"
              />
              <span className="user_name">Phoenix Schaefer</span>
            </div>
            <div className="license_number_div">
              <span className="license_text">CL5QZC</span>
            </div>
          </div>

          <div className="officer_license_number_white_back">
            <div className="profile_name">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img"
              />
              <span className="user_name">Phoenix Schaefer</span>
            </div>
            <div className="license_number_div">
              <span className="license_text">CL5QZC</span>
            </div>
          </div>

          <div className="officer_license_number_blue_back">
            <div className="profile_name">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img"
              />
              <span className="user_name">Phoenix Schaefer</span>
            </div>
            <div className="license_number_div">
              <span className="license_text">CL5QZC</span>
            </div>
          </div>

          <div className="officer_license_number_white_back">
            <div className="profile_name">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img"
              />
              <span className="user_name">Phoenix Schaefer</span>
            </div>
            <div className="license_number_div">
              <span className="license_text">CL5QZC</span>
            </div>
          </div>

          <div className="officer_license_number_blue_back">
            <div className="profile_name">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img"
              />
              <span className="user_name">Phoenix Schaefer</span>
            </div>
            <div className="license_number_div">
              <span className="license_text">CL5QZC</span>
            </div>
          </div>

          <div className="officer_license_number_white_back">
            <div className="profile_name">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img"
              />
              <span className="user_name">Phoenix Schaefer</span>
            </div>
            <div className="license_number_div">
              <span className="license_text">CL5QZC</span>
            </div>
          </div>

          <div className="officer_license_number_blue_back">
            <div className="profile_name">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img"
              />
              <span className="user_name">Phoenix Schaefer</span>
            </div>
            <div className="license_number_div">
              <span className="license_text">CL5QZC</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ListOfOfficers;
