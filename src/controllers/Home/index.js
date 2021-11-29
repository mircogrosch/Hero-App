const powerstats = { 
    intelligence: 0,
    strength:0,
    speed:0,
    durability:0,
    power:0,
    combat:0
}

export const sumPowerStatsTeam = (setPowerStats,team)=>{ 
    for(let key in powerstats){
        powerstats[key] = 0
    }
    team.forEach((hero) => {
        for(let key in hero.powerstats){
            powerstats[key] += parseInt(hero.powerstats[key])
        }
    })

    setPowerStats(powerstats);
}

export const changeCategorization=(setNameCategorization)=>{
  let nameCategorization = null;
  const keys = Object.keys(powerstats)
  const maxValue = Math.max(...keys.map((key)=> powerstats[key]));
    for(let key in powerstats){
       if(powerstats[key] === maxValue){
         nameCategorization=key;
         return setNameCategorization(nameCategorization)
       } 
    }
    
    
}