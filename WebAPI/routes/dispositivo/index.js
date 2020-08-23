var express = require('express');
var ObjectID = require('mongodb').ObjectID;
var routerDispositivo = express.Router();
var pool = require('../../mongo');

function getInputParam(params) {
    if (params) {
        var id = parseInt(params.idDispositivo);
        if (isNaN(id)) return 0;
        return id;
    }
    return 0;
}

//Devuelve un array de dispositivos
routerDispositivo.get('/', function(req, res) {
    // Get the documents collection
    const collection = pool.db.collection('Dispositivos');    
    collection.find({}).project({ '_id': 1, 'dispositivoId' : 1, 'nombre' : 1, 'ubicacion': 1, 'ultimamedicion': 1, 'electrovalvula': 1}).toArray(function(err, docs) {
        if (err) {
            res.send(err).status(400);
            return;
        }       
        res.send(docs);
    });   
});

//Espera recibir por parámetro un id de dispositivo y devuelve su última medición
routerDispositivo.get('/:idDispositivo', function(req, res) {
    var dispId = getInputParam(req.params);
    
    if (dispId > 0) {
        // Get the documents collection
        const collection = pool.db.collection('Dispositivos');        
        collection.find({'dispositivoId' : dispId.toString()}).project({ '_id': 0 , 'dispositivoId' : 1, 'nombre' : 1, 'ubicacion': 1, 'electrovalvula': 1 }).toArray(function(err, docs) {
            if (err) {
                res.send(err).status(400);
                return;}
            res.send(docs);
        });  
        return;
    }        
    res.redirect(routerDispositivo.prefix); 
});

//actualiza estado de la valvular
routerDispositivo.post('/updestadovalvula', function(req, res) {
    // Get the documents collection
    var collection = pool.db.collection('Dispositivos');  
    var prm = req.body;  

    collection.updateOne({'_id': new ObjectID(prm._id)}, {$set: { 'electrovalvula.activo': prm.nuevoestado }}, function(err, doc) {        
        if (err) {
            res.send(err).status(400);
            return;
        }               
        collection = pool.db.collection('Log_Riegos');    
        collection.insertOne({'apertura': prm.nuevoestado , 'fecha' : new Date().toISOString(), 'dispositivoId': prm.dispositivoId, 'electrovalvulaId': prm.electrovalvulaId }, {w:1}, function(err, doc) {        
            if (err) {
                res.send(err).status(400);
                return;
            }       
            res.send(err).status(200);
        });  
    });
     
});

routerDispositivo.prefix_ = '/api/dispositivo';
module.exports = routerDispositivo;