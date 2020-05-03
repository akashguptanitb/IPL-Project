function ecnomicalBowlers(matches,deliveries){
let teamMatch = []
for(let match of matches) {
    if(match.season === "2015"){
        teamMatch.push(match.id)
    }
}

let teamDel = []
for(let deli of deliveries){
    for (let match of teamMatch){
       if(match == deli["match_id"]){
          teamDel.push(deli)
       }
    }
}

let bowlerRun= {};
for(let deli of teamDel) {
    if(bowlerRun.hasOwnProperty(deli["bowler"])){
        bowlerRun[deli["bowler"]] += parseInt(deli["total_runs"])
    } else {
        bowlerRun[deli["bowler"]] = 1
    }
}

let bowlerBalls = {};
for(let deli of teamDel) {
    if(bowlerBalls.hasOwnProperty(deli["bowler"])){
        if(deli["noball_runs"] == "0" && deli["wide_runs"] == "0"){
             bowlerBalls[deli["bowler"]] ++
        }        
    } else {
        bowlerBalls[deli["bowler"]] = 1
    }
}

let arr = []
for(let key1 in bowlerBalls){
    for(let key2 in bowlerRun) {
        if(key1 === key2) {
            let economicRate = ((bowlerRun[key2] / bowlerBalls[key1]) * 6).toFixed(2)
            let obj = {
                rate: economicRate,
                bowler: key2
            }
            arr.push(obj)
        }
    }
}
 arr.sort((a,b)=> a.rate - b.rate)
 let topTenBowler = arr.splice(0,10)


 let economical_bowler = {}
 for(let player of topTenBowler) {
        economical_bowler[player["bowler"]] = parseFloat(player["rate"])
 }
 return economical_bowler;
}
module.exports = ecnomicalBowlers;
