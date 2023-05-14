let activeLeagues = []
const { getClubNextMatches, getCompetitionData } = require("./crowler.js");
const { getClubName, getCompetitionName } = require("./name.js");
const { activeLeaguesToday, matchesToday, liveMatches } = require("./live.js");

console.log("test")
    
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(cors({
    origin: 'https://buchaplay.netlify.app'
  }));

app.post('/api/refresh', async (req, res) => {
    activeLeagues = await activeLeaguesToday();
    res.send('Updated');
  });


// Competition's Past Matches and Upcoming Matches, Including Live Matches
app.get('/competition/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const adress = getCompetitionName(slug);
        if (adress !== 'none') {
            const competitionData = await getCompetitionData(adress)
            res.send(competitionData);
        } else {
            res.status(400).send('Invalid competition parameter');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// Next Matches From a Club
app.get('/nextmatches/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const adress = getClubName(slug);
        if (adress !== 'none') {
            const nextGame = await getClubNextMatches(adress)
            res.send(nextGame);
        } else {
            res.status(400).send('Invalid club parameter');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// Schedule Matches For Today
app.get('/todaymatches', async (req, res) => {
    try {
        if (activeLeagues.length === 0){
            activeLeagues = await activeLeaguesToday();
        }
        const matches = await matchesToday(activeLeagues);
        res.send(matches);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// Live Matches
app.get('/livematches', async (req, res) => {
    try {
        if (activeLeagues.length === 0){
            activeLeagues = await activeLeaguesToday();
        }
        const matches = await liveMatches(activeLeagues);
        res.send(matches);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// Only Leagues That Have Matches Today
app.get('/activeleagues', async (req, res) => {
    try {
        if (activeLeagues.length === 0){
            activeLeagues = await activeLeaguesToday();
        }
        res.send(activeLeagues);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal server error');
});

// Start server
app.listen(3000, async () => {
    console.log(`Server is running...`);
});
