import {Circle,Popup} from "react-leaflet"
import React from "react"
import numeral from "numeral"
// import { popup } from "leaflet";


const sortData = (data) => {
    let sortedData = [...data];
    console.log("sorted>>>>",sortedData)
    sortedData.sort((a, b) => {
      if (a.cases > b.cases) {
        return -1;
      } else {
        return 1;
      }
    });
    return (sortedData);
  };


  const casesTypeColors={
    cases:{hex:"orange" ,   multiplier:"800"},
     recovered:{hex:"#7dd71d",    multiplier:"400"},
    deaths:{hex:"red" ,   multiplier:"500"}
  };
  export const ShowData=(data,caseType="cases")=>  (

    data.map((val)=>( 

    <Circle  
    
    center={[ val.value.lat ,   val.value.long]}  fillOpacity={0.4}      
    color={casesTypeColors[caseType].hex}   
     radius={Math.sqrt(val.cases) * casesTypeColors[caseType].multiplier}>   
    
      
      <Popup>
      <div className="info-popup">

     <div className="info-flag"  style={{backgroundImage:`url(${val.value.flag})`}}></div>
    <div className="info-name" >cases {numeral(val.cases).format("0,0")}</div>
    <div className="info-deaths" >Deaths  {numeral(val.death).format("0.0")}</div>
     <div className="info-recovered" >Recovered  {numeral(val.r).format("0.0")}</div>
    




      
      </div>
      </Popup>
    
    
      </Circle>      
      )
  )
  )
export default sortData

