import React, {useState} from "react";
import moviData from "../data/moviesData";
// import MoviDisplay from "./MoviDisplay";

const MoviList = ({updateMovi}) =>{

    // const [selectedMovi, setSelectedMovi] = useState("")
    // console.log(selectedMovi);

    return(
        <div>
            <div className="movi-list">
                {
                    // in react key is index[its automatically traverse 0 index to last index ]
                    moviData.map((item, index)=>(
                        <p onClick={()=> updateMovi(item)}
                        key={index}> {item.title} </p>
                    ))
                }

            </div >

            {/* <MoviDisplay  selectedMovi={selectedMovi}/> */}
        </div>
    )
}

export default MoviList;