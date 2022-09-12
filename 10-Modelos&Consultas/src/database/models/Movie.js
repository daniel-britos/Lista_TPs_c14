module.exports = (sequelize, dataTypes) => {
    //definimos "Movie" como modelo pero podemos definir cualquier otro nombre en el alias
    const alias = "Movie";
    //creamos un objeto literal cols y 
    //pongo las columnas de mi tabla como lo tenemos en la bdd
    const cols = {
        //creo tabla id y las subsiguientes
        id: {
            type: dataTypes.INTEGER.UNSIGNED, //unsigned (sin signo) "UQ" en la tabla de bdd
            autoIncrement: true, //auto incrementable (AI en la bdd)
            allowNull: false, //no soporta nulls (NN) en la base de datos 
            primaryKey: true //llave primaria PK en bdd
        },
        title: {
            type: dataTypes.STRING(500),    //cuando en la bdd tenemos varchar usamos string
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        genre_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    };
    const config = {
        //ponemos el nombre de la tabla (le decimos que en la bdd es "movies" y no Movie) 
        //para evitar errores mas que nada en linux
        tableName: "movies",
        timestamps : false, //si la tabla marcas de tiempo no es necesario esta configuración, 
        underscored : true   //con esto indico que el nombre de los timestamps esta creado con guion bajo ya que por defecto lo pide con camelcase ejemplo createAt

    }

    //Utilizamos constante Movie que es el nombre del modelo
    const Movie = sequelize.define(alias,cols,config);
    
    return Movie;

}