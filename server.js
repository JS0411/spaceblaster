const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");

app.use(express.static('public'))
var router = express.Router();

app.get('/game', (req, res) => {
   
   res.sendFile(path.join(__dirname, '/public/game.html'))
} )

app.get('/', (req, res) => {
   res.render('index');
} )

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
