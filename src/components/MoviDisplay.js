import React from "react";

const MoviDisplay = ({selectedMovi}) =>{

    return(
        <div className="movi-display">
        <h1> Movi Details</h1>
        <div>
            {
            selectedMovi.banner && <img src={selectedMovi.banner} alt={selectedMovi.title}/>
            }
            <p> {selectedMovi.title} </p>
            <p> {selectedMovi.actor} </p>
            <p> {selectedMovi.genre} </p>
        </div>
    </div>
    )
}

export default MoviDisplay