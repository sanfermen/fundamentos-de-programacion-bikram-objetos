// Objetos

let Coche = {
	marca: 'Citroen',
	modelo: 'Picasso',
	matricula: '0000AAA'
};

let Casa = {
	codPostal: 48990,
	calle: 'Basarrate',
	portal: 12,
	piso: 1
};

let FullStackDeveloper = {
	lenguajes: ['HTML', 'css', 'JavaScript'],
	proyectos: ['blog', 'periodico', 'factura']
};

let Perro = {
	nombre: 'Max',
	raza: 'Border Collie',
	color: 'gris', 
	edad: 16,
	ladrar: function() {
		return console.log('Guau!');
	},
	popo: function() {
		return Math.random() * 3;
	}
};

// lectura de propiedades
let marcaPortatil = Portatil.marca;
let marcaPortatil2 = Portatil['marca'];
let grupos = Concierto.grupos;
let RGB = [Led['rojo'], Led['verde'], Led['azul']];

// Modificación de propiedades
Portatil.modelo = 'P345';
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
Impresora.imprimiendo = {
	nombreArchivo: 'the_bridge.pdf',
	copias: 2,
	numPaginas: 4
};

// Declaracion
let Noticia = {
	titular: 'Los saqueadores siguen entrando a robar en el HUCA',
	cuerpo: 'Exigen al Principado que se cumpla la normativa medioambiental.'
};

let Persona = {
	nombre: 'Sandra',
	apellidos: 'Fernandez Menendez',
	edad: 47
};

let Avion = {
	numPasajeros: 167,
	despegar: function() {
		console.log('despegando');
	},
	volar: function() {
		console.log('llegando al destino');
	},
	aterrizar: function() {
		console.log('aterrizando');
	}
};

let Paquete = {
	contenido: ['leche', 'huevos']
};

let Pais = {
	numHabitantes: 10000000,
	continente: 'Europa',
	gentilicio: 'francés'
};

// Lectura de propiedades
let codError = O_Error.codigo;
let integrantes = Grupo.integrantes;
let nivelesTinta = Impresora.tinta;
let pixeles = Pantalla.pixeles;
let especificaciones = Movil['especificaciones'];

// Modificación de propiedades
Grupo.numIntegrantes = 5;
Pantalla.dimensiones = '1920x1080';

if (Led.encendido === true) {
	Led.encendido = false;
} else {
	Led.encendido = true;
}

Movil.temperatura = '20º';