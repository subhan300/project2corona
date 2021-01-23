import React from 'react'
import {Card, CardContent, Typography} from "@material-ui/core"
import "./App.css"
 function InfoBoxes({title,cases,active,recovered,deaths,...props}) {
    return (
        

        <Card variant="outlined"  
        onClick={props.onClick} style={{backgroundColor:"white"}}  
        className={`card_Info_Boxes ${active && "card_Info_Boxes--selected"}` } variant="outlined">
        <CardContent style={{textAlign:"center",padding:"10px"}}>
          <Typography  color="text-primary" >
           {title}
          </Typography>
          <Typography  style={{fontWeight:"bold"}}>
         {cases}
          </Typography>
          <Typography  color="">
             {recovered}
          </Typography>
          <Typography  color="">
             {deaths}
          </Typography>
        </CardContent>
       
      </Card>
            
      
    )
}

export default InfoBoxes
