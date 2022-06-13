const express = require('express')
const app = express();
const port = 8080;
const fs = require('fs');
const gamesdir = './public/games/games';
app.use('/', express.static('public'));
app.use('/games', express.static(__dirname + '/games'));
app.use('/assets', express.static(__dirname + '/assets'))
app.listen(port, () => console.log(`listening on port ${port}!`));

fs.writeFileSync("./public/games/gamedirs.json", (""));
fs.readdir(gamesdir, (err, files) => {
    if (err) {
        throw err;
    }
    games = [];
    files.forEach(file => {
        games.push({file})
    });
    //console.log(JSON.stringify(games))
    fs.appendFileSync("./public/games/gamedirs.json", (JSON.stringify(games, null)));
});
