/*
ALUMNO: Daniel Britos
Comisión: 14
TP N°1
*/
const {listaTareas} = require('./funcionesDeTareas');
const process = require('process');
const colors = require('colors');
const emojiRegex = require('emoji-regex');
const key = process.argv[2];



switch (key)     {
    case 'listar':
        console.log("⌚ ↔️ Lista de tareas ↔️ ⌚")
        listaTareas();
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción.".yellow);
        break;
    default:
        console.log(" No entiendo qué quieres hacer. ".red);
        break;
}