import React, { useState } from "react";
import "./style.css";

const Request = () => {
  const [requests, setRequests] = useState([1, 3, 5, 6, 6, 7]);

  return (
    <div className="requests_main_page_background">
      {requests.map(() => {
        return (
          <div className="">
            <div className="request_no_status_div">
              <p className="request_no_text">Request #03456</p>
              <div className="request_status">
                <span className="status_text">Status: </span>
                <span className="status_completed">Completed</span>
                <div className="checked_img_div">
                  <img
                    className="checked_img"
                    src={require("../../../assets/checked.png").default}
                  />
                </div>
              </div>
            </div>
            <div className="request_fields_main_div">
              <div className="request_input_div">
                <label className="phone_label">Request:</label>
                <div className="phone_input_div">
                  <div className="phone_input_field_div">
                    <input className="phone_input_field" type="text" />
                  </div>
                </div>
              </div>

              <div className="request_input_div">
                <label className="details_label">Details:</label>
                <div className="details_input_div">
                  <div className="details_input_field_div">
                    <textarea
                      className="details_input_field"
                      type="textarea"
                      rows={5}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="phone_label">Date:</label>
                <div className="company_dropdown">
                  <div className="phone_input_field_div">
                    <p>04/07/2021</p>
                    <img
                      className="manager-calendar"
                      src={
                        require("../../../assets/manager-calendar.png").default
                      }
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="phone_label">Assigned to:</label>
                <div className="company_dropdown">
                  <div className="phone_input_field_div">
                    <p>Maintenance Person 02</p>
                    <img
                      className="dropdown-request"
                      src={
                        require("../../../assets/manager-request-dropdown.png")
                          .default
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border_bottom_requests" />
          </div>
        );
      })}
    </div>
  );
};

export default Request;
