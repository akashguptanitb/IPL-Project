const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const extraRuns = require("./ipl/extraRuns");
const economicalBowlers = require("./ipl/economicalBowlers");
const story = require("./ipl/story");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH1 = "./public/data1.json";
const JSON_OUTPUT_FILE_PATH2 = "./public/data2.json";
const JSON_OUTPUT_FILE_PATH3 = "./public/data3.json";
const JSON_OUTPUT_FILE_PATH4 = "./public/data4.json";
const JSON_OUTPUT_FILE_PATH5 = "./public/data5.json";

function main() {

  //Matches played per year(First Problem)
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result1 = matchesPlayedPerYear(matches);
      saveMatchesPlayedPerYear(result1);
    });

  //Matches won by each team(Second Problem)
   csv()
    .fromFile(MATCHES_FILE_PATH) 
    .then(matches => {
      let result2 = matchesWonByEachTeam(matches);
      saveMatchesWonByEachTeam(result2);
    }); 

  //Extra Runs(Third Problem)
   csv()
   .fromFile(MATCHES_FILE_PATH)
   .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries =>{
      let result3 = extraRuns(matches,deliveries);   
      saveExtraRuns(result3);
      });          
   });

  //Top 10 economical Bowlers(Fourth Problem)
  csv()
   .fromFile(MATCHES_FILE_PATH)
   .then(matches => {
     csv()
     .fromFile(DELIVERIES_FILE_PATH)
     .then(deliveries => {
     let result4 = economicalBowlers(matches,deliveries);
     saveEconomicalBowlers(result4);
     });
   }); 
    
  //Story(Fifth Problem) 
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
    let result5 = story(matches);
    saveStory(result5);
    })

}

//Matches played per year(First Problem)
function saveMatchesPlayedPerYear(result1) {
  const jsonData1 = {
    matchesPlayedPerYear: result1
  };
  const jsonString1 = JSON.stringify(jsonData1);
  fs.writeFile(JSON_OUTPUT_FILE_PATH1, jsonString1, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

//Matches won by each team(Second Problem)
function saveMatchesWonByEachTeam(result2) {
  const jsonData2 = {
    matchesWonByEachTeam: result2
  };
  const jsonString2 = JSON.stringify(jsonData2);
  fs.writeFile(JSON_OUTPUT_FILE_PATH2, jsonString2, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

//Extra Runs(Third Problem)
function saveExtraRuns(result3) {
  const jsonData3 = {
    extraRuns: result3
  };
  const jsonString3 = JSON.stringify(jsonData3);
  fs.writeFile(JSON_OUTPUT_FILE_PATH3, jsonString3, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

//Top 10 economical Bowlers(Fourth Problem)
function saveEconomicalBowlers(result4) {
  const jsonData4 = {
    economicalBowlers: result4
  };
  const jsonString4 = JSON.stringify(jsonData4);
  fs.writeFile(JSON_OUTPUT_FILE_PATH4, jsonString4, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

//Story(Fifth Problem)
function saveStory(result5) {
  const jsonData5 = {
    story: result5
  };
  const jsonString5 = JSON.stringify(jsonData5);
  fs.writeFile(JSON_OUTPUT_FILE_PATH5, jsonString5, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
