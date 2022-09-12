const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const toThousand = n => n.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const leerProducto = () => {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 	//recibe el array de productos	   
	return products;															//sobreescribe el json
}

const productoGuardado = (products) => fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3)) // guardo en productsfilepath

const controller = {
	// Root - Show all products
	index: (req, res) => {
		let products = leerProducto()  //cuando cargo productos los vuelvo a leer con la funcion creada
		return res.render('products', {
			products,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const producto = leerProducto().find(product => product.id === +req.params.id);
		return res.render('detail', {
			producto, toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		return res.render('product-create-form');
		// para crear el metodo Create get solamente debo retornar la vista que contiene el formulario
	},

	// Create -  Method to store
	store: (req, res) => {
		let products = leerProducto();

		const { name, price, discount, description, category } = req.body;  //al req.body las propiedades price name (todas) llegan como string
		let nuevoProducto = {												//creo un objeto nuevo de producto
			id: products[products.length - 1].id + 1,  					//detecto el ultimo id registrado
			name: name.trim(),   											// elimino del string los espacios vacios del principio y final
			description: description.trim(),
			price: +price,													// le pongo + para convertir a numero ya que viene asi desde el input
			discount: +discount,
			image: req.file ? req.file.filename : "default-image.png", 	//si existe filename guardar filename, sinó gurdar jpeg
			category														//dejo el mismo ya que me coincide con el nombre de la constante
		}
		products.push(nuevoProducto);  										// lo guardo en products
		productoGuardado(products) 											//guardo el producto que sufrio una modificación luego del push en la función
		return res.redirect('/products')
	},

	// Update - Form to edit
	edit: (req, res) => {
		let products = leerProducto(); 											//leo los productos y los guardo actualizados en products
		let product = products.find(product => product.id === +req.params.id); // busco el pproducto que coincida con el id que entra por la url
		return res.render('product-edit-form', {
			product
		});  																	//retorno la vista
	},
	// Update - Method to update
	update: (req, res) => {
		let products = leerProducto(); 											//leo los productos
		const { name, price, discount, description, category } = req.body; 		//desestructuro body que llega del formulario
		const product = products.find(product => product.id === +req.params.id);
		const productosModificados = products.map(product => {					//recorre y devuelve un nuevo array				//recorro el array con un map
			if (product.id === +req.params.id) {
				let productoModificado = { 										//creo un nuevo objeto
					...product,													//copio todas las propiedades con un spread para traerme todas incluyendo las que no tengo en el formulario como id e img para tener la base fijada, de lo contrario sin esto al crear no tendria esas propiedades faltantes
					name: name.trim(),
					price: +price,
					discount: +discount,
					description: description.trim(),
					image: req.file ? req.file.filename : product.image, 		//si viene req.file entonces cargarme req.file.filename, de lo contrario dejame las cosas como estan (product.image)
					category
				}
				return productoModificado;
			}
			return product;
		})
		if (req.file && product.image !== "default-image.png") { 					//si existe req.file  y si viene una imagen distinta a la por defecto entonces elimino
			if (fs.existsSync('./public/images/products/' + product.image)) {
				fs.unlinkSync('./public/images/products/' + product.image);      //para borrar la imagen al cargar la otra
			}
		}
		productoGuardado(productosModificados);
		return res.redirect('/products');
	},
	// Delete - Delete one product from DB
	destroy: (req, res) => {
		let products = leerProducto(); 												//leo lo sproductos
		const productosModificados = products.filter(product => product.id !== +req.params.id); // traigo todos los que son distintos al id que ingresa por parametro

		productoGuardado(productosModificados);
		return res.redirect('/products');
	}
};	

module.exports = controller;