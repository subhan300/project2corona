import React,{useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import numeral from "numeral";
 const Graph=()=>{
    const [datacase,setdatacase]=useState([])
    const[dates,setdates]=useState([])
    useEffect(()=>{  async function Cases(){
        const fetchapi=await fetch("https://disease.sh/v3/covid-19/historical/all")
        const convert=await fetchapi.json()
        // console.log(convert)
        const Alldates=[]
        const co=[]
        for(let date in convert.cases){
        
            // console.log(date)
            Alldates.push(date)

            co.push(convert.cases[date])
            // console.log(co,"co")
         

        



        }
        setdates(Alldates)
        setdatacase(co)
        // console.log("datacase",datacase)

  
    }
        // const obj=convert.map((v)=>{return {[cases:v.timeline.cases.key}}
            
            
            
            
            
        Cases()  } ,[]      )
            
        // console.log("dates",dates)
           
       
       
        // setdatacase(obj)
        // return(obj)
    
        
    
    
          


    const data = {
     
        labels: [...dates],
     
        datasets: [
          {
            label: 'cases',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'white',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor:"black",
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [...datacase]
          }
        ]
      };
    //   {console.log("sssss",data.labels)}
  
    return (
        // {displayName: 'LineExample'}
      <div style={{marginTop:"40px"}}>
        <h2></h2>
        <Line data={data} />

      </div>
    )
  
    }

export default Graph