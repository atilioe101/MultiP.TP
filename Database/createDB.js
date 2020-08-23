db = db.getSiblingDB('XRiego');
db.createCollection("Dispositivos", { autoIndexId: true, capped : false } );
db.createCollection("Log_Riegos", { autoIndexId: true, capped : false } );
db.createCollection("Mediciones", { autoIndexId: true, capped : false } );
db.Dispositivos.insertMany([
{    
    "dispositivoId" : "1",
    "nombre" : "Sensor 1",
    "ubicacion" : "Norte",
    "electrovalvula" : {
        "codigo" : "1",
        "nombre" : "Electrovalvula 1",
        "activo" : "0"
    },
    "ultimamedicion" : {
        "fecha" : "2020-02-10T07:10:01",
        "valor" : 20.7
    }
},
/* 2 */
{    
    "dispositivoId" : "2",
    "nombre" : "Sensor 2",
    "ubicacion" : "Sur",
    "electrovalvula" : {
        "codigo" : "1",
        "nombre" : "Electrovalvula 1",
        "activo" : "1"
    },
    "ultimamedicion" : {
        "fecha" : "2020-02-10T07:10:01",
        "valor" : 25.3
    }
},
/* 3 */
{   
    "dispositivoId" : "3",
    "nombre" : "Sensor 3",
    "ubicacion" : "Este",
    "electrovalvula" : {
        "codigo" : "1",
        "nombre" : "Electrovalvula 1",
        "activo" : "1"
    },
    "ultimamedicion" : {
        "fecha" : "2020-02-10T07:10:01",
        "valor" : 8.5
    }
},
/* 4 */
{    
    "dispositivoId" : "4",
    "nombre" : "Sensor 4",
    "ubicacion" : "Oeste",
    "electrovalvula" : {
        "codigo" : "1",
        "nombre" : "Electrovalvula 1",
        "activo" : "1"
    },
    "ultimamedicion" : {
        "fecha" : "2020-02-10T07:10:01",
        "valor" : 6.0
    }
},
/* 5 */
{    
    "dispositivoId" : "5",
    "nombre" : "Sensor 5",
    "ubicacion" : "Noreste",
    "electrovalvula" : {
        "codigo" : "1",
        "nombre" : "Electrovalvula 1",
        "activo" : 1
    },
    "ultimamedicion" : {
        "fecha" : "2020-02-10T07:10:01",
        "valor" : 30
    }
}
]);

/* ++++++++++++++++ Log de Riegos +++++++++++++++ */

db.Log_Riegos.insertMany([ 
/* 1 */
{
   
    "apertura" : "0",
    "fecha" : "2020-08-21T13:18:36.234Z",
    "dispositivoId" : "1",
    "electrovalvulaId" : "1"
},

/* 2 */
{
   
    "apertura" : "0",
    "fecha" : "2020-08-21T13:19:10.225Z",
    "dispositivoId" : "2",
    "electrovalvulaId" : "1"
},

/* 3 */
{
    
    "apertura" : "1",
    "fecha" : "2020-08-21T13:19:13.203Z",
    "dispositivoId" : "2",
    "electrovalvulaId" : "1"
},

/* 4 */
{
    
    "apertura" : "1",
    "fecha" : "2020-08-21T13:19:21.466Z",
    "dispositivoId" : "3",
    "electrovalvulaId" : "1"
},

/* 5 */
{
    
    "apertura" : "0",
    "fecha" : "2020-08-21T13:19:25.284Z",
    "dispositivoId" : "3",
    "electrovalvulaId" : "1"
},

/* 6 */
{
    
    "apertura" : "1",
    "fecha" : "2020-08-21T13:19:29.550Z",
    "dispositivoId" : "3",
    "electrovalvulaId" : "1"
},

/* 7 */
{
   
    "apertura" : "1",
    "fecha" : "2020-08-21T14:00:55.426Z",
    "dispositivoId" : "1",
    "electrovalvulaId" : "1"
},

/* 8 */
{
    
    "apertura" : "0",
    "fecha" : "2020-08-21T14:05:43.155Z",
    "dispositivoId" : "1",
    "electrovalvulaId" : "1"
},

/* 9 */
{
    
    "apertura" : "1",
    "fecha" : "2020-08-21T20:34:51.932Z",
    "dispositivoId" : "3",
    "electrovalvulaId" : "1"
},

/* 10 */
{
    
    "apertura" : "0",
    "fecha" : "2020-08-21T20:35:06.517Z",
    "dispositivoId" : "4",
    "electrovalvulaId" : "1"
},

/* 11 */
{
    
    "apertura" : "1",
    "fecha" : "2020-08-21T20:54:49.574Z",
    "dispositivoId" : "1",
    "electrovalvulaId" : "1"
},

/* 12 */
{
    
    "apertura" : "0",
    "fecha" : "2020-08-21T20:54:52.641Z",
    "dispositivoId" : "1",
    "electrovalvulaId" : "1"
},

/* 13 */
{
    
    "apertura" : "1",
    "fecha" : "2020-08-21T21:00:47.564Z",
    "dispositivoId" : "1",
    "electrovalvulaId" : "1"
},

/* 14 */
{
    
    "apertura" : "1",
    "fecha" : "2020-08-21T23:54:08.726Z",
    "dispositivoId" : "4",
    "electrovalvulaId" : "1"
},

/* 15 */
{
   
    "apertura" : "0",
    "fecha" : "2020-08-22T19:27:40.149Z",
    "dispositivoId" : "1",
    "electrovalvulaId" : "1"
},

/* 16 */
{
    
    "apertura" : "1",
    "fecha" : "2020-08-22T19:27:53.662Z",
    "dispositivoId" : "1",
    "electrovalvulaId" : "1"
},

/* 17 */
{
    
    "apertura" : "0",
    "fecha" : "2020-08-22T19:27:58.312Z",
    "dispositivoId" : "2",
    "electrovalvulaId" : "1"
},

/* 18 */
{
    
    "apertura" : "1",
    "fecha" : "2020-08-22T19:28:02.099Z",
    "dispositivoId" : "2",
    "electrovalvulaId" : "1"
},

/* 19 */
{
    
    "apertura" : "0",
    "fecha" : "2020-08-22T19:28:05.900Z",
    "dispositivoId" : "1",
    "electrovalvulaId" : "1"
},

/* 20 */
{
    
    "apertura" : "1",
    "fecha" : "2020-08-22T19:28:11.275Z",
    "dispositivoId" : "1",
    "electrovalvulaId" : "1"
},

/* 21 */
{
   
    "apertura" : "0",
    "fecha" : "2020-08-22T19:28:16.378Z",
    "dispositivoId" : "1",
    "electrovalvulaId" : "1"
}
]);

/* ++++++++++++++++ Mediciones +++++++++++++++ */

db.Mediciones.insertMany([ 
/* 1 */
{
    
    "fecha" : "2020-02-10T07:10:01",
    "valor" : 12.3,
    "dispositivoId" : 1
},

/* 2 */
{
   
    "fecha" : "2020-02-10T08:10:01",
    "valor" : 12.3,
    "dispositivoId" : 1
},

/* 3 */
{
    
    "fecha" : "2020-02-10T09:10:01",
    "valor" : 10.7,
    "dispositivoId" : 1
},

/* 4 */
{
    
    "fecha" : "2020-02-10T11:10:01",
    "valor" : 11.8,
    "dispositivoId" : 1
},

/* 5 */
{
    
    "fecha" : "2020-02-10T07:10:01",
    "valor" : 12.3,
    "dispositivoId" : 2
},

/* 6 */
{
    
    "fecha" : "2020-02-10T08:10:01",
    "valor" : 11.7,
    "dispositivoId" : 2
},

/* 7 */
{
    
    "fecha" : "2020-02-10T09:10:01",
    "valor" : 10.5,
    "dispositivoId" : 2
},

/* 8 */
{
   
    "fecha" : "2020-02-10T12:09:01",
    "valor" : 12.1,
    "dispositivoId" : 2
},

/* 9 */
{
   
    "fecha" : "2020-02-11T07:10:01",
    "valor" : 12,
    "dispositivoId" : 3
},

/* 10 */
{
    
    "fecha" : "2020-02-10T09:10:01",
    "valor" : 15.1,
    "dispositivoId" : 3
},

/* 11 */
{
    
    "fecha" : "2020-02-11T07:10:01",
    "valor" : 15.3,
    "dispositivoId" : 2
}
]);