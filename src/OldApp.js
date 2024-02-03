import React, {useState} from "react";

const moviData = [
    {"title": "3 Idiots", "actor": "Aamir Khan", "genre": "Comedy/Drama", "director": "Rajkumar Hirani", "banner": "https://theobjectivestandard.com/wp-content/uploads/2022/03/3-Idiots-Written-and-Directed-by-Rajkumar-Hirani.jpg"},
    {"title": "Dangal", "actor": "Aamir Khan", "genre": "Biographical/Sports", "director": "Nitesh Tiwari", "banner":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bdoNa9YFslkq_P64QZBjvKbCDZuVstU7my8ClHCRSoXYZUj8R27cRu48S7bpwKuZrKA&usqp=CAU"},
    {"title": "Bahubali: The Beginning", "actor": "Prabhas", "genre": "Action/Fantasy", "director": "S.S. Rajamouli"},
    {"title": "Lagaan", "actor": "Aamir Khan", "genre": "Drama/Sports", "director": "Ashutosh Gowariker"},
    {"title": "PK", "actor": "Aamir Khan", "genre": "Comedy/Drama", "director": "Rajkumar Hirani"},
    {"title": "Sholay", "actor": "Amitabh Bachchan", "genre": "Action/Adventure", "director": "Ramesh Sippy"},
    {"title": "Bajrangi Bhaijaan", "actor": "Salman Khan", "genre": "Drama/Action", "director": "Kabir Khan"},
    {"title": "Gully Boy", "actor": "Ranveer Singh", "genre": "Musical/Drama", "director": "Zoya Akhtar"},
    {"title": "Queen", "actor": "Kangana Ranaut", "genre": "Comedy/Drama", "director": "Vikas Bahl"},
    {"title": "Andhadhun", "actor": "Ayushmann Khurrana", "genre": "Thriller/Comedy", "director": "Sriram Raghavan"}
]
//item means = series of objects inside the array

 const App = () => {
     const [selectedMovi, setSelectedMovi] = useState("")
     console.log(selectedMovi);
    return(
    <div style={{display:"flex",
                justifyContent:"space-around",

            }}>
        <div className="movi-list">
            {
                // in react key is index[its automatically traverse 0 index to last index ]
                moviData.map((item, index)=>(
                    <p 
                    onClick={()=>setSelectedMovi(item)} // selectedMovi is a function
                    key={index}> {item.title} </p>

                ))
            }

        </div >
        {
            selectedMovi && (
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
    </div>
    )
 }

export default App;