var express = require('express');
var routerLog = express.Router();
var pool = require('../../mongo');

function getInputParam(params) {
    if (params) {
        var id = parseInt(params.idDispositivo);
        if (isNaN(id)) return 0;
        return id;
    }
    return 0;
}

//Espera recibir por parámetro un id de dispositivo y devuelve todas sus mediciones
routerLog.get('/:idDispositivo', function(req, res) {
    var dispId = getInputParam(req.params);
   
    if (dispId > 0) {                
        const collection = pool.db.collection('Log_Riegos');        
        collection.find({'dispositivoId' : dispId.toString()},{}).sort({'fecha': - 1}).toArray(function(err, docs) {          
            if (err) {
                res.send(err).status(400);
                return;}
            res.send(docs);
        });  
        return;
    }        
    res.redirect(routerLog.prefix_); 
});

routerLog.prefix_ = '/api/log';
module.exports = routerLog;