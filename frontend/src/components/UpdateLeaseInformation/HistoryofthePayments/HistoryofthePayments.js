import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ListOfOfficersSchedule = ({ ...props }) => {
  const [officers, setOfficers] = useState([]);
  const [search, setSearch] = useState("");
  const [workStatus, setWorkStatus] = useState(false);
  const [token, setToken] = useState(null);
  const [buildingno, setBuildingno] = useState(null);
  const [appartments, setAppartments] = useState([1, 1, 1, 1]);

  return (
    <div className="list_of_apartment_background">
      <div className="list_of_officers_manage_div_main_page">
        <div>
          <span className="list_of_officers_text_main_page">
            Lists of the Apartments
          </span>
        </div>
      </div>

      <div className="criminal_input_div">
        <input
          type="text"
          className="apartment_input"
          placeholder="Name or date..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="criminal_search_btn">
          <img src={require("../../../assets/Search.png").default} />
        </div>
      </div>

      <div className="">
        <div className="list_of_apartments_main_div">
          <span className="apartment_page_text">Name</span>
          <span className="apt_number_apartment">Apt,. Number</span>
          <span className="apartment_rent_amount">Rent Amount</span>
          <span className="apartment_status">Status</span>
        </div>
        <div className="bottom_border_main_page" />

        <div className="all_list_of_apartments_list">
          {appartments.map((val, ind) => {
            return (
              <div
                className="list_of_apartments_div"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <div className="name_apartment_div">
                  <img
                    src={require("../../../assets/profile.png").default}
                    className="profile_img_main_page"
                  />
                  <span className="user_name_main_page">
                    {val.name ? val.name : "Username not defined"}
                  </span>
                </div>

                <span className="apt_number_apartment_text">13</span>

                <span className="rent_amount_apartment_text">e.kepah.com</span>
                <span className="status_text_apartment">XYZ145</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListOfOfficersSchedule;
