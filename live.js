const { getCompetitionData } = require("./crowler.js");
const allLeagues = ["gaucho-divisao-de-acesso", "campeonato-gaucho", "copa-do-brasil", "brasileirao-serie-a", "copa-libertadores", "copa-sul-americana", "recopa-gaucha", "recopa-sulamericana", "campeonato-paulista", "campeonato-carioca", "copa-do-nordeste", "copa-sao-paulo", "copa-do-mundo", "mundial-clubes-fifa", "champions-league", "uefa-europe-league", "amistosos-selecoes", "eliminatorias-da-copa-america-do-sul", "copa-america", "eliminatorias-da-copa-repescagem", "eliminatorias-da-copa-europa", "eurocopa-eliminatorias", "eurocopa", "jogos-olimpicos", "campeonato-argentino", "campeonato-italiano", "campeonato-ingles", "campeonato-espanhol", "campeonato-portugues", "campeonato-frances", "campeonato-alemao"]

const activeLeaguesToday = async () => {
    try {
        let activeLeagues = [];

        for (const league of allLeagues) {
            const competition = await getCompetitionData(league);
            if (competition.nextMatches.length > 0) {
                for (const match of competition.nextMatches) {
                    if (match.date.toLowerCase().includes("hoje")) {
                        if (!activeLeagues.includes(league)) {
                            activeLeagues.push(league);
                        }
                    }
                }
            }
            if (competition.lastMatches.length > 0) {
                for (const match of competition.lastMatches) {
                    if (match.isLive || match.date == "Encerrado") {
                        if (!activeLeagues.includes(league)) {
                            activeLeagues.push(league);
                        }
                    }
                }
            }
            await new Promise(resolve => setTimeout(resolve, 1)); 
        }

        console.log("Active Leagues Updated!")
        return activeLeagues;
    } catch (error) {
        console.log("Error at activeLeaguesToday() Execution inside the dailyUpdate.js. At daily task or startup call. Error Object: \n\n" + error);
        return allLeagues;
    }
};

const matchesToday = async (activeLeagues) => {
    try {
        let allMatches = [];

        for (const league of activeLeagues) {
            const competition = await getCompetitionData(league);
            if (competition.lastMatches.length > 0) {
                for (const match of competition.lastMatches) {
                    if (match.isLive || match.date == "Encerrado") {
                        allMatches.push(match)
                    }
                }
            }
            if (competition.nextMatches.length > 0) {
                for (const match of competition.nextMatches) {
                    if (match.date.toLowerCase().includes("hoje")) {
                        allMatches.push(match)
                    }
                }
            }
            await new Promise(resolve => setTimeout(resolve, 100)); 
        }
        return allMatches;

    } catch (error) {
        console.log("Error at matchesToday() Execution inside the dailyUpdate.js. Error Object: \n\n" + error);
    }
}

const liveMatches = async (activeLeagues) => {
    try {
        let allMatches = [];

        for (const league of activeLeagues) {
            const competition = await getCompetitionData(league);
            if (competition.lastMatches.length > 0) {
                for (const match of competition.lastMatches) {
                    if (match.isLive) {
                        allMatches.push(match)
                    }
                }
            }
            await new Promise(resolve => setTimeout(resolve, 100)); 
        }

        return allMatches;

    } catch (error) {
        console.log("Error at matchesToday() Execution inside the dailyUpdate.js. Error Object: \n\n" + error);
    }
}

module.exports = {
    activeLeaguesToday,
    matchesToday,
    liveMatches
};