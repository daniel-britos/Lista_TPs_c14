//db está leyendo el index.js que contiene la logica donde en index.js 
//se leen todos los modelos y exporta (module.export = db) y asi tengo acceso 
//a todos los modelos
const db = require('../database/models'); 
const {Op} = require('sequelize'); //importo los operadores

module.exports = {
    //listar todo de la tabla movies
    list: (req, res) => {
        //del contexto db traigo modelo Movie y uso metodo findAll,
        //esto es una promesa por eso debo luego poner then
        db.Movie.findAll()                                   //(esta linea es una promesa) cuando la base de datos me traiga todas las peliculas
            .then(movies => {                               //entonces recibo peliculas 
                return res.render("moviesList",{movies});
            }) 
            .catch(error => console.log(error));              //en el caso que hubiera un problema ponemos catch que captura el error y lo muestra por consola (puedo cambiarlo)
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id).then(movie => {
            return res.render("moviesDetail", {movie});
        }).catch(error => console.log(error));
    },
    new: (req, res) => {
        //listar las ultumas 5 agregadas
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']        //ordeno por fecha de lanzamiento en descendente    
            ],
            limit: 5
        }).then(movies => {
            return res.render("newestMovies", {movies});
        }).catch(error => console.log(error));
    },

    recomended: (req, res) => {
        //ordenar por fecha las mas recomendadas por rating y mas premiadas
        //gte = mayor igual 
        db.Movie.findAll({
            where: {
                [Op.and] : [
                    {
                        rating : {
                            [Op.gte] : 9 //mayor igual a 9
                        }
                    },
                    {
                        awards : {
                            [Op.gte] : 2 //y mayor igual a 2
                        }
                    }   
                ]
            },
            order : [
                ['rating', 'DESC'],     // raiting descendente
                ['awards', 'DESC']       //ordenadas por las mas premiadas
            ]
        }).then(movies => {
            return res.render("recommendedMovies", {movies});
        }).catch(error => console.log(error));
    }
}

