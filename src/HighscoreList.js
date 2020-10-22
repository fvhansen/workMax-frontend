import React, { useState } from "react";
import './HighscoreList.css';


function HighscoreList(props) {

    const li = [
        { name: "Filip", score: 100, id: 1 },
        { name: "Mathilde", score: 150, id: 2 },
        { name: "Ingrid", score: 110, id:3 },
        { name: "Åsmund", score: 90, id: 4},
        { name: "Jenny", score: 230, id: 5}
    ];

    
    li.sort((a, b) => b.score - a.score)

    const [list, setList] = useState(li)
    
    

    return(
        <div className="list">
            {list.map(person => (
                <p className="listItem">{"Bruker: " + person.name + " - Poengsum: " + person.score}</p>
/*                 <div className="listItem">
                    <span className="listItem-name">{person.name}</span>
                    <span className="listItem-score"    >{person.score}</span>
                </div>
 */            ))}
        </div>
    );
}

export default HighscoreList;