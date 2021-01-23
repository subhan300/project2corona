import React from 'react'
import { TableRow } from '@material-ui/core'

function Table({ WoldCases }) {
    // console.log("LIVECASES<>>>>????", WoldCases)
    return (
        <div className="Table">

            <div className="TableWorldCases">
            
               
{ WoldCases.map((e)=>{return(<tr><td>{e.country}</td> <td>{e.cases}</td> </tr>)})}
    
                
                
            </div> 


            <div className="Table_Live_Cases">d</div> 

            
        </div>
    )
}

export default Table
