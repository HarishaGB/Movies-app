
import React, {useState} from "react";
import MoviList from "./components/MoviList";
import MoviDisplay from "./components/MoviDisplay";


const App = () => {
    const [selectedMovi, setSelectedMovi] = useState("")

    return(
        <div style={{display:"flex",
        justifyContent:"space-around",

    }}>
            <MoviList updateMovi={setSelectedMovi} />
            <MoviDisplay selectedMovi={selectedMovi}/>
        </div>
    )
}

export default App;