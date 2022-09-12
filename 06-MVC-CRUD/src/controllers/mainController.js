const fs = require('fs');
const path = require('path'); 
//con path hago la ruta del archivo que quiero leer, en este caso el json de la carpeta data
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json'); //con path hago la ruta
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); //leo el archivo que traigo y lo parseo

//función que recibe un numero(n) el numero se convierte en string (toString) y con la exp regular cada 3 digitos coloca un punto
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		let productoVisitado = products.filter(product => product.category === "visited"); // filtra por productos visitados
		let productoInSale = products.filter(product => product.category === "in-sale"); // filtra por productos en venta
		return res.render('index', {
			productoVisitado,     //esto es como hacer (productoVisitado : productoVisitado). Pero cuando coincide el nombre puedo ponerlo asi abreviado
			productoInSale,
			toThousand
		});
	},
	search: (req, res) => {   
		const {keywords} = req.query;      //viene por get con query capturamos parametro name= del formulario y le asigno a keywords el valor que viene por query
		let resultado = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase()) || product.description.toLowerCase().includes(keywords.toLowerCase())) // filtro segpun lo que entra por el query y se pasa al keywords / lo que entre por name o descriptión
		return res.render('results', {
			resultado,
			keywords,
			toThousand
		});
	}
};

module.exports = controller;
