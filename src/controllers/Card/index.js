
export const isOnMyTeam = (myTeam,id)=>{ 
    const heroFound = myTeam.find((hero) => hero.id === id);
    return heroFound ? true : false;
}

