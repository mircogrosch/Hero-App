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
    console.log(powerstats);
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
function twoDecimal(n) {
    let t=n.toString();
    let regex=/(\d*.\d{0,2})/;
    return t.match(regex)[0];
  }

export const averageHeight =(team)=>{ 
    let avaregeTotal = 0; 
    team.forEach((hero)=>{
        avaregeTotal += parseInt(hero.appearance.height[1])
    })
    return  (parseFloat(twoDecimal(avaregeTotal / team.length)))
   
}

export const avarageWeight = (team) =>{
    let avaregeTotal =0; 
    team.forEach((hero)=>{
        avaregeTotal+= parseInt(hero.appearance.weight[1]);
    })
    return  (parseFloat(twoDecimal(avaregeTotal / team.length)))
}