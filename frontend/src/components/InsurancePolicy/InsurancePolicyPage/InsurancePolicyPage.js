import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-notifications/lib/notifications.css";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const EditResident = ({ ...props }) => {
  return (
    <div className="edit_manager_back">
      <div className="insurance_policy_background_color">
        <div className="">
          <h6>Insurance Policy</h6>
        </div>

        <div className="input_fields_insurance_div">
          <div className="insurance_policy_field">
            <label className="phone_label">Upload date:</label>
            <div className="phone_input_div">
              <div className="phone_input_field_div">
                <span>07/02/2021</span>
                <img
                  src={require("../../../assets/manager-calendar.png").default}
                />
              </div>
            </div>
          </div>

          <div className="insurance_policy_field">
            <label className="upload_pdf_label">Upload PDF file below:</label>
            <div className="upload_pdf_div">
              <div className="upload_pdf_field_div">
                <img
                  src={require("../../../assets/manager-arrow-up.png").default}
                />
                <img
                  src={
                    require("../../../assets/manager-arrow-bottom.png").default
                  }
                />
              </div>
            </div>
          </div>

          <Form className="insurance_policy_profile_save_button_div">
            <Button
              className="insurance-policy-btn"
              variant="primary"
              onClick={() => props.closeEditTenant()}
            >
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditResident;
