var express = require('express');
var app = express();
var PORT = 3000;
//ruteo dispositivo
var routerDisp = require('./routes/dispositivo');
//ruteo mediciones
var routerMedicion = require('./routes/medicion');
//ruteo log
var routerLog = require('./routes/log');
app.use(express.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method == 'OPTIONS') res.status(200).send();        
    else next();
});

app.use(routerMedicion.prefix_, routerMedicion);
app.use(routerDisp.prefix_, routerDisp);
app.use(routerLog.prefix_, routerLog);

app.listen(PORT, function(req, res) {
    console.log("API Funcionando ");
});