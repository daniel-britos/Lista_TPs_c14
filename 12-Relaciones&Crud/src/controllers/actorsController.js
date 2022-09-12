const db = require('../database/models');
const sequelize = db.sequelize;

const actorsController = {
    'list': (req, res) => {
        db.Actor.findAll({
            //traigo la pelicula con su genero
            include: [
                {
                    association :"movies",
                    include: ["genre"]
                }
            ]
        })
            .then(actors => {
                res.send(actors)    
            })
    },
}

module.exports = genresController;