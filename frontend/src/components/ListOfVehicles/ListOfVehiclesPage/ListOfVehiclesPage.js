import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const CriminalTrespassListPage = () => {
  const [criminalTrespass, setCriminalTrespass] = useState([1]);
  const [token, setToken] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  // const getCriminalTrespass = (buildingno, _token) => {
  //   var config = {
  //     method: "get",
  //     url: `https://kepah-24275.botics.co/api/v1/criminal-status/?residence_building=${buildingno}`,
  //     headers: {
  //       Authorization: `token ${_token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   axios(config)
  //     .then(function(response) {
  //       let criminalTrespass = response.data;
  //       setCriminalTrespass(criminalTrespass);
  //       setFiltered(criminalTrespass);
  //     })
  //     .catch(function(error) {
  //       console.log(error, "It's a error!!!");
  //     });
  // };

  // useEffect(() => {
  //   getCriminalTrespass(
  //     localStorage.getItem("buildingno"),
  //     localStorage.getItem("token")
  //   );
  //   setToken(localStorage.getItem("token"));
  // }, [localStorage.getItem("token") && localStorage.getItem("buildingno")]);

  // useEffect(() => {
  //   let filter = criminalTrespass.filter((val) => {
  //     if (search !== "" && val.name.includes(search)) {
  //       return val;
  //     }
  //   });
  //   if (filter.length < 1 && search === "") {
  //     setCriminalTrespass(criminalTrespass);
  //   } else {
  //     setCriminalTrespass(filter);
  //   }
  // }, [search]);

  return (
    <div>
      <div className="list_of_officers_manage_div_main_page">
        <div>
          <span className="list_of_officers_text_main_page">
            List of Vehicles
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
            ADD NEW VEHICLE
          </Button>
        </Form>
      </div>

      <div className="">
        <div className="officer_license_number_main_page">
          <span className="name_text_main_page">Owner</span>
          <span className="date_of_birth_text">Phone</span>
          <span className="criminal_trespass_text">Tag Number</span>
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
                <div className="profile_name_criminal_page">
                
                  <span className="owner_name_vehicle">
                    Unknown
                    {/* {val.user_details.name ? val.user_details.name : "-"} */}
                  </span>
                </div>
                <span className="date_of_birth_main_page">
                  0987654321
                </span>
                <span className="criminal_main_date">
                 #3456789
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CriminalTrespassListPage;
