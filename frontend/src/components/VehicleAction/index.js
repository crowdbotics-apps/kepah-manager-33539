import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import VehicleActionLogs from "./VehicleActionLogs/VehicleActionLogs";
import ActionsChart from "./ActionsChart/ActionsChart";
import axios from "axios";
import "./style.css";
const VehicleAction = ({ ...props }) => {
  const statusLabels = ["Booted", "Towed"];

  const [status, setStatus] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const getVehicleStatuses = () => {
    let token = localStorage.getItem("token");
    let buildingno = localStorage.getItem("buildingno");
    var config = {
      method: "get",
      url: `https://kepah-24275.botics.co/api/v1/illegal-parking/action_chart_analytics/?residence_building=${buildingno}&start_date=${startDate}&end_date=${endDate}`,
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        let data = [];
        response.data.status_analytics.map((v, i) => {
          data[v.status - 1] = i == 0 ? 1 : i;
        });
        setStatus(data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getVehicleStatuses();
  }, [startDate, endDate]);

  return (
    <div className="vehicle_back">
      <div className="side_nav">
        <Sidebar history={props.history} nav="Vehicle Action" />
      </div>
      <div className="vehicle_action_main_div">
        <div className="vehicle_action_main_page">
          <VehicleActionLogs />
          <ActionsChart
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            statusLabels={statusLabels}
            status={status}
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleAction;
