const db = require('../database/models'); 
const {Op} = require('sequelize'); //importo los operadores

module.exports = {
    //listar productos de la tabla Genre
    list: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
            return res.render("genresList", {genres});
        })
        .catch(error => console.log(error));
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
            return res.render("genresDetail", {genre});
        })
        .catch(error => console.log(error));
    }

}