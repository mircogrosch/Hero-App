import React from "react";
import style from "./Card.module.css";
import PowerStats from "../Home/PowerStats/PowerStats";
import { addHeroToMyTeam,deleteHero } from "../../redux/actions/index";
import { isOnMyTeam } from "../../controllers/Card";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
    //HOOKS
  const dispatch = useDispatch();
  const myTeam = useSelector((state) => state.myTeam);
  return (
    <div className={style.cartBox}>
      <div className={style.cart}>
        <div className={style.face}>
          <img src={img} width="200" height="250px" alt="Hero" />
          <div className={style.containerHeroName}>
            <h1 className={style.textName}>{name}</h1>
          </div>
        </div>
        <div className={`${style.face} ${style.back}`}>
          <PowerStats
            intelligence={intelligence}
            strength={strenght}
            speed={speed}
            durability={durability}
            power={power}
            combat={combat}
            resize={true}
          />
          {isOnMyTeam(myTeam, id) ? (
            <button
              className={`${style.button}`}
              onClick={() => dispatch(deleteHero(id))}
            >
              Remove from team
            </button>
          ) : (
            <button
              className={`${style.button}`}
              onClick={() => dispatch(addHeroToMyTeam(id))}
            >
              Add to my team
            </button>
          )}

          <button className={`${style.button}`}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
