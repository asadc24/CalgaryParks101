import React from 'react'
import { useState, useEffect } from 'react'
import NearbyMap from './NearbyMap'
import Loading from './Loading';

const NearbyInfo = () => {
  const [userCoords, setUserCoords] = useState({});
  const [info, setInfo] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [graphData, setGraphData] = useState([{}, { datasets: [] }]);
  const [showMap, setShowMap] = useState(false)
  const [basketballFilter, setBasketballFilter] = useState(false);
  const [goalFilter, setGoalFilter] = useState(false);
  const [scoreboardFilter, setScoreboardFilter] = useState(false);
  const [boxFilter, setBoxFilter] = useState(false);
  const [diskGolfFilter, setDiskGolfFilter] = useState(false);
  const [benchFilter, setBenchFilter] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  function fetchData() {
    fetch(
      `http://localhost:8080/getNearbyEquipment/:${userCoords.longitude}/:${userCoords.latitude}`
    )
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setIsFetched(true);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    if (userCoords.latitude && userCoords.longitude) {
      fetchData()
    }
  }, [userCoords]);


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
      <div className="text-black flex justify-center ">
        <h2 className="md:text-4xl sm:text-3xl text-2xl pt-7">
          Here is what is near you:
        </h2>
      </div>
        <p className='text-black flex justify-center'>Please allow the website to use your location if it asks</p>
        <p className='text-black flex justify-center'>(You are the black marker)</p>
      {info && <div className='gap-1 flex-col pt-1 text-black '>
          <p>Filters:</p>
          <button className={!basketballFilter ? 'p-2 border-black border' : 'p-2 border-black border bg-emerald-600'} onClick={filterBasketball}>Basketball</button>
          <button className={!goalFilter ? 'p-2 border-black border ' : 'p-2 border-black border bg-emerald-600'} onClick={filterGoalPost}>Goal Post</button>
          <button className={!scoreboardFilter ? 'p-2 border-black border' : 'p-2 border-black border bg-emerald-600'} onClick={filterScoreboard}>Scoreboard</button>
          <button className={!boxFilter ? 'p-2 border-black border' : 'p-2 border-black border bg-emerald-600'} onClick={filterBox}>Equipment Box</button>
          <button className={!diskGolfFilter ? 'p-2 border-black border' : 'p-2 border-black border bg-emerald-600'} onClick={filterDG}>Disk Golf Basket</button>
          <button className={!benchFilter ? 'p-2 border-black border' : 'p-2 border-black border bg-emerald-600'} onClick={filterBench}>Bench</button>
        </div>}
      <div className="h-96 flex justify-center pt-4">
        {isFetched ? (
          <NearbyMap info={info} userCoords={userCoords}/>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default NearbyInfo;

