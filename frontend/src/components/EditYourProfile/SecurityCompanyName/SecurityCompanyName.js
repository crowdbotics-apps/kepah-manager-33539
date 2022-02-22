import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const CertificateInformation = () => {
  const [token, setToken] = useState("");
  const [user_id, setUserId] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [profile_picture, setProfile_picture] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    var config = {
      method: "get",
      url: "https://kepah-24275.botics.co/rest-auth/user/",
      headers: {
        Authorization: `token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setUserId(response.data.id);
        setName(response.data.name);
        setPhoneNumber(response.data.phone_number);
        setProfile_picture(response.data.profile_picture);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [localStorage.getItem("token")]);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];

      var data = new FormData();
      data.append("profile_picture", img);

      var config = {
        method: "patch",
        url: `https://kepah-24275.botics.co/api/v1/user/${user_id}/`,
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      // this.setState({
      //   image: URL.createObjectURL(img)
      // });
    }
  };

  const updateUser = () => {
    var data = JSON.stringify({
      name: name,
      phone_number: phone_number,
    });

    var config = {
      method: "patch",
      url: `https://kepah-24275.botics.co/api/v1/user/${user_id}/`,
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div className="security_company_main_page">
      <div className="police_liaison">
        <label for="upload-file">
          <div className="police_profile_img">
            {profile_picture ? (
              <img src={profile_picture} className="police_image" />
            ) : (
              <img
                src={require("../../../assets/police_profile.png").default}
                className="police_image"
              />
            )}
            <div className="plus_security_image">
              <img
                className="plus_image"
                src={require("../../../assets/plus.png").default}
              />
            </div>
          </div>
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          name="myImage"
          id="upload-file"
          onChange={onImageChange}
          accept="image/png, image/gif, image/jpeg"
        />

        <div className="security_company_main_div">
          <div className="security_company_div">
            <span className="security_company_text">Security Company Name</span>
            <span className="security_license_text">0123456789</span>
          </div>
        </div>

        <Form className="all_inputs_width">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="label_create_password">
              Security Company:
            </Form.Label>
            <div className="input_div">
              <Form.Control
                className="input_create_password"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="label_create_password">
              Phone Number:
            </Form.Label>
            <div className="input_div">
              <Form.Control
                className="input_create_password"
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phone_number}
              />
            </div>
          </Form.Group>

          <div className="if_there_is_no_company_div">
            <span className="if_there_is_no_company_text">
              *If there is no company, put your name and upload your photo.
            </span>
          </div>

          <Button className="save_btn" variant="primary" onClick={updateUser}>
            SAVE
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CertificateInformation;
