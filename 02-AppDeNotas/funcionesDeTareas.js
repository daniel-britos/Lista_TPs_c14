const fs = require('fs');
let leerJSON = fs.readFileSync(__dirname + '/tareas.json', 'utf-8'); 
let tareas = JSON.parse(leerJSON);




module.exports = {


    listaTareas : () => {
        let listado = [];
        for (let index = 0; index < tareas.length; index++) {
            listado.push(`${index + 1}). [${tareas[index].estado}] | ${tareas[index].titulo}.`);
        }
        return console.log(listado);
    }   

};
