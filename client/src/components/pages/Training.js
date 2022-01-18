import React, { useState, useEffect } from "react";
import GraphCard from "../modules/GraphCard";
import "./Training.css";
import functionPlot, { FunctionPlotOptions } from 'function-plot';
import Popup from "../modules/Popup";
import TrainingHint from "../modules/TrainingHint";

import { get } from "../../utilities";


/**
 * Training page will consist of predetermined levels created by us
 *
 * Proptypes
 * @param {string} _id of the level
 * @param {string} sidebar (what's shown on the SideCard for users to interact with)
 * @param {string} graph_content (what's shown on the GraphCard)
 */

const Training = (props) => {
    const [levels, setLevels] = useState([]);
    const [levelNumber, setLevelNumber] = useState(0);
    const [buttonPopup, setButtonPopup] = useState(false);

    useEffect(() => {
        get("/api/levels").then((levelObjs) => {
          setLevels(levelObjs);
        });
      }, []); 
      
    let levelsList;
    levelsList = levels.map((levelObj) => (
        <GraphCard
        _id={levelObj._id}
        function={levelObj.function}
        />
    ));

    let hintsList;
    hintsList = levels.map((levelObj) => (
        <TrainingHint
        hint={levelObj.hint}
        />
    ));

    const handleLevel1 = (event) => {
        event.preventDefault();
        setLevelNumber(0)
        setButtonPopup(false)
      };
    const handleLevel2 = (event) => {
        event.preventDefault();
        // functionPlot(levelParameters);
        setLevelNumber(1)
        setButtonPopup(false)
    };
    const handleLevel3 = (event) => {
        event.preventDefault();
        setLevelNumber(2)
        setButtonPopup(false)
    };
    const handleLevel4 = (event) => {
        event.preventDefault();
        setLevelNumber(3)
        setButtonPopup(false)
    };
    const handleLevel5 = (event) => {
        event.preventDefault();
        setLevelNumber(4)
        setButtonPopup(false)
    };


    return(
        <div className="Training-container"> 
            <div className="Training-text">
                <h1>
                    Training: Level {levelNumber+1} out of 5
                </h1>
                
                <button className = "Open-levels" onClick={()=> setButtonPopup(true)}>
                <span>Open levels</span>
                </button>
                <div className = "hint">
                    {hintsList[levelNumber]}
                </div>

                
            </div>
            
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <button className="Select-level" onClick = {handleLevel1}>1</button>
                <button className="Select-level" onClick = {handleLevel2}>2</button>
                <button className="Select-level" onClick = {handleLevel3}>3</button>
                <button className="Select-level" onClick = {handleLevel4}>4</button>
                <button className="Select-level" onClick = {handleLevel5}>5</button>
            </Popup>

            {levelsList[levelNumber]}

        </div>
    );
};

export default Training;