import React from 'react'
import { useState, useEffect } from 'react'
import NearbyMap from './NearbyMap'
import Loading from './Loading';

const NearbyInfo = () => {
  const [userCoords, setUserCoords] = useState({});
  const [info, setInfo] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

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

  useEffect(() => {
    if (userCoords.latitude && userCoords.longitude) {
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
  }, [userCoords]);

  return (
    <div>
      <div className="text-white flex justify-center ">
        <h2 className="md:text-4xl sm:text-3xl text-2xl pt-7">
          Here is what is near you:
        </h2>
      </div>
        <p className='text-white flex justify-center'>Please allow the website to use your location if it asks</p>
        <p className='text-white flex justify-center'>(You are the black marker)</p>
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

