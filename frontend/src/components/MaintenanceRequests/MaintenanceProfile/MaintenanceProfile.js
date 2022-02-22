import React from "react";
import "./style.css";

const MaintenanceProfile = () => {
  return (
    <div className="maintenance_profile_main_background">
      <div className="maintenance_profile_name_img_main_div">
        <div className="maintenance_profiles_slide_div">
          <div className="arrow_left_img_div">
            <img src={require("../../../assets/arrow-left.png").default} />
          </div>
          <div>
            <img
              className="maintenance_profile_img"
              src={require("../../../assets/profile.png").default}
            />
          </div>
          <div className="arrow_right_img_div">
            <img src={require("../../../assets/arrow-right.png").default} />
          </div>
        </div>

        <div className="user_profile_name">
          <span className="user_profle_name_text">John Doe - 12A / 321</span>
          <span className="user_profile_view_text">view profile</span>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceProfile;
