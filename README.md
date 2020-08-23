# MultiP.TP
Trabajo práctico para la materia Desarrollo Multiplataforma de la especialidad en Internet de las Cosas de la Universidad de Buenos Aires.

![status](https://img.shields.io/badge/status-running-green.svg?colorB=00C106) ![readme](https://img.shields.io/badge/readme-OK-green.svg?colorB=00C106) ![database](https://img.shields.io/badge/database-OK-green.svg?colorB=00C106) ![commits](https://img.shields.io/badge/commits-5-blue.svg)

## Autor
Atilio Cesar Errecaborde

## Estructura del proyecto
La estructura del proyecto está organizada de la siguiente manera: 

MultiP.TP

  └───Database (script para crear la base de datos desde el shell de mongoDB)
  
  └───Riego_Angular (front-end del proyecto utilizando Angular)
  
  └───Riego_Ionic (front-end del proyecto utilizando  Ionic)
  
  └───WebAPI (back-end del proyecto utilizando Node.js)
  
  


## Funcionalidades y características
- Mostrar listado de todos los dispositivos IoT conectados
- Por cada dispositivo listado, habilitar las opciones de ver las mediciones del sensor y el log de Riegos
- Apagar/Encender la electrovalvula asociada a cada dispositivo.


## Restricciones requeridas

- 2 Directivas estructurales (ngIf, ngFor)
    
      Los template que implementan las directivas estructurales son: 
          a) components/dispositivo.component.html
          b) components/log.component.html
          c) components/medicion.component.html
    
- 1 directiva de atributo (custom)
        
- 1 pipe custom 
  
      Los pipe custom son:
        a) pipes/celsius.pipe.ts
        b) pipes/date.pipe.ts
      Son implementados por los componentes log.component y medicion.component.
    
- 1 servicio para conectar a la API

       Existen tres servicios que son implementados por sus respectivos componentes: 
         a) service/dispositivo.service.ts
         b) service/log.service.ts
         c) service/medicion.service.ts
    
- 1 Api en Express con comunicación a la base de datos

      Disponible en la carpeta WebAPI. Se conecta a una base de datos MongoDB.


## Instalación

  1) Ejecutar el script en el shell de mongo para crear la base de datos [`createDB.js`](https://github.com/atilioe101/MultiP.TP/blob/master/Database/createDB.js)

            Nombre de la base de datos creada: XRiego
            Colecciones creadas: Dispositivos, Mediciones y Log_Riegos

  2) Descargar la carpeta WebAPI. Ubicado en la raiz, ejecutar los siguientes comandos desde el shell del SO:

                a) npm install
                b) node index.js
        
        
        Verificar que el servicio está disponible en http://localhost:3000


        En el archivo [`mongo/index.js`](https://github.com/atilioe101/MultiP.TP/blob/master/WebAPI/mongo/index.js) se encuentra la configuración para la conexión a la base de datos instalada en el servicio MongoDB.
        En el encabezado del archivo se encuentras las constantes con los parámetro de conexión:

        const url = 'mongodb://localhost:27017';
        const dbName = 'XRiego';
       
  
  3) Descargar la carpeta Riego_Angular o Riego_Ionic según la preferencia para el front-end. Ubicado en la raiz, ejecutar los siguientes       comandos desde el shell del SO:

                a) npm install
                b) Si se descargo la carpeta Riego_Angular ejecutar: ng serve --port 80 --open
                c) Si se descargo la carpeta Riego_Ionic ejecutar: ionic serve --port=80 
        
        Si se modifico la configuración del servicio WebAPI, entonces se debe actualizar el archivo con la configuración del entorno.
        Para el proyecto Ionic el archivo es [`environment.ts`](https://github.com/atilioe101/MultiP.TP/blob/master/Riego_Ionic/src/environments/environment.ts) 
        Para el proyecto Angular el archivo es [`environment.ts`](https://github.com/atilioe101/MultiP.TP/blob/master/Riego_Angular/src/environments/environment.ts) 
        


