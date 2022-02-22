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
      <div className="edit_manager_background_color">
        <div className="edit_manager_name_img_div">
          <h3 className="edit_manager_text">Police Contact Information</h3>
          <img
            className="manager_profile_img"
            src={require("../../../assets/profile.png").default}
          />
          <p className="upload_photo_text_police_liasion">Upload new photo</p>
        </div>
        <div className="input_fields_div">
          <div>
            <label className="phone_label">Phone Number:</label>
            <div className="phone_input_div">
              <div className="phone_input_field_div">
                <input className="phone_input_field" type="text" />
                <img src={require("../../../assets/edit.png").default} />
              </div>
            </div>
          </div>


          <div>
            <label className="phone_label">Email:</label>
            <div className="phone_input_div">
              <div className="phone_input_field_div">
                <input className="phone_input_field" type="text" />
                <img src={require("../../../assets/edit.png").default} />
              </div>
            </div>
          </div>

          <Form className="edit_resident_profile_save_button_div">
            <Button
              className="edit_resident_profile_save_button"
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
