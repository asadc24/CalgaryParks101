import React, { useState, useEffect } from 'react'
import InfoMap from './InfoMap';
import { useParams } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import InfoMap from './InfoMap';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const Info = () => {
    const { sector_name } = useParams();
    const [showChart, setShowChart] = useState(true)
    const [showTable, setShowTable] = useState(false)
    const [showMap, setShowMap] = useState(false)
    const [info, setInfo] = useState([]);
    const [graphData, setGraphData] = useState([{}, { datasets: [] }]);
  

  const fetchData = () => {
    fetch(
      `http://localhost:8080/sector/${sector_name.replace(/%20/g, " ")}`
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
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: `Count of playground equipment in ${sector_name.substring(1)}`,
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
  }, [sector_name]);

  useEffect(() => {
    setDataForGraph();
  }, [info]);





    
  return (
    <div>
        <div className='text-white flex justify-center'>

            <div className="tabs">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li className="mr-2">
                        <p className={!showChart ? 'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:cursor-pointer' : 'inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 hover:cursor-pointer'}   onClick={() => {setShowChart(true);setShowMap(false);setShowTable(false)}}>Chart</p>
                    </li>
                    <li className="mr-2">
                        <p className={!showMap ? 'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:cursor-pointer' : 'inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 hover:cursor-pointer'}  onClick={() => {setShowChart(false);setShowMap(true);setShowTable(false)}}>Map</p>
                    </li>

                </ul>
            </div>
        </div>

        <div className='h-96 flex justify-center pt-4'>
            {graphData && showChart && <Bar options={graphData[0]} data={graphData[1]} />}
            {info && showMap && <InfoMap info={info}/> }

        </div>

    </div>


  )
}

export default Info