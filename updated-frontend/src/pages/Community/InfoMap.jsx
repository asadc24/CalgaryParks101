import React, { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';


const InfoMap = () => {
    const [viewport, setViewport] = useState({
        latitude: 51.088036537192,
        longitude: -113.94467442,
        // width: '10vw',
        // height: '100vh',
        zoom: 13
    })


    
  return (
        <ReactMapGL 
            {...viewport}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            onViewportChange={viewport => {setViewport(viewport);}}

        >
        </ReactMapGL>


  )
}

export default InfoMap