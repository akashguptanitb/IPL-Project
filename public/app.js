function fetchAndVisualizeData1() {
  fetch("./data1.json")
    .then(r => r.json())
    .then(visualizeData1)
  }

function fetchAndVisualizeData2() {
    fetch("./data2.json")
      .then(r => r.json())
      .then(visualizeData2)
 }

function fetchAndVisualizeData3() {
  fetch("./data3.json")
    .then(r => r.json())
    .then(visualizeData3)
  }

function fetchAndVisualizeData4() {
    fetch("./data4.json")
      .then(r => r.json())
      .then(visualizeData4)
 }
 
function fetchAndVisualizeData5() {
  fetch("./data5.json")
    .then(r => r.json())
    .then(visualizeData5)
}


fetchAndVisualizeData1();
fetchAndVisualizeData2();
fetchAndVisualizeData3();
fetchAndVisualizeData4();
fetchAndVisualizeData5();



function visualizeData1(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  return;
}

function visualizeData2(data) {
  visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
  return;
}

function visualizeData3(data) {
  visualizeExtraRuns(data.extraRuns);
  return;
}

function visualizeData4(data) {
  visualizeEconomicalBowlers(data.economicalBowlers);
  return;
}

function visualizeData5(data) {
  visualizeStory(data.story);
  return;
}

//Matches played per year(First Problem)
function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }
  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1. Total number of matches played each year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        data: seriesData
      }
    ]
  });
}


//Matches won by each team(Second Problem)
function visualizeMatchesWonByEachTeam(matchesWonByEachTeam) {
let years = [];
let allTeam = [];
for (let key in matchesWonByEachTeam) {
    years.push(key)
    for (nameOfTeam in matchesWonByEachTeam[key]) {
        if (!allTeam.includes(nameOfTeam)) {
            allTeam.push(nameOfTeam);
        }
    }
}
let seriesData = [];
for (let j in allTeam) {
    let arr = [];
    for (let i in years) {
        if (matchesWonByEachTeam[years[i]].hasOwnProperty(allTeam[j])) {
            arr.push(matchesWonByEachTeam[years[i]][allTeam[j]]);
        }
        else {
            arr.push(0);
        }
    }
    let obj = {
        'name': allTeam[j],
        'data': arr
    }
    seriesData.push(obj);
}

  Highcharts.chart('matches-won-by-each-team', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2: Matches Won By Each Team'
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        categories: 
          years,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Won Matches'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: seriesData
  });
}


//Extra Runs(Third Problem)
function visualizeExtraRuns(extraRuns) {
  const seriesData = [];
  for (let team in extraRuns) {
    seriesData.push([team, extraRuns[team]]);
  }

  Highcharts.chart("extra-runs", {
    chart: {
      type: "column"
    },
    title: {
      text: "3. Extra Runs"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        data: seriesData
      }
    ]
  });
}


//Top 10 economical Bowlers(Fourth Problem)
function visualizeEconomicalBowlers(economicalBowlers) {
  const seriesData = [];
  for (let economical in economicalBowlers) {
    seriesData.push([economical,economicalBowlers[economical]]);
  }

  Highcharts.chart("economical-bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: "4. Top 10 economical bowlers"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        data: seriesData
      }
    ]
  });
}


//Story(Fifth Problem)
function visualizeStory(story) {
  const seriesData = [];
  for (let team in story) {
    seriesData.push([team, story[team]]);
  }

  Highcharts.chart("story", {
    chart: {
      type: "column"
    },
    title: {
      text: "5. Story of IPL dataset(toss_winner)"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Story"
      }
    },
    series: [
      {
        data: seriesData
      }
    ]
  });
}




