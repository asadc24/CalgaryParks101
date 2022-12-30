import React, { useEffect, useState } from 'react';
import Map, { Marker,Popup } from 'react-map-gl';


const InfoMap = ({info}) => {
    const [viewport, setViewport] = useState({
        latitude: info[1].equipment_latitude,
        longitude: info[1].equipment_longitude,
        // width: '10vw',
        // height: '100vh',
        zoom: 13
    })

    const [popupInfo, setPopupInfo] = useState(null);

    console.log(info[2])
    console.log(info[1].equipment_latitude)
    console.log(info[1].equipment_longitude)
    console.log(typeof(info))
    info.forEach(item => {
        console.log(item)
    })

    function chooseColor(equipment) {
        if(equipment == 'EQUIPMENT BOX') {
            return "blue"

        } else if(equipment == 'GOAL POST') {
            return 'red'
        } else if(equipment == 'SCOREBOARD') {
            return 'green'
        } else if(equipment == 'BASEKETBALL HOOP') {
            return 'purple'
        } else if(equipment == 'DISK GOLF BASKET') {
            return 'brown'
        } else if(equipment == 'PLAYERS BENCH') {
            return 'cyan'
        } else return 'maroon'
    }
    
    return (



        
        <Map 
            initialViewState={viewport}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            onViewportChange={viewport => {setViewport(viewport)}}
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
                        {popupInfo.equipment_name}
                    </div>
                </Popup>
            )}
        </Map>





  )
}

export default InfoMap