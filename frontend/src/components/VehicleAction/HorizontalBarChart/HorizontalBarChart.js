import React from "react";
import { Bar } from "react-chartjs-2";

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const HorizontalBarChart = ({ statusLabels, status }) => {
  const data = {
    labels: statusLabels,
    datasets: [
      {
        data: status,
        backgroundColor: [
          "#FB8787",
          "#71BB81",
          "#5D98DE",
          "#D7C2A3",
          "#FFCF88",
        ],
        borderColor: ["#FB8787", "#71BB81", "#5D98DE", "#D7C2A3", "#FFCF88"],
        borderWidth: 1,
        // backgroundColor: '#000'
        // ba: 1
      },
    ],
  };
  return (
    <>
      <Bar
        data={data}
        options={options}
        height={50}
        //   options={{maintainAspectRatio: false}
        // }
      />
    </>
  );
};

export default HorizontalBarChart;
