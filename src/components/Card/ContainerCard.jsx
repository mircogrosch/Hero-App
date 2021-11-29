import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import style from "./ContainerCard.module.css";
import noTeam from '../../img/no-team.png';
const ContainerCard = () => {

  const heroSearch = useSelector((state) => state.hereosSearch.results);
  const team = useSelector((state) => state.myTeam);


  return (
    <div className={style.root}>
      {heroSearch?.length ? (
        heroSearch.map((hero,i) => (
          <div key={i} className="col-md-4 col-lg-4 col-xs-12">
            <Card
              key={hero.id}
              img={hero.image.url}
              name={hero.name}
              intelligence={hero.powerstats.intelligence}
              strength={hero.powerstats.strength}
              speed={hero.powerstats.speed}
              durability={hero.powerstats.durability}
              power={hero.powerstats.power}
              combat={hero.powerstats.combat}
              id={hero.id}
            />
          </div>
        ))
      ) : team?.length ? (
        team.map((hero,i) => (
          <div key={i} className="col-md-4 col-lg-4 col-xs-12">
            <Card
              key={hero.id}
              img={hero.image.url}
              name={hero.name}
              intelligence={hero.powerstats.intelligence}
              strength={hero.powerstats.strength}
              speed={hero.powerstats.speed}
              durability={hero.powerstats.durability}
              power={hero.powerstats.power}
              combat={hero.powerstats.combat}
              id={hero.id}
            />
          </div>
        ))
      ) : (
        <img src={noTeam} alt="no team" width="100%" height="25%"/>)}
    </div>
  );
};

export default ContainerCard;
