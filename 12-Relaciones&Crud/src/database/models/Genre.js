// const { TINYINT, INTEGER } = require("sequelize/types");

    module.exports = (sequelize, dataTypes) => {
        let alias = 'Genre';
        let cols = {
            id: {
                type: dataTypes.BIGINT(10).UNSIGNED,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            // created_at: dataTypes.TIMESTAMP,
            // updated_at: dataTypes.TIMESTAMP,
            name: {
                type: dataTypes.STRING(100),
                allowNull: false
            },
            ranking: {
                type: dataTypes.BIGINT(10).UNSIGNED,
                allowNull: false
            },
            active: {
                type: dataTypes.BOOLEAN,
                allowNull: false
            }
        };
        let config = {
            timestamps: true,
            createdAt: 'created_at',    //indica que createdat se llama created_at
            updatedAt: 'updated_at',
            deletedAt: false    //indica que deletedAt no existe
        }
        const Genre = sequelize.define(alias, cols, config);

        //relacion uno a muchos / Generes -> Movie
        Genre.associate = function(models){
            //Genre tiene muchas Peliculas
            Genre.hasMany(models.Movie,{  //Movie = nombre del alias o modelo
                as: 'movies',           //puede ir otro pero le pongo nombre de la tabla a la que se asocia
                foreignKey: 'genre_id'      //llave foranea del modelo Movie que la vincula a Genre
            })

            /*
            En caso de necesitarlo puedo agregar mas relaciones  una debajo de la otra
            Genre.hasMany(models.Director,{ 
                as: 'directores',           
                foreignKey: 'directores_id'      
            })
            */
            
        }

        

        return Genre
    };