import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-notifications/lib/notifications.css";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const AddNewResident = ({ ...props }) => {
  return (
    <div className="add_new_resident_back">
      <div className="add_new_resident_background_color">
        <div className="add_new_resident_name_img_div">
          <h3 className="add_new_resident_text">Add New Resident</h3>
          <p className="upload_csv_text">Upload CSV file</p>
        </div>
        <div className="input_fields_div">
          <div>
            <label className="phone_label">Name:</label>
            <div className="phone_input_div">
              <div className="phone_input_field_div">
                <input className="phone_input_field" type="text" />
              </div>
            </div>
          </div>

          <div>
            <label className="phone_label">Apartment number:</label>
            <div className="phone_input_div">
              <div className="phone_input_field_div">
                <input className="phone_input_field" type="text" />
              </div>
            </div>
          </div>

          <div>
            <label className="phone_label">Tennants:</label>
            <div className="phone_input_div">
              <div className="phone_input_field_div">
                <input className="phone_input_field" type="text" />
              </div>
            </div>
          </div>

          <Form className="edit_resident_profile_save_button_div">
            <Button
              className="edit_resident_profile_save_button"
              variant="primary"
              onClick={() => props.closeAddNewResident()}
            >
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddNewResident;
