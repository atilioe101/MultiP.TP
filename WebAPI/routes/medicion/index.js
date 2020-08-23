var express = require('express');
var routerMedicion = express.Router();
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
routerMedicion.get('/:idDispositivo', function(req, res) {
    var dispId = getInputParam(req.params);
   
    if (dispId > 0) {                
        const collection = pool.db.collection('Mediciones');        
        collection.find({'dispositivoId' : dispId},{}).sort({'fecha': - 1}).toArray(function(err, docs) {          
            if (err) {
                res.send(err).status(400);
                return;}            
            res.send(docs);
        });  
        return;
    }        
    res.redirect(routerLog.prefix_); 
});

routerMedicion.prefix_ = '/api/medicion';
module.exports = routerMedicion;