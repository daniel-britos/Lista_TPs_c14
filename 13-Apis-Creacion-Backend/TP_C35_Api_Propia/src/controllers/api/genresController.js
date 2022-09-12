const db = require('../../database/models');
const sequelize = db.sequelize;

const genresController = {
    'list': async(req, res) => {    //await debe ser usado dentro de una funcion asyncronica por eso le agregamos a la funcion req,res async
        try {
            //promesa
            let genres = await db.Genre.findAll() //await (espera) espera la consulta de db.Genre.FindAll y lo guarda en la variable
            //estructura de respuesta
            let response = {
                ok: true, //valida que llega
                meta: {
                    status: 200,  //en el caso de que haya una respuesta afirmativa el status es 200
                    total: genres.length // cantidad (longitud del array que devuelve la consulta)
                },
                data: genres //devuelve los generos
            }
            return res.status(200).json(response)
            //captura de error
        }catch(error) {
            console.log(error)
            let response = {
                ok: false,
                meta: {
                    status: 500 //si hubo un problema del lado del servidor será un 500 en lugar de 200
                }
            }
            return res.status(500).json(response)
        }
    },
    'detail': async(req, res) => {
        if(checkID(req.params.id)) {
            return res.status(400).json(checkID(req.params.id))
        }

        try {
            let genre = await db.Genre.findByPk(req.params.id);
            let response = {
                ok: true,
                meta: {
                    status: 200,
                },
                data: genre
            }  
            return res.status(200).json(response) 
        } catch (error) {
            console.log(error)
            let response = {
                ok: false,
                meta: {
                    status: 500
                },
                msg : error.message ? error.message : "Comuniquese con el administraddor.. "
            }
            return res.status(500).json(response)
            
        }
    },

};

module.exports = genresController;