function story(matches){
     const result = {}
     for(let winner of matches){
         const toss = winner.toss_winner
         if(result[toss]){
             result[toss] += 1
         }
         else{
             result[toss] = 1;
         }
     }
     return result
}
module.exports = story;