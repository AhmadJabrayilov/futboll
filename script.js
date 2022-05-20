const matchBox = document.getElementById("matchBoxs");

async function getmatch(url){
    let promise = await fetch(url);
    let response = await promise.json();

    return response;
    
}

async function match() {
    let response = await getmatch("https://app.sportdataapi.com/api/v1/soccer/matches?apikey=2aab87a0-d819-11ec-82c4-ab18a7eadcb2&season_id=1243&league_id=281&date_from=2021-02-17&date_to=2021-02-25")
// console.log(response.data);

response.data.forEach(match => {
    matchBox.innerHTML += `
    <div class="matchBox d-flex justify-content-center"
    <span class="homeTeam">${match.home_team.short_code} <img src="${match.home_team.logo}" alt=""></span>
    <span id="matchResult">${match.stats.ft_score}</span>
    <span id="awayTeam"><img src="${match.away_team.logo}" alt="">${match.away_team.short_code}</span>

    `


});
}
match()