import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const CriminalTrespassListPage = () => {
  const [criminalTrespass, setCriminalTrespass] = useState([]);
  const [token, setToken] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const getCriminalTrespass = (buildingno, _token) => {
    var config = {
      method: "get",
      url: `https://kepah-24275.botics.co/api/v1/criminal-status/?residence_building=${buildingno}`,
      headers: {
        Authorization: `token ${_token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function(response) {
        let criminalTrespass = response.data;
        console.log(response.data);
        setCriminalTrespass(criminalTrespass);
        setFiltered(criminalTrespass);
      })
      .catch(function(error) {
        console.log(error, "It's a error!!!");
      });
  };

  useEffect(() => {
    getCriminalTrespass(
      localStorage.getItem("buildingno"),
      localStorage.getItem("token")
    );
    setToken(localStorage.getItem("token"));
  }, [localStorage.getItem("token") && localStorage.getItem("buildingno")]);

  useEffect(() => {
    let filter = criminalTrespass.filter((val) => {
      if (search !== "" && val.name.includes(search)) {
        return val;
      }
    });
    if (filter.length < 1 && search === "") {
      setCriminalTrespass(criminalTrespass);
    } else {
      setCriminalTrespass(filter);
    }
  }, [search]);

  return (
    <div>
      <div className="list_of_officers_manage_div_main_page">
        <div>
          <span className="list_of_officers_text_main_page">
            Criminal Treapass List
          </span>
        </div>
      </div>

      <div className="criminal_input_div">
        <input
          type="text"
          className="criminal_input"
          placeholder="Name or Date of Birth...."
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
          <span className="name_text_manager_criminal">Name</span>
          <span className="added_text_manager_criminal">Added on</span>
          <span className="added_text_manager_criminal">Added by</span>
          <span className="status_text_manager_criminal">Status</span>
        </div>
        <div className="bottom_border_main_page" />

        <div className="all_criminal_trespass_lists">
          {criminalTrespass.map((val, ind) => {
            return (
              <div
                key={ind}
                className="officer_license_number_white_back_main_page"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <div className="name_text_manager_criminal">
                  {!val.user_details.profile_picture ? (
                    <img
                      src={require("../../../assets/profile.png").default}
                      className="profile_img_main_page"
                    />
                  ) : (
                    <img
                      src={val.user_details.profile_picture}
                      className="profile_img_main_page"
                    />
                  )}
                  <span className="user_name_main_page">
                    {val.user_details.name ? val.user_details.name : "-"}
                  </span>
                </div>
                <span className="added_text_manager_criminal">
                  {/* {val.user_details.dob} */}
                  {new Date(val.user_details.date_joined).getDate()}/
                  {new Date(val.user_details.date_joined).getMonth() + 1}/
                  {new Date(val.user_details.date_joined).getFullYear()}
                </span>
                <span className="added_text_manager_criminal">
                  {val.marked_by}
                  {/* {new Date(val.updated_at).getDate()}/
                  {new Date(val.updated_at).getMonth() + 1}/
                  {new Date(val.updated_at).getFullYear()} */}
                </span>
                <span className="status_text_manager_criminal">
                  {val.criminal_status === true ? "Active" : "Not Active"}
                </span>
                <span className="remove_text_manager_criminal">Remove</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CriminalTrespassListPage;













