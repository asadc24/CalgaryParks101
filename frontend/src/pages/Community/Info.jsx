import React from "react";
import { useParams } from "react-router";
import InfoTable from "./InfoTable";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Info() {
  const { community_name } = useParams();
  const [info, setInfo] = useState([]);
  const [graphData, setGraphData] = useState([{}, { datasets: [] }]);

  // First thing we want to do is fetch all info about community. This is going to be used later....

  const fetchData = () => {
    fetch(
      `http://localhost:8080/community/${encodeURIComponent(community_name)}`
    )
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.error(err));
  };

  const setDataForGraph = () => {
    let tempData = {};
    const labels = [];
    const values = [];
    if (info.length > 0) {
      // Initialize tempData with a value of 0 for each equipment_name
      for (let i = 0; i < info.length; i++) {
        tempData[info[i]["equipment_name"]] = 0;
      }

      for (let i = 0; i < info.length; i++) {
        if (tempData.hasOwnProperty(info[i]["equipment_name"])) {
          tempData[info[i]["equipment_name"]] =
            tempData[info[i]["equipment_name"]] + 1;
        }
      }
      for (const key in tempData) {
        labels.push(key);
        values.push(tempData[key]);
      }

      let graphOptions = {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `Count of playground equipment in ${community_name.substring(
              1
            )}`,
          },
        },
      };

      let data = {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
          },
        ],
      };
      setGraphData([graphOptions, data]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setDataForGraph();
  }, [info]);

  return (
    <div className="info">
      <div className="container">
        <div className="infoContent">
          <div className="title">
            <h1>Welcome to the community of {community_name.substring(1)}</h1>
          </div>
          <article
            className="canvas-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {graphData && <Bar options={graphData[0]} data={graphData[1]} />}
          </article>
            {graphData && <InfoTable/>}
        </div>
      </div>
    </div>
  );
}

export default Info;
