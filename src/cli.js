const fetch = require('node-fetch');
const moment = require('moment');
moment.locale('de');

const DEFAULT_TEAM = "ger";

export async function cli(args) {
  const arg1 = args[2];
  let team = DEFAULT_TEAM;

  if (arg1 === "--team") {
    team = args[3];
  }

  const matches = await fetchMatches(team);
  const dates = matches.map(({ datetime }) => moment(datetime).format('dddd L, HH:mm'))

    console.log(dates)

}

async function fetchMatches(team = DEFAULT_TEAM) {
    const matches = await fetch(`https://worldcupjson.net/matches/country/${team}?details=false`)
      .then(response => response.json())

      return matches;
}


