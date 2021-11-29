import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PowerStats from "./PowerStats/PowerStats";
import style from "./ContainerResults.module.css";
import ContainerCard from "../Card/ContainerCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sumPowerStatsTeam,changeCategorization,averageHeight,avarageWeight } from "../../controllers/Home/index";


const ContainerResults = () => {

  //GLOBAL STATE
  const heroesSearch = useSelector((state) => state.hereosSearch.results);
  const myTeam = useSelector((state) => state.myTeam);

  //LOCAL STATE
  const [averages, setAverages] = useState({heigth:0,weigth:0})
  const [teamCategorization, setTeamCategorization] = useState('');
  const [totalPowerStats, setTotalPowerStats] = useState({
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  });
  const handleSetTotalPowerStats = (powerstats) => {
    setTotalPowerStats({
      intelligence: powerstats.intelligence,
      strength: powerstats.strength,
      speed: powerstats.speed,
      durability: powerstats.durability,
      power: powerstats.power,
      combat: powerstats.combat,
    });
  };
  const handleSetTeamCategorization=(categorization)=>{
    setTeamCategorization(categorization)
  };
//HOOK
  useEffect(() => {
  
    sumPowerStatsTeam(handleSetTotalPowerStats, myTeam);
    changeCategorization(handleSetTeamCategorization)
    setAverages({heigth:averageHeight(myTeam), weigth:avarageWeight(myTeam)});
    
  }, [myTeam]);

  return (
    <div className={`container ${style.root}`}>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className={style.text}> 
          {heroesSearch?.length ? 
           false
           : myTeam.length && <>
           <h1>Team {teamCategorization}</h1> 
           <span className={style.averages}>Average Heigth: {averages.heigth} cm</span> 
           <span className={style.averages}>Average Weigth: {averages.weigth} kg</span> 
           </>
          } 
          </div>
          <div className={style.serachBar}>
            <SearchBar />
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          {heroesSearch?.length ? (
            <Link to="/home">
              <button className={style.viewTeam}>View My Team</button>
            </Link>
          ) : ( 
            
           myTeam.length && <PowerStats
              intelligence={totalPowerStats.intelligence}
              strength={totalPowerStats.strength}
              speed={totalPowerStats.speed}
              durability={totalPowerStats.durability}
              power={totalPowerStats.power}
              combat={totalPowerStats.combat}
            />
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <ContainerCard />
        </div>
      </div>
    </div>
  );
};

export default ContainerResults;
