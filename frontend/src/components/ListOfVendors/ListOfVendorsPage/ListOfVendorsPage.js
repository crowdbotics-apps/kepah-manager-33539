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
          <span className="list_of_officers_text_main_page">
            Lists of Vendors
          </span>
        </div>
      </div>

      <div className="criminal_input_div">
        <input
          type="text"
          className="name_search_vendors"
          placeholder="Name or License Number..."
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
            onClick={() => props.vendor()}
          >
            ADD NEW VENDOR
          </Button>
        </Form>
      </div>

      <div className="">
        <div className="officer_license_number_main_page">
          <span className="list_vendors_officer_text">Officer</span>
          <span className="company_name_text">Company Name</span>
          <span className="phone_number_text_vendors">Phone Number</span>
          <span className="email_text_vendors">Email</span>
          <span className="arrival_time_vendors">Time Arrival</span>
          <span className="departure_time_vendors">Time Departure</span>
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
                <div className="profile_name_img_vendors">
                  <img
                    src={require("../../../assets/profile.png").default}
                    className="profile_img_main_page"
                  />
                  <span className="user_name_main_page">
                    {val.name ? val.name : "Username not defined"}
                  </span>
                </div>

                <span className="vendors_list_company_name">70</span>
                <span className="vendors_list_phone_number">012345678910</span>

                <span className="vendors_list_email_text">e.kepah.com</span>
                <span className="vendors_list_time_arrival_Text">
                  e.kepah.com
                </span>
                <span className="vendors_list_time_departure">e.kepah.com</span>

                <div
                  className="download_vendor_img_div"
                  onClick={() => props.setManager()}
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
                  </div>{" "}
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
