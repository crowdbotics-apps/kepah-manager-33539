import React, { useState } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const SexOffendersPage = () => {
  return (
    <div>
      <div className="list_of_officers_manage_div_main_page">
        <div>
          <span className="list_of_officers_text_main_page">
            Sex Offenders
          </span>
        </div>
      </div>

      <div className="criminal_input_div">
        <input
          type="text"
          className="criminal_input"
          placeholder="Name or Date of Birth...."
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
          <span className="name_text_main_page">Name</span>
          <span className="date_of_birth_text">Date of Birth</span>
          <span className="criminal_trespass_text">Criminal Trespass</span>
        </div>
        <div className="bottom_border_main_page" />

        <div className="all_criminal_trespass_lists">
          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_white_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>

          <div
            className="officer_license_number_blue_back_main_page"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="profile_name_criminal_page">
              <img
                src={require("../../../assets/profile.png").default}
                className="profile_img_main_page"
              />
              <span className="user_name_main_page">Phoenix Schaefer</span>
            </div>
            <span className="date_of_birth_main_page">CL5QZC</span>
            <span className="criminal_main_date">012345678910</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SexOffendersPage;
