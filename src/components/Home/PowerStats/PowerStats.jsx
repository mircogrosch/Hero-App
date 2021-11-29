import React from 'react'
import style from './PowerStats.module.css'
const PowerStats = ({intelligence,strength,speed,durability,power,combat,resize})=> {
    return (
        <div className={resize ? style.rootResize: style.root}>
            <div className={style.groups}>  
            <div className={style.powerstats}>
                <h6>Intelligence</h6>
                <h6>Strenght</h6>
                <h6>Speed</h6>
                <h6>Durability</h6>
                <h6>Power</h6>
                <h6>Combat</h6>
            </div>

            <div className={resize ? style.inputResize : style.input}>
                <input type="range" name="intelligence" min="0" max={resize ? "100" : "600"} value={intelligence} disabled/>
                <input type="range" name="strenght" min="0" max={resize ? "100" : "600"} value={strength} disabled/>
                <input type="range" name="speed" min="0" max={resize ? "100" : "600"} value={speed} disabled/>
                <input type="range" name="durability" min="0" max={resize ? "100" : "600"} value={durability} disabled/>
                <input type="range" name="power" min="0" max={resize ? "100" : "600"} value={power} disabled/>
                <input type="range" name="combat" min="0" max={resize ? "100" : "600"} value={combat} disabled/>
            </div>
            </div>
        </div>
    )
}

export default PowerStats
