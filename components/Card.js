import React from "react"

export default function Card(props) {
    return (
        <div className="card--container">
        
            <img src={props.imageUrl} className="dest-img" />
            
            <div className="dest-info">
            
            <span className="loc-info">
            <h3 className="dest-country">{props.location}</h3>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
            </span>
            
            <h2 className="dest-title">{props.title}</h2>
            <p className="travel-dates">{props.startDate} - {props.endDate}</p>
            <p className="description">{props.description}</p>
            
            </div>
            
          
        </div>
    )
}