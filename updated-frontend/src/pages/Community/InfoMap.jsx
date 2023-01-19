import React, { useEffect, useState } from 'react';
import Map, { Marker,Popup } from 'react-map-gl';


const InfoMap = ({info, basketballFilter}) => {
    const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/streets-v12")

    const [viewport, setViewport] = useState({
        latitude: info[1].equipment_latitude,
        longitude: info[1].equipment_longitude,
        // width: '10vw',
        // height: '100vh',
        zoom: 13
    })




const handleViewportChange = viewport => {
    setViewport(viewport)
    if (viewport.viewState.zoom > 15.5) {
      setMapStyle("mapbox://styles/mapbox/satellite-v9");
    } else {
      setMapStyle("mapbox://styles/mapbox/streets-v12");
    }
  };

    const [popupInfo, setPopupInfo] = useState(null);


    function chooseColor(equipment) {

        if(equipment == 'EQUIPMENT BOX') {
            return "blue"

        } else if(equipment == 'GOAL POST') {
            return 'red'
        } else if(equipment == 'SCOREBOARD') {
            return 'green'
        } else if(equipment == 'BASKETBALL HOOP') {
            return '#EF8200'
        } else if(equipment == 'DISK GOLF BASKET') {
            return 'purple'
        } else if(equipment == 'PLAYERS BENCH') {
            return 'cyan'
        } else return 'maroon'
    }

    
    return (



        
        <Map 
            initialViewState={viewport}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle={mapStyle}
            onMove={handleViewportChange}
        >

            {info && info.map(item => (
                <Marker
                    longitude={item.equipment_longitude}
                    latitude={item.equipment_latitude}
                    color={chooseColor(item.equipment_name)}
                    onClick={e => {e.originalEvent.stopPropagation(); setPopupInfo(item)}}
                />


            
            ))}

            {popupInfo && (
                <Popup
                    anchor='top'
                    longitude={Number(popupInfo.equipment_longitude)}
                    latitude={Number(popupInfo.equipment_latitude)}
                    onClose={() => setPopupInfo(null)}
                >
                    <div>
                        <a className='text-blue-500' target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${popupInfo.equipment_latitude},${popupInfo.equipment_longitude}`}>{popupInfo.equipment_name}</a>
                    </div>
                </Popup>
            )}
        </Map>





  )
}

export default InfoMap