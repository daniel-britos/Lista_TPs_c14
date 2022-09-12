/*
ALUMNO: Daniel Britos
Comisión: 14
TP N°1
*/
const {listaTareas, agregarTareas, leerPorEstado} = require('./tareas');
const process = require('process');
const colors = require('colors');
const emojiRegex = require('emoji-regex');
const key = process.argv[2];



switch (key)     {
    case 'listar':
        console.log("⌚ ↔️ Lista de tareas ↔️ ⌚".green);
        listaTareas();
        break;
    case 'crear':
        let descripcion = process.argv[3];
        let tareaNueva = {
            id : new Date().getTime(),
            descripcion : descripcion,
            estado : 'pendiente'
        }
        agregarTareas(tareaNueva);
        break
    case 'filtrar':
        console.log("⌚ ↔️ Buscador de tareas ↔️ ⌚".green);
        if(process.argv[3] !== undefined){
            leerPorEstado(process.argv[3].toLowerCase());
        }else{
            console.log('ERROR: Debe ingresar un estado por la terminal.'.bgRed 
            + '\nOpciones disponibles:'.bgRed 
            + '\n"Terminada"\n"Pendiente"\n"En Progreso"\n(para su correcto funcionamiento no olviar comillas ("")'.bgRed);
        }

        break
    case undefined:
        console.log("Atención - Tienes que pasar una acción.".yellow);
        break;
    default:
        console.log(" No entiendo qué quieres hacer. ".red);
        break;
}