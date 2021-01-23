import React,{useState, useEffect} from 'react';

import './App.css';
import {MenuItem, FormControl, Select, CardContent, Typography,Card} from "@material-ui/core"

import  InfoBoxes from "./infoBoxes.js";
import Table from "./Table.js";
import numeral from "numeral"
import  sortData from "./Sorted.js"
import LineGraph from "./LineGraph.js"
import Mapa from "./Map.js"
//  import "leaflet/dist/leaflet.css";
import Graph from "./Graph.js"

function App() {
  const[a,b]=useState("pakistan")
  const [inputCountry,setInputCountry]=useState("worldwide")
 const [countries,Setcountries]=useState([])
 const [Table_Data,Set_Table_Data]=useState([])
 const [mapCenter, setMapCenter] = useState({ lat: 50.49, lng: -20.4796 });
 const [mapZoom, setMapZoom] = useState(3);
 const[mapCountries,setmapcountries]=useState([])
 const[caseType,setCaseType]=useState("cases")

 useEffect(()=>{

 const GetCountriesData=async ()=>{

    

   const  GetData=await fetch("https://disease.sh/v3/covid-19/countries")
   const  convertData=await GetData.json()
   const  Live_Data=convertData
   console.log("dd",Live_Data)


   const Countries=convertData.map((countryName)=>{
    // console.log(countryName)

   return(
              {Name:countryName.country,cases:countryName.cases,key:Math.random()*33*23,
              value:countryName.countryInfo,death:countryName.deaths,r:countryName.recovered}
               
     
   )
 
   }
   
    )
    Setcountries(Countries)
    // console.log("slslsl",AllNamesOfCountries)
    setmapcountries(Countries)
    // const sorted_Data=SortData(Live_Data)
    // Set_Table_Data(sorted_Data)
     
    let sortedDatA = sortData(Live_Data);
         
        
          Set_Table_Data(sortedDatA);

    
    

  }
  GetCountriesData()
  
 
 


  } 

 

 
 
 
 
 
 
 ,[])
 


 useEffect(()=>{

  const AllData=async ()=>{
    const collect=await fetch("https://disease.sh/v3/covid-19/all")
    const change=await collect.json()
   
    // console.log(change)
    Set_Information(change)

  }
  AllData()
  
 }
 
 
 
 
 ,[])
const [Country_Information,Set_Information]=useState({})
const selectCountry = async (e)=>{
  const code=e.target.value

 
  console.log("aaaa",a)

  
  setInputCountry(code)
  b(code)
  if(code==="worldwide"){
   const url= await fetch("https://disease.sh/v3/covid-19/all");setMapCenter({lat: 29.49, lng: -10.4796 })
   const read=await url.json()
    Set_Information(read)
    // console.log(inputCountry,"read")
  
    setMapZoom(6)

  }

  // const url= code==="worldwide" ?
  else{
 const url= await fetch (`https://disease.sh/v3/covid-19/countries/${code}`)   ;
const r=await url.json()
    setMapCenter([r.countryInfo.lat,r.countryInfo.long])
  Set_Information(r)
  // console.log(inputCountry,"read")

  setMapZoom(6)
  // const read=await url.json()
// console.log("country info",read)



// console.log("kkkk",Table_Data)
}


  

  
 
  
  
}

    
  return (
    <div className="App">

      <div className="App_Left">
      <div style={{textAlign:"center",MarginTop:"40px"}}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs0v7Xna3L7Koiw6BzeVjJ-D6FSqrG2_gWTg&usqp=CAU"}></img></div>
      <div className="App_header" >
      
<div style={{display:"flex",justifyContent:"center",
alignItems:"center"}}>  <p style={{marginTop:"30px",fontSize:"40px",
fontWeight:"bold"}}>CORONA TRACKER APP</p></div>
  
    </div>
    <div className="drop" style={{display:"flex",justifyContent:"center"}}> <FormControl className="app_dropdown" >
    
    <div >
    <Select  onChange={selectCountry} value={inputCountry}  
      style={{color:"purple",fontWeight:"bold",borderBottom:"4px red !important",width:"150px"}}
      >
      <MenuItem value="worldwide">world wide</MenuItem>
       
    {countries.map((val)=>{ return(<MenuItem  keys={val.key}    value={val.Name}>{val.Name}</MenuItem>)})}
  
  
      </Select>
  
    </div>
  
       </FormControl>
       </div>
      
   
 

      <div className="infoBoxes" style={{display:"flex",justifyContent:"center",
  flexWrap:"wrap"}}>

        <InfoBoxes      
         onClick={e=>{setCaseType("cases")}}   className="infoBoxespart"   
         title="Corona Cases" cases={numeral(Country_Information.cases).format("0,0")}  active={caseType==="cases"} />
      
        <InfoBoxes active={caseType==="deaths"}  onClick={e=>{setCaseType("recovered")}}
         className="infoBoxespart"   title="Recovered"  recovered={numeral(Country_Information.recovered).format("0,0")}  />

        <InfoBoxes active={caseType==="recovered" } onClick={e=>{setCaseType("deaths")}} 
        className="infoBoxespart"  title="Death" deaths={numeral(Country_Information.deaths).format("0,0")} />
        </div>

      
     

           
{/* yaha map lagana  */}
{/* 
 <Mapa caseType={caseType}   countries={mapCountries} Center={mapCenter}  Zoom={mapZoom}   /> */}


      </div>
    










      <div className="App_Right" style={{marginTop:"50px"}}>


         
<Card  variant="outlined">
  <CardContent>
  
   <h1 style={{color:"purple"}}>WORLDWIDE NEW CASES</h1> 
   <Table  WoldCases={Table_Data} />
  
   
    <h1 style={{marginTop:"20px",color:"purple"}}>LIVE CASES BY COUNTRY</h1>
    <Graph />  

    <LineGraph  m={a}   />

  </CardContent>
</Card>




   




</div>

     
  


   
    </div>
  );

















}

export default App;
