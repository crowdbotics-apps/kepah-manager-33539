import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Welcome = ({ ...props }) => {
  const login = () => {
    var data = JSON.stringify({
      username: "zubair_12",
      password: "zub123456",
    });

    var config = {
      method: "post",
      url: "https://kepah-24275.botics.co/api/v1/login/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function(response) {
        props.history.push("welcome")
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("id", response.data.user.id)
        localStorage.setItem("buildingno", 1)
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="main">
      <div className="img_div">
        <img
          className="forest_img"
          src={require("../../assets/forestCove.png").default}
        />
      </div>
      <div className="white_box">
        <div className="all_texts">
          <h5 className="welcome_text">Welcome</h5>

          <p className="security_text">Security Company Name</p>
          <p className="email">john@website.com</p>
        </div>

        <div>
          <div>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label_create_password">Email:</Form.Label>
              <div className="email_div">
                <Form.Control
                  className="input_create_email"
                  type="email"
                  placeholder="Enter email"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="label_create_password">
                Password:
              </Form.Label>
              <div className="input_div">
                <Form.Control
                  className="input_create_password"
                  type="password"
                  placeholder="Enter email"
                />
                <div className="eye_div">
                  <span className="dot" />
                  <img src={require("../../assets/vector.png").default} />
                </div>
              </div>
            </Form.Group>
            <Button
              onClick={login}
              className="save_btn"
              variant="primary"
            >
              LOG IN
            </Button>
          </div>
        </div>
      </div>
      <div>
        <img
          className="kepah_img"
          src={require("../../assets/kepah.png").default}
        />
      </div>
    </div>
  );
};

export default Welcome;
