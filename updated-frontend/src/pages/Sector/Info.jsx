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
import MapFilter from './MapFilter';
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
    const [filter, setFilter] = useState(false)
    const [basketballFilter, setBasketballFilter] = useState(false);
    const [goalFilter, setGoalFilter] = useState(false);
    const [scoreboardFilter, setScoreboardFilter] = useState(false);
    const [boxFilter, setBoxFilter] = useState(false);
    const [diskGolfFilter, setDiskGolfFilter] = useState(false);
    const [benchFilter, setBenchFilter] = useState(false);
    
  

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
            borderColor: 'black',
            backgroundColor: [
              "#0000ff ",
              "#ff0000",
              "#00ffff",
              "#ff00ff",
              "#000080",
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


  function filterGoalPost() {
    if(goalFilter) {
      fetchData()
      setGoalFilter(false)
    } else {
      let filtered = info.filter(obj => obj.equipment_name == "GOAL POST")
      if (filtered.length > 0) {
        setInfo(filtered)
        setGoalFilter(true)
      } else {
        alert("This community does not contain any")
      }

    }
  }
  function filterBasketball() {
    if(basketballFilter) {
      fetchData()
      setBasketballFilter(false)
    } else {
      let filtered = info.filter(obj => obj.equipment_name == "BASKETBALL HOOP")
      if (filtered.length > 0) {
        setInfo(filtered)
        setBasketballFilter(true)
      } else {
        alert("This community does not contain any")
      }

    }
  }
  function filterScoreboard() {
    if(scoreboardFilter) {
      fetchData()
      setScoreboardFilter(false)
    } else {
      let filtered = info.filter(obj => obj.equipment_name == "SCOREBOARD")
      if (filtered.length > 0) {
        setInfo(filtered)
        setScoreboardFilter(true)
      } else {
        alert("This community does not contain any")
      }

    }
  }
  function filterBox() {
    if(boxFilter) {
      fetchData()
      setBoxFilter(false)
    } else {
      let filtered = info.filter(obj => obj.equipment_name == "EQUIPMENT BOX")
      if (filtered.length > 0) {
        setInfo(filtered)
        setBoxFilter(true)
      } else {
        alert("This community does not contain any")
      }

    }
  }
  function filterDG() {
    if(diskGolfFilter) {
      fetchData()
      setDiskGolfFilter(false)
    } else {
      let filtered = info.filter(obj => obj.equipment_name == "DISK GOLF BASKET")
      if (filtered.length > 0) {
        setInfo(filtered)
        setDiskGolfFilter(true)
      } else {
        alert("This community does not contain any")
      }

    }
  }
  function filterBench() {
    if(benchFilter) {
      fetchData()
      setBenchFilter(false)
    } else {
      let filtered = info.filter(obj => obj.equipment_name == "PLAYERS BENCH")
      if (filtered.length > 0) {
        setInfo(filtered)
        setBenchFilter(true)
      } else {
        alert("This community does not contain any")
      }

    }
  }







    
  return (
    <div>
        <div className='text-black flex justify-center'>

            <div className="tabs">
                <ul className="flex flex-wrap text-sm font-medium text-center text-black border-b border-gray-700">
                    <li className="mr-2">
                        <p className={!showChart ? 'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:cursor-pointer' : 'inline-block p-4 text-emerald-600 bg-[#bdbaaf] rounded-t-lg active hover:cursor-pointer'}   onClick={() => {setShowChart(true);setShowMap(false);setShowTable(false)}}>Chart</p>
                    </li>
                    <li className="mr-2">
                        <p className={!showMap ? 'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:cursor-pointer' : 'inline-block p-4 text-emerald-600 bg-[#bdbaaf] rounded-t-lg activehover:cursor-pointer'}  onClick={() => {setShowChart(false);setShowMap(true);setShowTable(false)}}>Map</p>
                    </li>

                </ul>
            </div>
        </div>
        {info && showMap && <div className='gap-1 flex-col pt-1 text-black '>
          <p>Filters:</p>
          <button className={!basketballFilter ? 'p-2 border-black border' : 'p-2 border-black border bg-emerald-600'} onClick={filterBasketball}>Basketball</button>
          <button className={!goalFilter ? 'p-2 border-black border ' : 'p-2 border-black border bg-emerald-600'} onClick={filterGoalPost}>Goal Post</button>
          <button className={!scoreboardFilter ? 'p-2 border-black border' : 'p-2 border-black border bg-emerald-600'} onClick={filterScoreboard}>Scoreboard</button>
          <button className={!boxFilter ? 'p-2 border-black border' : 'p-2 border-black border bg-emerald-600'} onClick={filterBox}>Equipment Box</button>
          <button className={!diskGolfFilter ? 'p-2 border-black border' : 'p-2 border-black border bg-emerald-600'} onClick={filterDG}>Disk Golf Basket</button>
          <button className={!benchFilter ? 'p-2 border-black border' : 'p-2 border-black border bg-emerald-600'} onClick={filterBench}>Bench</button>
        </div>}


        <div className='h-96 flex justify-center pt-4'>
            {graphData && showChart && <Bar options={graphData[0]} data={graphData[1]} />}
            {info && showMap && <InfoMap info={info}/> }
        </div>

    </div>


  )
}

export default Info