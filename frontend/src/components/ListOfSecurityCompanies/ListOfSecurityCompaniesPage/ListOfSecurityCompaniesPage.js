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
            Lists of Managers
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
          <span className="list_security_officer_text">Compny Name</span>
          <span className="email_text_security_companies">Email</span>
          <span className="phone_number_text_security">Address</span>
          <span className="email_text_security">Phone</span>
          <span className="arrival_time_security">Insurance Certificate</span>
        </div>
        <div className="bottom_border_main_page" />

        <div className="all_security_companies_lists">
          {editManager.map((val, ind) => {
            return (
              <div
                className="officer_license_number_white_back_main_page"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <div className="profile_name_img_security">
                  <span className="user_name_main_page_security">
                    {val.name ? val.name : "company Name"}
                  </span>
                </div>

                <span className="list_of_security_company_name">
                  abc@gmail.com
                </span>
                <span className="list_of_security_phone_number">
                  Lorem Ipsum
                </span>

                <span className="list_of_security_email_text">098765432</span>
                <span className="list_of_security_time_arrival_Text">
                  #3456789
                </span>

                <div
                  className="download_vendor_img_div_i"
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
