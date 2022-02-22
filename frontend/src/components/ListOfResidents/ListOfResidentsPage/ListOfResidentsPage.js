import React, { useState, useEffect } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Popover, OverlayTrigger } from "react-bootstrap";
const EditManager = ({ ...props }) => {
  const [showFade, setShowFade] = useState(null);
  const [showPhoneNum, setShowPhoneNum] = useState(null);
  const [showEmail, setShowEmail] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const [editManager, setEditManager] = useState([1]);
  const [token, setToken] = useState(null);

  return (
    <div>
      <div className="list_of_officers_manage_div_main_page">
        <div>
          <span className="list_of_officers_text_main_page">List of Residents</span>
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
        <Form className="form_inline_criminal">
          <Button
            className="add_new_resident_btn"
            variant="primary"
            type="submit"
            onClick={() => props.setResident()}
          >
            ADD NEW RESIDENT
          </Button>
        </Form>
      </div>

      <div className="">
        <div className="officer_license_number_main_page">
          <span className="resident_page_text">Resident</span>
          <span className="apt_num_text_resident">Apt. Number</span>
          <span className="phone_number_text_resident">Tenants</span>
          <span className="email_text_resident">Email</span>
          <span className="vehicle_text_resident">Vehicle Info</span>

        </div>
        <div className="bottom_border_main_page" />

        <div className="all_criminal_trespass_lists">
          {editManager.map((val, ind) => {
            return (
              <div
                className="officer_license_number_white_back_main_page"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <div className="profile_name_resident_page">
                  <img
                    src={require("../../../assets/profile.png").default}
                    className="profile_img_main_page"
                  />
                  <span className="user_name_main_page">
                    {val.name ? val.name : "Username not defined"}
                  </span>
                </div>

                <span className="apt_num_text_resident">70</span>
                <span className="phone_number_text_resident">13</span>

                <span className="email_text_resident">e.kepah.com</span>
                <span className="vehicle_text_resident">XYZ145</span>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EditManager;
