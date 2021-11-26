import React from "react";
import style from "./Card.module.css";
import PowerStats from "../Home/PowerStats/PowerStats";
const Card = ({
  id,
  img,
  name,
  intelligence,
  strenght,
  speed,
  durability,
  power,
  combat,
}) => {
  return (
    <div class={style.cartBox}>
      <div class={style.cart}>
        <div class={style.face}>
          <img src={img} width="200" height="250px" alt="Hero"/>
          <div className={style.containerHeroName}> 
            <h1 className={style.textName}>{name}</h1>
          </div>
        </div>
        <div class={`${style.face} ${style.back}`}>
          <PowerStats
            intelligence={intelligence}
            strength={strenght}
            speed={speed}
            durability={durability}
            power={power}
            combat={combat}
            resize={true}
          />
          <button className={`btn ${style.button}`}>
              Add to my team
          </button>
          <button className={`btn ${style.button}`}>
            View Details    
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Card;
