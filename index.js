const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

// Root Method
router.get('/', (req, res) => res.json());

// GET Method
router.get('/game-category/:id?', (req, res) => {
    let categoryFilter = '';
    if(req.params.id) categoryFilter = ' WHERE idCategory = ' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM tb_category' + categoryFilter, res);
});
router.get('/color-status/:id?', (req, res) => {
    let colorFilter = '';
    if(req.params.id) colorFilter = ' WHERE idStatus = ' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM tb_color_status' + colorFilter, res);
});
router.get('/dns/:id?', (req, res) => {
    let dnsFilter = '';
    if(req.params.id) dnsFilter = ' WHERE idDNS = ' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM tb_dns' + dnsFilter, res);
});
router.get('/game-list/:id?', (req, res) => {
    let gameFilter = '';
    if(req.params.id) gameFilter = ' WHERE idGame = ' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM tb_game' + gameFilter, res);
});
router.get('/game-image/:id?', (req, res) => {
    let imageFilter = '';
    if(req.params.id) imageFilter = ' WHERE idImage = ' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM tb_game_image' + imageFilter, res);
});
router.get('/game-review/:id?', (req, res) => {
    let reviewFilter = '';
    if(req.params.id) reviewFilter = ' WHERE idReview = ' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM tb_game_review' + reviewFilter, res);
});
router.get('/original-host/:id?', (req, res) => {
    let hostFilter = '';
    if(req.params.id) hostFilter = ' WHERE idHost = ' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM tb_original_host' + hostFilter, res);
});
router.get('/game-region/:id?', (req, res) => {
    let regionFilter = '';
    if(req.params.id) regionFilter = ' WHERE idRegion = ' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM tb_region' + regionFilter, res);
});

// POST Method
router.post('/game-category', (req, res) => {
    const categoryName = req.body.categoryName.substring(0,45);
    execSQLQuery(`INSERT INTO tb_category(categoryName) VALUES ('${categoryName}')`, res);
});
router.post('/color-status', (req, res) => {
    const typeStatus = req.body.typeStatus.substring(0, 100);
    const colorStatus = req.body.colorStatus.substring(0, 7);
    execSQLQuery(`INSERT INTO tb_color_status(typeStatus, colorStatus) VALUES ('${typeStatus}', '${colorStatus}')`, res);
});
router.post('/dns', (req, res) => {
    const dnsName = req.body.dnsName.substring(0, 45);
    const dnsPrimary = req.body.dnsPrimary.substring(0, 45);
    const dnsSecondary = req.body.dnsSecondary.substring(0, 45);
    const dnsWeb = req.body.dnsWeb.substring(0, 100);
    execSQLQuery(`INSERT INTO tb_dns(dnsName, dnsPrimary, dnsSecondary, dnsWeb) VALUES ('${dnsName}', '${dnsPrimary}', '${dnsSecondary}', '${dnsWeb}')`, res);
});
router.post('/game-list', (req, res) => {
    const gameTitle = req.body.gameTitle.substring(0, 45);
    const gameCategory = req.body.gameCategory.substring(0, 1);
    const gameRegion = req.body.gameRegion.substring(0, 1);
    const gameID = req.body.gameID.substring(0, 12);
    const coop = req.body.coop.substring(0, 1);
    const playersLocal = req.body.playersLocal.substring(0, 2);
    const playersOnline = req.body.playersOnline.substring(0, 2);
    const dns1 = req.body.dns1.substring(0, 1);
    const dns2 = req.body.dns2.substring(0, 1);
    const originalHost = req.body.originalHost.substring(0, 1);
    const status = req.body.status.substring(0, 1);
    execSQLQuery(`INSERT INTO tb_game(gameTitle, gameCategory, gameRegion, gameID, coop, playersLocal, playersOnline, dns1, dns2, originalHost, status) VALUES ('${gameTitle}', '${gameCategory}', '${gameRegion}', '${gameID}', '${coop}', '${playersLocal}', '${playersOnline}', '${dns1}', '${dns2}', '${originalHost}', '${status}')`, res);
});
router.post('/game-image', (req, res) => {
    const gameCoverURL = req.body.gameCoverURL.substring(0, 45);
    const screenshot1 = req.body.screenshot1.substring(0, 1);
    const screenshot2 = req.body.screenshot2.substring(0, 1);
    const screenshot3 = req.body.screenshot3.substring(0, 1);
    const screenshot4 = req.body.screenshot4.substring(0, 1);
    const screenshot5 = req.body.screenshot5.substring(0, 1);
    const idGame = req.body.idGame.substring(0, 1);
    execSQLQuery(`INSERT INTO tb_game_image(gameCoverURL, screenshot1, screenshot2, screenshot3, screenshot4, screenshot5, idGame) VALUES ('${gameCoverURL}', '${screenshot1}', '${screenshot2}', '${screenshot3}', '${screenshot4}', '${screenshot5}', '${idGame}')`, res);
});
router.post('/game-review', (req, res) => {
    const reviewEN = req.body.reviewEN;
    const reviewPT = req.body.reviewPT;
    const reviewES = req.body.reviewES;
    const idGame = req.body.idGame.substring(0, 1);
    execSQLQuery(`INSERT INTO tb_game_review(reviewEN, reviewPT, reviewES, idGame) VALUES ('${reviewEN}', '${reviewPT}', '${reviewES}', '${idGame}')`, res);
});
router.post('/original-host', (req, res) => {
    const hostName = req.body.hostName.substring(0, 45);
    execSQLQuery(`INSERT INTO tb_original_host(hostName) VALUES ('${hostName}')`, res);
});
router.post('/game-region', (req, res) => {
    const regionName = req.body.regionName.substring(0, 10);
    const regionAlias = req.body.regionAlias.substring(0, 3);
    execSQLQuery(`INSERT INTO tb_region(regionName, regionAlias) VALUES ('${regionName}', '${regionAlias}')`, res);
});

// PATCH Method
router.patch('/game-category/:id', (req, res) => {
    const idCategory = parseInt(req.params.id);
    const categoryName = req.body.categoryName.substring(0,45);
    execSQLQuery(`UPDATE tb_category SET categoryName = '${categoryName}' WHERE idCategory='${idCategory}'`, res);
});
router.patch('/color-status/:id', (req, res) => {
    const idStatus = parseInt(req.params.id);
    const typeStatus = req.body.typeStatus.substring(0, 100);
    const colorStatus = req.body.colorStatus.substring(0, 7);
    execSQLQuery(`UPDATE tb_color_status SET typeStatus = '${typeStatus}', colorStatus = '${colorStatus}' WHERE idStatus='${idStatus}'`, res);
});
router.patch('/dns/:id', (req, res) => {
    const idDNS = parseInt(req.params.id);
    const dnsName = req.body.dnsName.substring(0, 45);
    const dnsPrimary = req.body.dnsPrimary.substring(0, 45);
    const dnsSecondary = req.body.dnsSecondary.substring(0, 45);
    const dnsWeb = req.body.dnsWeb.substring(0, 100);
    execSQLQuery(`UPDATE tb_dns SET dnsName = '${dnsName}', dnsPrimary = '${dnsPrimary}', dnsSecondary = '${dnsSecondary}', dnsWeb = '${dnsWeb}' WHERE idDNS='${idDNS}'`, res);
});
router.patch('/game-list/:id', (req, res) => {
    const idGame = parseInt(req.params.id);
    const gameTitle = req.body.gameTitle.substring(0, 45);
    const gameCategory = req.body.gameCategory.substring(0, 1);
    const gameRegion = req.body.gameRegion.substring(0, 1);
    const gameID = req.body.gameID.substring(0, 12);
    const coop = req.body.coop.substring(0, 1);
    const playersLocal = req.body.playersLocal.substring(0, 2);
    const playersOnline = req.body.playersOnline.substring(0, 2);
    const dns1 = req.body.dns1.substring(0, 1);
    const dns2 = req.body.dns2.substring(0, 1);
    const originalHost = req.body.originalHost.substring(0, 1);
    const status = req.body.status.substring(0, 1);
    execSQLQuery(`UPDATE tb_game SET gameTitle = '${gameTitle}', gameCategory = '${gameCategory}', gameRegion = '${gameRegion}', gameID = '${gameID}', coop = '${coop}', playersLocal = '${playersLocal}', playersOnline = '${playersOnline}', dns1 = '${dns1}', dns2 = '${dns2}', originalHost = '${originalHost}', status = '${status}' WHERE idGame='${idGame}'`, res);
});
router.patch('/game-image/:id', (req, res) => {
    const idImage = parseInt(req.params.id);
    const gameCoverURL = req.body.gameCoverURL.substring(0, 45);
    const screenshot1 = req.body.screenshot1.substring(0, 1);
    const screenshot2 = req.body.screenshot2.substring(0, 1);
    const screenshot3 = req.body.screenshot3.substring(0, 1);
    const screenshot4 = req.body.screenshot4.substring(0, 1);
    const screenshot5 = req.body.screenshot5.substring(0, 1);
    const idGame = req.body.idGame.substring(0, 1);
    execSQLQuery(`UPDATE tb_game_image SET gameCoverURL = '${gameCoverURL}', screenshot1 = '${screenshot1}', screenshot2 = '${screenshot2}', screenshot3 = '${screenshot3}', screenshot4 = '${screenshot4}', screenshot5 = '${screenshot5}', idGame = '${idGame}' WHERE idImage='${idImage}'`, res);
});
router.patch('/game-review/:id', (req, res) => {
    const idReview = parseInt(req.params.id);
    const reviewEN = req.body.reviewEN;
    const reviewPT = req.body.reviewPT;
    const reviewES = req.body.reviewES;
    const idGame = req.body.idGame.substring(0, 1);
    execSQLQuery(`UPDATE tb_game_review SET reviewEN = '${reviewEN}', reviewPT = '${reviewPT}', reviewES = '${reviewES}', idGame = '${idGame}', idGame = '${idGame}' WHERE idReview='${idReview}'`, res);
});
router.patch('/original-host/:id', (req, res) => {
    const idHost = parseInt(req.params.id);
    const hostName = req.body.hostName.substring(0, 45);
    execSQLQuery(`UPDATE tb_original_host SET hostName = '${hostName}' WHERE idHost='${idHost}'`, res);
});
router.patch('/game-region/:id', (req, res) => {
    const idRegion = parseInt(req.params.id);
    const regionName = req.body.regionName.substring(0, 10);
    const regionAlias = req.body.regionAlias.substring(0, 3);
    execSQLQuery(`UPDATE tb_region SET regionName = '${regionName}', regionAlias = '${regionAlias}' WHERE idRegion='${idRegion}'`, res);
});

// DELETE Method
router.delete('/game-category/:id', (req, res) => {
    execSQLQuery('DELETE FROM tb_category WHERE idCategory=' + parseInt(req.params.id), res);
});
router.delete('/color-status/:id', (req, res) => {
    execSQLQuery('DELETE FROM tb_color_status WHERE idStatus=' + parseInt(req.params.id), res);
});
router.delete('/dns/:id', (req, res) => {
    execSQLQuery('DELETE FROM tb_dns WHERE idDNS=' + parseInt(req.params.id), res);
});
router.delete('/game-list/:id', (req, res) => {
    execSQLQuery('DELETE FROM tb_game WHERE idGame=' + parseInt(req.params.id), res);
});
router.delete('/game-image/:id', (req, res) => {
    execSQLQuery('DELETE FROM tb_game_image WHERE idImage=' + parseInt(req.params.id), res);
});
router.delete('/game-review/:id', (req, res) => {
    execSQLQuery('DELETE FROM tb_game_review WHERE idReview=' + parseInt(req.params.id), res);
});
router.delete('/original-host/:id', (req, res) => {
    execSQLQuery('DELETE FROM tb_original_host WHERE idHost=' + parseInt(req.params.id), res);
});
router.delete('/game-region/:id', (req, res) => {
    execSQLQuery('DELETE FROM tb_region WHERE idRegion=' + parseInt(req.params.id), res);
});

app.use('/', router);

app.listen(port);

function execSQLQuery(sqlQry, res) {
    const con = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: '',
        password: '',
        database: ''
    });

    con.query(sqlQry, function(error, results, fields) {
        if(error)
            res.json(error);
        else
            res.json(results);

        con.end();
    })
}