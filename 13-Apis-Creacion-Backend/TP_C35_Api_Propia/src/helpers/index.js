const checkID = (id) => {
    if(isNaN(id)) {     //si no es un numero ejecuta el bloque y retorna response
        response = {
            ok: false,
            meta: {
                status: 400,            
            },
            msg: 'número de ID incorrecto'
        }
        return response;   //si no es un numero retorna response
    }
    return  false; //si es un numero retorna false
}


module.exports = {

}