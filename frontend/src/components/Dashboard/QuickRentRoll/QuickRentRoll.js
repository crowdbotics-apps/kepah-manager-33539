import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

const QuickRentRoll = ({ ...props }) => {
  const [rentRoll, setRentRoll] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const getRentRoll = (buildingno, _token) => {
    var config = {
      method: "get",
      url: `https://kepah-24275.botics.co/api/v1/resident/?residence_building=${buildingno}`,
      headers: {
        Authorization: `token ${_token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function(response) {
        // console.log(response, "reeessponse");
        let rentRoll = response.data;

        // if (rentRoll && rentRoll.length > 0) {
        console.log(rentRoll, "reeessponse-rent");

        //   rentRoll.reverse();
        setRentRoll(rentRoll);
        setFiltered(rentRoll);

        // }
      })
      .catch(function(error) {
        console.log(error, "It's a error!!!");
      });
  };

  useEffect(() => {
    getRentRoll(
      localStorage.getItem("buildingno"),
      localStorage.getItem("token")
    );
    // setToken(localStorage.getItem("token"));
  }, [localStorage.getItem("token") && localStorage.getItem("buildingno")]);

  useEffect(() => {
    let filter = rentRoll.filter((val) => {
      if (search !== "" && val.name && val.name.includes(search)) {
        return val;
      }
    });
    if (filter.length < 1 && search === "") {
      setRentRoll(rentRoll);
    } else {
      setRentRoll(filter);
    }
    if (search === "") {
      getRentRoll(
        localStorage.getItem("buildingno"),
        localStorage.getItem("token")
      );
    }
  }, [search]);

  return (
    <div className="quick_rent_roll_main">
      <div className="list_of_officers_manage_div">
        <div>
          <span className="list_of_officers_text">Quick Rent Roll</span>
        </div>
        <div className="quick_input_div">
          <input
            type="text"
            className="quick_input"
            placeholder="Enter Name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div
          onClick={() => {
            props.history.push("rentroll");
          }}
        >
          <span className="manage_officers_text">Visit</span>
        </div>
      </div>
      <div className="rent_scroll_div">
        <div className="quick_rent_roll">
          <div className="resident_div">
            <span className="resident_text">Resident</span>
          </div>
          <div className="apt_vehicle_div">
            <span className="apt_text">Apt. Number</span>
            <span className="vehicle_text">Vehicle Info</span>
          </div>
        </div>
        <div className="bottom_border" />
        <div className="all_names_profiles_rent_div">
          {rentRoll && rentRoll.length > 0 ? (
            rentRoll.map((val, ind) => {
              return (
                <div
                  className="quick_rent_roll_white_back"
                  style={{
                    backgroundColor: ind % 2 !== 0 ? "#ebf4fe" : "white",
                  }}
                >
                  <div className="profile_name">
                    <img
                      src={require("../../../assets/profile.png").default}
                      className="profile_img"
                    />
                    <span className="user_name">
                      {val.name ? val.name : "-"}
                    </span>
                  </div>
                  <div className="apt_vehicle_no_div">
                    <span className="apt_no">{val.apt ? val.apt : "-"}</span>
                    <span className="veh_no">
                      {val.vehicle ? val.vehicle : "-"}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no_resident_found_div">
              <div className="no_resident_found">No residents found</div>
            </div>
          )}

          {/* <div className="quick_rent_roll_blue_back">
            <div className="profile_name">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img"
              />
              <span className="user_name">Phoenix Schaefer</span>
            </div>
            <div className="apt_vehicle_no_div">
              <span className="apt_no">23</span>
              <span className="veh_no">EFK9VG</span>
            </div>
          </div>

          <div className="quick_rent_roll_white_back">
            <div className="profile_name">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img"
              />
              <span className="user_name">Phoenix Schaefer</span>
            </div>
            <div className="apt_vehicle_no_div">
              <span className="apt_no">23</span>
              <span className="veh_no">EFK9VG</span>
            </div>
          </div>

          <div className="quick_rent_roll_blue_back">
            <div className="profile_name">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img"
              />
              <span className="user_name">Phoenix Schaefer</span>
            </div>
            <div className="apt_vehicle_no_div">
              <span className="apt_no">23</span>
              <span className="veh_no">EFK9VG</span>
            </div>
          </div>

          <div className="quick_rent_roll_white_back">
            <div className="profile_name">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img"
              />
              <span className="user_name">Phoenix Schaefer</span>
            </div>
            <div className="apt_vehicle_no_div">
              <span className="apt_no">23</span>
              <span className="veh_no">EFK9VG</span>
            </div>
          </div>

          <div className="quick_rent_roll_blue_back">
            <div className="profile_name">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img"
              />
              <span className="user_name">Phoenix Schaefer</span>
            </div>
            <div className="apt_vehicle_no_div">
              <span className="apt_no">23</span>
              <span className="veh_no">EFK9VG</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default QuickRentRoll;
