
import React from "react";
import "./Map.css"
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import {ShowData} from "./Sorted.js"

function Mapa({countries,Center,Zoom,caseType}) {
    // console.log("ss",countries)
    // console.log("wwww")
    return (
        <div className="Map"style={{display:"flex",justifyContent:"center"}} >
             <LeafletMap  center={Center} zoom={Zoom}>

     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'></TileLayer>


          

          {ShowData(countries,caseType)}



             </LeafletMap>

        </div>
    )
}

export default Mapa
