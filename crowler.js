const cheerio = require("cheerio");
const axios = require("axios");

const url = "#";

const getClubNextMatches = async (club) => {
    try {
        const { data } = await axios.get(url + "time/" + club + "/proximos-jogos");
        const $ = cheerio.load(data);

        let nextMatches = [];

        $(".match__lg_card").each((i, elem) => {
            str = $(elem).find("div.match__lg_card--datetime").text().replace(/^\s+|\s+$/g, '').replace(/\n\s*/g, ' - ').replace(/(\d{2}):(\d{2})/, '$1h$2')
            const newMatch = {
                league: $(elem).find("div.match__lg_card--league").text(),
                homeName: $(elem).find("div.match__lg_card--ht-name").text(),
                awayName: $(elem).find("div.match__lg_card--at-name").text(),
                homeScore: "",
                awayScore: "",
                minutes: "",
                date: str.charAt(0).toUpperCase() + str.slice(1),
                isLive: false
            };
            nextMatches.push(newMatch);
        });


        $.root().end();
        return nextMatches;
    } catch (error) {
        $.root().end();
        return error;
    }
}

const getCompetitionData = async (competition) => {
    try {
        const { data } = await axios.get(url + competition);

        const $ = cheerio.load(data);

        let newCompetition = {
            lastMatches: [],
            nextMatches: [],
        }

        const lastMatchesDates = await getDatesOrdered($, "#last_matches");
        const nextMatchesDates = await getDatesOrdered($, "#next_matches");

        const league = $(".content__title-text").text()

        let lastCount = 0;
        let nextCount = 0;

        $("#next_matches div.table .match__md div.match__md_card").each((i, elem) => {
            const nameH = $(elem).find("div.match__md_card--ht-name").text();
            const nameA = $(elem).find("div.match__md_card--at-name").text();
            const time = $(elem).find("div.match__md_card--info div.match__md_card--datetime").text();
            const str = nextMatchesDates[nextCount] + " - " + time.trim().replace(':', 'h');
           
            const newMatch = {
                league: league,
                homeName: nameH,
                awayName: nameA,
                homeScore: "",
                awayScore: "",
                minutes: "",
                date: str.charAt(0).toUpperCase() + str.slice(1),
                isLive: false
            };

            nextCount++;

            newCompetition.nextMatches.push(newMatch);
        });

        $("#last_matches div.table .match__md div.match__md_card").each((i, elem) => {
            const nameH = $(elem).find("div.match__md_card--ht-name").text();
            const nameA = $(elem).find("div.match__md_card--at-name").text();
            const score = $(elem).find("div.match__md_card--info div.match__md_card--scoreboard").text();
            const minutes = $(elem).find("div.match__md_card--info div.match__md_card--live-minute").text();
            const interval = $(elem).find("div.match__md_card--info div.match__md_card--status-yellow").text();
            const end = $(elem).find("div.match__md_card--info div.match__md_card--status-purple").text();
           

            let str = lastMatchesDates[lastCount];
            const goals = score.split(" - ");

            const goalH = parseInt(goals[0]);
            const goalA = parseInt(goals[1]);

            const newMatch = {
                league: league,
                homeName: nameH,
                awayName: nameA,
                homeScore: goalH,
                awayScore: goalA,
                minutes: minutes? minutes : interval? interval.charAt(0).toUpperCase() + interval.slice(1) : "",
                date: end? end.charAt(0).toUpperCase() + end.slice(1) : str.charAt(0).toUpperCase() + str.slice(1),
                isLive: (minutes || interval)? true : false,
            };

            lastCount++;

            newCompetition.lastMatches.push(newMatch);
        });

        $.root().end();
        return newCompetition;

    } catch (error) {
        $.root().end();
        return error;
    }
}


const getDatesOrdered = async ($, selector) => {
    try {
        let days = [];
        $(`${selector} div.table .standings__group-name`).each((i, elem) => {
            days.push($(elem).text());
        });

        let dayCount = -1;
        let sequence = [];
        $(`${selector} div.table`).children().each((i, elem) => {
            if ($(elem).is('a')) {
                sequence.push(days[dayCount]);
            } else if ($(elem).is('p')) {
                dayCount++;
            }
        });

        return sequence;
    } catch (error) {
        return null;
    }
}

module.exports = {
    getClubNextMatches,
    getCompetitionData
};

