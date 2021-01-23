import React,{useEffect,useState} from 'react';
import { Bar } from 'react-chartjs-2';



function LineGraph({m}) {
   
   
    const  l=m.toLowerCase()
    // console.log("g",l,typeof(l))
    // const o="albania"
     
    // const o=g
    // console.log(o,typeof(o),"o")
    

    // if(o===l){
    //     console.log("sba equal hai")
    // }
    // else{console.log(o,"nahi chhh")}
    // console.log(m,typeof(m))
    
    const [datas,setdatass]=useState({})
    useEffect(()=>{  async function Cases(m){
        const fetchapi=await fetch(`https://disease.sh/v3/covid-19/countries/${m}`)
        const convert=await fetchapi.json()
        console.log(convert,"batatais mai kia hai")
       const obj={cases:convert.cases,death:convert.deaths,recovered:convert.recovered}
        // console.log(obj)
        setdatass(obj)
        return(obj)
    
        
    }
    
           Cases(m)},[])

const data = {
    labels: ['cases', 'deaths',"recovered"],
    datasets: [
        {
            label: "",
            backgroundColor: 'purple',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [datas.cases, datas.death,datas.recovered]
        }
    ]
};
           
    return (
        <div  style={{backgroundColor:"white",color:"blue"}}> 
            <h2 style={{color:"purple",textAlign:"center",marginTop:"30px"}}>Live Corona Cases Of Country</h2>
            <Bar
                data={data}
                width={20}
                height={509}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
}






export default LineGraph;