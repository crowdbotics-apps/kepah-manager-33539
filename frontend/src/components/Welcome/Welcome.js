import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";

const Welcome = ({ ...props }) => {
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
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label_create_password">
                Create Password:
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
              onClick={() => props.history.push("dashboard")}
              className="save_btn"
              variant="primary"
              type="submit"
            >
              SAVE
            </Button>
          </Form>
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
