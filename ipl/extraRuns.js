function extraRuns(matches,deliveries) {
  let teamMatch = []
  for(let match of matches) {
          if(match.season === "2016"){
              teamMatch.push(match)
          }
  }  

  let teamDel = []
  for(let deli of deliveries){
    for (let match of teamMatch){
      if(match.id == deli["match_id"]){
          teamDel.push(deli)
      }
    }
  } 
  
  let bowling_extra_runs = {}
  for(let deli of teamDel){
    if(bowling_extra_runs.hasOwnProperty(deli["bowling_team"])){
      bowling_extra_runs[deli["bowling_team"]] += parseInt(deli["extra_runs"])
    } else {
      bowling_extra_runs[deli["bowling_team"]] = 0
    }
  }
  return bowling_extra_runs;
}
  
  
  module.exports = extraRuns;
  