import React, { useState, useEffect } from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { name } from "faker";
const ListOfOfficers = () => {
  const [officerList, setOfficerList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
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
        console.log(response, "reeessponse");
        let officerList = response.data;
        if (officerList && officerList.length > 0) {
          // console.log(response, "reeessponse");

          officerList.reverse();
          setOfficerList(officerList);
          setFiltered(officerList);
        }
      })
      .catch(function(error) {
        console.log(error, "It's a error!!!");
      });
  };

  // useEffect(() => {
  //   getSecurityOfficersList();
  // }, []);

  useEffect(() => {
    getSecurityOfficersList(
      localStorage.getItem("buildingno"),
      localStorage.getItem("token")
    );
    setToken(localStorage.getItem("token"));
  }, [localStorage.getItem("token") && localStorage.getItem("buildingno")]);

  useEffect(() => {
    let filter = officerList.filter((val) => {
      if (search !== "" && val.name.includes(search)) {
        return val;
      }
   
    });
    if (filter.length < 1 && search === "") {
      setOfficerList(officerList);
    } else {
      setOfficerList(filter);
    }
    if (search === "") {
      getSecurityOfficersList(
        localStorage.getItem("buildingno"),
        localStorage.getItem("token")
      );
    }
  }, [search]);

  // const handleSearch = (e) => {
  //   setFiltered(e.target.value);
  // };

  return (
    <div>
      <div className="list_of_officers_manage_div_main_page">
        <div>
          <span className="list_of_officers_text_main_page">
            List of Officers
          </span>
        </div>
      </div>

      <div className="list_of_officers_input_div">
        <input
          type="text"
          className="list_of_officers_input"
          placeholder="Name or License No...."
          onChange={(e) => setSearch(e.target.value)}
          // value={(e) => e.target.val}
        />
        <div className="list_of_officers_search_btn">
          <img src={require("../../../assets/Search.png").default} />
        </div>
      </div>

      <div className="license_scroll_div_main_page">
        <div className="officer_license_number_main_page">
          <span className="officer_text_list_main_page">officer</span>
          <span className="license_text_main_page">License Number</span>
          <span className="phone_no_text">Phone Number</span>
          <span className="email_text">Email</span>
        </div>
        <div className="bottom_border_main_page" />

        <div className="all_names_profiles_license_div_main_page">
          {officerList.map((val, ind) => {
            return (
              <div
                key={ind}
                className="officer_license_number_white_back_main_page"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <div className="profile_name_main_page">
                  <img
                    src={require("../../../assets/profile.png").default}
                    className="profile_img_main_page"
                  />
                  <span className="user_name_main_page">{val.name}</span>
                </div>
                {/* <div className="license_number_div_main_page"> */}
                <span className="license_text_main_page">
                  {val.license_number ? val.license_number : "-"}
                </span>
                <span className="phone_no_text">
                  {val.phone_number ? val.phone_number : "-"}
                </span>
                <span className="email_text">{val.email}</span>

                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bottom_border_list" />
    </div>
  );
};

export default ListOfOfficers;
