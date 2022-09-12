const path = require('path');
const db = require('../../database/models');
const {checkID} = require('../../helpers');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const genresController = require('./genresController');


const moviesController = {
    'list': async(req, res) => {        //transformamos en asyncronica la funcion
        try {
            let movies = await db.Movie.findAll({ //obtengo las peliculas
                include: ['genre']      //incluimos la relacion
            })
            //creo un objeto
            let response = {
                ok: true,       //propiedad true
                meta: {
                    status:200,
                    total: movies.length    //total de peliculas
                },
                data: genres
            }
            return res.status(200).json(response)
            
        } catch (error) {
            
        }


    },
    'detail': (req, res) => {
        if(checkID(req.params.id)) {
            return res.status(400).json(checkID(req.params.id))
        }


        db.Movie.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        //trae las ultimas 5 peliculas
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        //trae peliculas con rating superior a 8
        db.Movie.findAll({
            include: ['genre'],
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    },
    create: function (req,res) {
        //registra una pelicula
        Movies
        .create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then(()=> {
            return res.redirect('/movies')})            
        .catch(error => res.send(error))
    },
    update: function (req,res) {
        let movieId = req.params.id;
        Movies
        .update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
            })
        .then(()=> {
            return res.redirect('/movies')})            
        .catch(error => res.send(error))
    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        Movies
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/movies')})
        .catch(error => res.send(error)) 
    }
}

module.exports = moviesController;