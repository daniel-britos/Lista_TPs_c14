const fs = require('fs');
let leerJSON = fs.readFileSync(__dirname + '/tareas.json', 'utf-8'); 
let tareas = JSON.parse(leerJSON);
const colors = require('colors');

const guardarTarea = (tareas) => {
    fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,3));
    return null
}

module.exports = {
    listaTareas : () => {
        let mostrar = tareas.forEach((tarea, index) => {
            console.log(`${index + 1}) - ${tarea.titulo} / Estado: ${tarea.estado}`.bgBlue);
        });        
        return mostrar;
    },
    agregarTareas : (tarea) => {
        tareas.push(tarea);
        guardarTarea(tareas)
        return console.log('Se agregó una tarea.'.bgGreen);
    },
    leerPorEstado : (getEstado) => {
        let estadosObtenidos = tareas.forEach((recorrer, i) => {
            if(recorrer.estado.toLowerCase() == getEstado){
                console.log(`${i + 1}). ${recorrer.descripcion} - ${recorrer.estado}`.bgBlue)
            }
        }); 
        return estadosObtenidos;        
    }

};
