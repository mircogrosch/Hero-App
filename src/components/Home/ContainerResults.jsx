import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PowerStats from "./PowerStats/PowerStats";
import style from "./ContainerResults.module.css";
import ContainerCard from "../Card/ContainerCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sumPowerStatsTeam,changeCategorization } from "../../controllers/Home/index";


const ContainerResults = () => {

  //GLOBAL STATE
  const heroesSearch = useSelector((state) => state.hereosSearch.results);
  const myTeam = useSelector((state) => state.myTeam);

  //LOCAL STATE
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
    
  }, [myTeam]);

  // useEffect(()=>{
   
  // },[myTeam]);


  return (
    <div className={`container ${style.root}`}>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <h1>Team {teamCategorization}</h1>
          <div>
            <SearchBar />
          </div>
        </div>

        <div className="col-md-6 col-lg-6">
          {heroesSearch?.length ? (
            <Link to="/home">
              <button>View My Team</button>
            </Link>
          ) : (
            <PowerStats
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
