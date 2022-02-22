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
          <h6>Add/Remove Logo</h6>
        </div>

        <div className="input_fields_insurance_div">
          <div className="insurance_policy_field">
            <div className="current_logo_remove_div">
              <label className="upload_pdf_label">Current logo:</label>
              <span className="remove_text">Remove</span>
            </div>

            <div className="forest_cove_img_div">
              <div className="upload_pdf_field_div">
                <img
                  src={
                    require("../../../assets/forest-logo-manager.png").default
                  }
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
