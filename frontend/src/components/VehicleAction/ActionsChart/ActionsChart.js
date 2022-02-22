import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HorizontalBarChart from "../HorizontalBarChart/HorizontalBarChart";
import DatePicker from "react-datepicker";
import "./style.css";
import "react-datepicker/dist/react-datepicker.css";

const VehicleActionLogs = ({
  statusLabels,
  status,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());

  return (
    <div>
      <div className="action_div_main_page">
        <div>
          <span className="action_text_main_page">Actions Chart</span>
        </div>
      </div>

      <div className="vehicle_action_from_to_div">
        <div className="from_vehicle_div">
          <span>From: </span>
          <div className="action_input_div">
            <input className="action_input" value={startDate} />

            <DatePicker
              value={dateFrom}
              // selected={startDate}
              onChange={(date) => {
                setStartDate(
                  `${new Date(date).getFullYear()}-${new Date(date).getMonth() +
                    1}-${new Date(date).getDate()}`
                );
                setDateFrom(date);
              }}
              customInput={
                <div className="action_search_btn">
                  <img
                    onClick={() => setStartDate()}
                    src={require("../../../assets/calendar.png").default}
                  />
                </div>
              }
            />
          </div>
        </div>
        <div className="to_vehicle_div">
          <span>To: </span>
          <div className="action_input_div">
            <input value={endDate} type="text" className="action_input" />
            <DatePicker
              value={dateTo}
              // selected={dateTo}
              onChange={(date) => {
                setEndDate(
                  `${new Date(date).getFullYear()}-${new Date(date).getMonth() +
                    1}-${new Date(date).getDate()}`
                );
                setDateTo(date);
              }}
              customInput={
                <div className="action_search_btn">
                  <img
                    onClick={() => setEndDate()}
                    src={require("../../../assets/calendar.png").default}
                  />
                </div>
              }
            />

          </div>
        </div>
      </div>

      <div>

        <HorizontalBarChart statusLabels={statusLabels} status={status} />
      </div>
    </div>
  );
};

export default VehicleActionLogs;
