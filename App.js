import React from 'react'
import NavBar from "./components/Navbar.js"
import Card from "./components/Card.js"
import destinations from "./data.js"

export default function App() {
    
    const cardElements = destinations.map(place => {
        return (
            <Card 
                key= {place.id}
               {...place}
            />
        )
    })
    
    return (
        <div>
        <NavBar />
        {cardElements}
        </div>
    )
}