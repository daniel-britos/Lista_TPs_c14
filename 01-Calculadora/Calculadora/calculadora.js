/*
ALUMNO: Daniel Britos
Comisión: 14
TP N°1
*/

//Modulos requeridos
const sumar = require('./funciones/sumar');
const restar = require('./funciones/restar');
const multiplicar = require('./funciones/multiplicar');
const dividir = require('./funciones/dividir');
const colors = require('colors');
const process = require('process');
const emojiRegex = require('emoji-regex');

//Ejecución 1
console.log("#################⌚ Calculadora ⌚ #################".bgBlue);
console.log("Resultado suma: ".yellow + sumar(250, 200));
console.log("Resultado resta: ".yellow + restar(5, 10));
console.log("Resultado multiplicación: ".yellow + multiplicar(2, 4));
console.log("Resultado multiplicación: ".yellow + multiplicar(2, 0));
console.log("Resultado división: ".yellow + dividir(3, 0));
console.log("Resultado división: ".yellow + dividir(15, 3));

//Ejecución 2
console.log("################# Calculadora Terminal #################".bgGreen);
//Ejemplo de uso en terminal: node calculadora 4 2 /resultado en la suma: 6
console.log("Resultado suma: ".yellow + sumar(Number(process.argv[2]), Number(process.argv[3])));
console.log("Resultado resta: ".yellow + restar(Number(process.argv[2]), Number(process.argv[3])));
console.log("Resultado multiplicación: ".yellow + multiplicar(Number(process.argv[2]), Number(process.argv[3])));
console.log("Resultado división: ".yellow + dividir(Number(process.argv[2]), Number(process.argv[3])));

/*
RESPUESTAS A LAS PREGUNTAS DEL PDF:

A). ¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación
matemática, hubiésemos programado todo en un mismo archivo?

*************Respuesta**************************
Si hubieramos programado todo en el mismo archivo la realización del codigo
deberia haber sido distinta sin utilizar require, usando solo la función y
el llamado como en este ejemplo:

        function restar(a, b){
            return a - b;
        }
        console.log("Resultado suma: " + restar(250, 200));

Ya que de lo contrario si implementariamos los mismos puntos requeridos en el PDF
en un mismo archivo nos arrojaria error.


B). ¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo?

*************Respuesta**************************
Es mejor generar distintos archivos ya que me permite trabajar con proyectos
escalables y los archivos se vuelven reutilizables, es decir qué podré implementar 
el codigo en otros proyectos.
Además esta metodologia me permite tener menor cantidad de codigo en un 
solo archivo y mayor organización. 
En resumen este metodo me brinda escalabilidad, organización, optimización y reutilización de codigo


C). ¿Será esta metodología de trabajo una constante de aquí en adelante?

*************Respuesta**************************
Según lo visto en clase determinamos que esta es una metodologia que se seguirá
implementando a lo largo de nuestra carrera como estudiantes y profesionales ya 
que estaremos utilizando codigo generado por otras personas, además de el nativo y
el aquellos que creemos nosotros mismos.
*/