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
          <span className="list_of_officers_text_main_page">Lists of Managers</span>
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
            className="save_btn_add_criminal"
            variant="primary"
            type="submit"
          >
            ADD NEW PERSON
          </Button>
        </Form>
      </div>

      <div className="">
        <div className="officer_license_number_main_page">
          <span className="resident_rent_roll_text">Name</span>
          <span className="apt_num_text_rent">Email</span>
          <span className="phone_number_text_rent">Phone Number</span>
          <span className="email_text_rent">ID Badge</span>
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
                <div className="profile_name_rent_page">
                  <img
                    src={require("../../../assets/profile.png").default}
                    className="profile_img_main_page"
                  />
                  <span className="user_name_main_page">
                    {val.name ? val.name : "Username not defined"}
                  </span>
                </div>

                <span className="apt_num_text">70</span>
                <span className="phone_number_text">012345678910</span>

                <span className="email_text_rent_roll">e.kepah.com</span>
                <div
                  className="vehicle_info_text_rent"
                  onClick={() => props.setManager()}
                >
                  <img src={require("../../../assets/edit.png").default} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EditManager;
