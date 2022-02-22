import React, { useState, useEffect } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Popover, OverlayTrigger } from "react-bootstrap";
const RentRollPage = () => {
  const [showFade, setShowFade] = useState(null);
  const [showPhoneNum, setShowPhoneNum] = useState(null);
  const [showEmail, setShowEmail] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const [rentRoll, setRentRoll] = useState([]);
  const [token, setToken] = useState(null);

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
        console.log(response, "reeessponse");

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

  const popover = (
    <Popover id="popover-basic" className="main-popup">
      <div className="popup_header_background">
        <span className="incident_popup_text">Apt. Number 70</span>
      </div>
      {/* <Popover.Body> */}
      <div className="rent_roll_popup_background">
        <div>
          <p className="resident_information">Resident Information</p>
          <div className="resident_information_div">
            <div>
              <img
                className="popup_prfile_img"
                src={require("../../../assets/profile.png").default}
              />
            </div>
            <div className="resident_name_information">
              <span className="resident_name">Phoenix Schaefer</span>
              <span className="resident_email">email@website.com</span>
              <span className="resident_phone_no">023457899</span>
            </div>
          </div>
        </div>
        <div className="bottom_border_rent_popup" />

        <div>
          <p className="resident_information">Occupants</p>
          <div className="occupants_div">
            <div className="resident_information_div">
              <div>
                <img
                  className="resident_profile_img_div"
                  src={require("../../../assets/profile.png").default}
                />
              </div>
              <div className="resident_name_information">
                <span className="resident_name">Braylon Hensley</span>
                <span className="resident_email">*Emergency Person</span>
              </div>
            </div>

            <div className="resident_information_div">
              <div>
                <img
                  className="resident_profile_img_div"
                  src={require("../../../assets/profile.png").default}
                />
              </div>
              <div className="resident_name_information occupants_profile">
                <span className="resident_name">Braylon Hensley</span>
                <span className="resident_email">*Emergency Person</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom_border_rent_popup" />

        <div>
          <p className="resident_information">Visitors</p>
          <div className="occupants_div">
            <div className="resident_information_div">
              <div>
                <img
                  className="resident_profile_img_div"
                  src={require("../../../assets/profile.png").default}
                />
              </div>
              <div className="resident_name_information">
                <span className="resident_name">Braylon Hensley</span>
                <span className="resident_email">*Emergency Person</span>
              </div>
            </div>

            <div className="resident_information_div">
              <div>
                <img
                  className="resident_profile_img_div"
                  src={require("../../../assets/profile.png").default}
                />
              </div>
              <div className="resident_name_information occupants_profile">
                <span className="resident_name">Braylon Hensley</span>
                <span className="resident_email">*Emergency Person</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </Popover.Body> */}
    </Popover>
  );

  return (
    <div>
      <div className="list_of_officers_manage_div_main_page">
        <div>
          <span className="list_of_officers_text_main_page">Rent Roll</span>
        </div>
      </div>

      <div className="criminal_input_div">
        <input
          type="text"
          className="rent_input"
          placeholder="Full Name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          className="rent_input"
          placeholder="Apartment Number"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="criminal_search_btn">
          <img src={require("../../../assets/Search.png").default} />
        </div>
      </div>

      <div className="">
        <div className="officer_license_number_main_page">
          <span className="resident_rent_roll_text">Resident</span>
          <span className="apt_num_text_rent">Apt. Number</span>
          <span className="phone_number_text_rent">Phone Number</span>
          <span className="email_text_rent">Email</span>
          <span className="vehicle_text_rent">Vehicle Info</span>
        </div>
        <div className="bottom_border_main_page" />

        <div className="all_criminal_trespass_lists">
          {rentRoll && rentRoll.length > 0 ? (
            rentRoll.map((val, ind) => {
              return (
                <div
                  className="officer_license_number_white_back_main_page"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <div className="profile_name_rent_page">
                    <img
                      src={require("../../../assets/profile.png").default}
                      className="profile_img_main_page"
                    />
                    <span className="user_name_main_page">
                      {val.name ? val.name : "Username not defined"}
                    </span>
                  </div>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={popover}
                    show={showFade === ind + 1 ? true : false}
                    onToggle={() => setShowFade(ind + 1)}
                    className="apt_num_text"
                  >
                    <span className="apt_num_text">70</span>
                  </OverlayTrigger>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={popover}
                    show={showPhoneNum === ind + 1 ? true : false}
                    onToggle={() => setShowPhoneNum(ind + 1)}
                    className="apt_num_text"
                  >
                    <span className="phone_number_text">012345678910</span>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={popover}
                    show={showEmail === ind + 1 ? true : false}
                    onToggle={() => {
                      setShowEmail(ind + 1);
                      // setShowEmail(showEmail === val.id ? null : val.id);
                    }}
                    className="apt_num_text"
                  >
                    <span className="email_text_rent_roll">e.kepah.com</span>
                  </OverlayTrigger>
                  <span className="vehicle_info_text_rent_roll">0123SDF</span>
                </div>
              );
            })
          ) : (
            <div className="no_resident_found_div">
              <div className="no_resident_found">No residents found</div>
            </div>
          )}
          {showFade || showEmail || showPhoneNum ? (
            <div
              onClick={() => {
                setShowFade(false);
                setShowEmail(false);
                setShowPhoneNum(false);
              }}
              className="fade-class"
            ></div>
          ) : null}
          {/* <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_rent_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="apt_num_text">70</span>
            <span className="phone_number_text">012345678910</span>
            <span className="email_text_rent_roll">e.kepah.com</span>
            <span className="vehicle_info_text_rent">0123SDF</span>
          </div>
          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_rent_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="apt_num_text">70</span>
            <span className="phone_number_text">012345678910</span>
            <span className="email_text_rent_roll">e.kepah.com</span>
            <span className="vehicle_info_text_rent">0123SDF</span>
          </div>
          <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_rent_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="apt_num_text">70</span>
            <span className="phone_number_text">012345678910</span>
            <span className="email_text_rent_roll">e.kepah.com</span>
            <span className="vehicle_info_text_rent">0123SDF</span>
          </div>
          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_rent_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="apt_num_text">70</span>
            <span className="phone_number_text">012345678910</span>
            <span className="email_text_rent_roll">e.kepah.com</span>
            <span className="vehicle_info_text_rent">0123SDF</span>
          </div>
          <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_rent_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="apt_num_text">70</span>
            <span className="phone_number_text">012345678910</span>
            <span className="email_text_rent_roll">e.kepah.com</span>
            <span className="vehicle_info_text_rent">0123SDF</span>
          </div>
          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_rent_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="apt_num_text">70</span>
            <span className="phone_number_text">012345678910</span>
            <span className="email_text_rent_roll">e.kepah.com</span>
            <span className="vehicle_info_text_rent">0123SDF</span>
          </div>
          <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_rent_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="apt_num_text">70</span>
            <span className="phone_number_text">012345678910</span>
            <span className="email_text_rent_roll">e.kepah.com</span>
            <span className="vehicle_info_text_rent">0123SDF</span>
          </div>
          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_rent_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="apt_num_text">70</span>
            <span className="phone_number_text">012345678910</span>
            <span className="email_text_rent_roll">e.kepah.com</span>
            <span className="vehicle_info_text_rent">0123SDF</span>
          </div>
          <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_rent_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="apt_num_text">70</span>
            <span className="phone_number_text">012345678910</span>
            <span className="email_text_rent_roll">e.kepah.com</span>
            <span className="vehicle_info_text_rent">0123SDF</span>
          </div>
          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_rent_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="apt_num_text">70</span>
            <span className="phone_number_text">012345678910</span>
            <span className="email_text_rent_roll">e.kepah.com</span>
            <span className="vehicle_info_text_rent">0123SDF</span>
          </div> 
                <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_rent_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="apt_num_text">70</span>
            <span className="phone_number_text">012345678910</span>
            <span className="email_text_rent_roll">e.kepah.com</span>
            <span className="vehicle_info_text_rent">0123SDF</span>
          </div>
          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_rent_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="apt_num_text">70</span>
            <span className="phone_number_text">012345678910</span>
            <span className="email_text_rent_roll">e.kepah.com</span>
            <span className="vehicle_info_text_rent">0123SDF</span>
    </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default RentRollPage;
