import React from "react"
import icon from '../src/Fill-219.png';

export default function Card(props) {
 
    return (
        <div className="card">
            <img 
               src={props.imageUrl}
               className="card--image" alt=""
             />
              
               <div className="card-location">
                  <img src={icon} className="location-img" alt=""/>
               <p>{props.location}</p>    
               <a href={props.googleMapsUrl} target="_blank" rel="noreferrer noopener">View on Google Maps</a>
               </div>
                
                   <p className="card--title">{props.title}</p>
                
              <p className="card--date">{props.startDate} - {props.endDate}</p>
            
         
            
            <p className="card--description">
                 {props.description} 
            </p>
           
        </div>
    )
}