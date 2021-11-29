import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import style from "./ContainerCard.module.css";
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
        <h1>You haven't a team, please search hero and add</h1>
      )}
    </div>
  );
};

export default ContainerCard;
