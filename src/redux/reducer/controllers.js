export const addHero = (heroSearch,myTeam,id)=>{
    const heroFound = heroSearch.results.find((hero)=> hero.id === id);
    return [...myTeam,heroFound]
}

export const deleteHero = (myTeam, id)=>{
    return myTeam.filter((hero) => hero.id !== id);
}