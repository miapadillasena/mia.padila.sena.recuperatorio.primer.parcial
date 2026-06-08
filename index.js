// =============================================
// DATOS DE PRODUCTOS (del programador anterior)
// =============================================

let hamburguesas = [
    {'id': 1, 'nombre': 'Armonia', 'precio': 12000, 'descripcion': 'Doble medallón de carne, queso cheddar, queso roquefort, huevo frito y pan con queso gratinado.', 'img': '/assets/hamburguesas/burga-1.jpg'},
    {'id': 2, 'nombre': 'Doble batalla', 'precio': 15000, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble beacon, cebolla caramelizada y pan con semillas de sésamo.', 'img': '/assets/hamburguesas/burga-2.jpg'},
    {'id': 3, 'nombre': 'Clásica Law', 'precio': 9000, 'descripcion': 'Medallón de carne, queso cheddar, panceta, cebolla crispy, salsa barbacoa, tomate, lechuga y pan con semillas de sésamo.', 'img': '/assets/hamburguesas/burga-3.jpg'},
    {'id': 4, 'nombre': 'Exotically', 'precio': 16500, 'descripcion': 'Medallón de carne, doble queso roquefort, rúcula, cebolla caramelizada, tomate, hongo portobello salteado y pan brioche con semillas.', 'img': '/assets/hamburguesas/burga-4.jpg'},
    {'id': 5, 'nombre': 'La Bestia', 'precio': 19000, 'descripcion': 'Quíntuple medallón de carne, 5 capas de cheddar, panceta en cada piso, cheddar en cada piso, queso especial derretido y pan con queso gratinado.', 'img': '/assets/hamburguesas/burga-5.jpg'},
    {'id': 6, 'nombre': 'Nuggy Chop', 'precio': 14500, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble panceta, cebolla caramelizada, Nuggets de muzzarella y pan con queso gratinado.', 'img': '/assets/hamburguesas/burga-6.jpg'},
];

let bebidas = [
    {'id': 7, 'nombre': 'Agua sin gas (1L)', 'precio': 2000, 'descripcion': 'Botella 1 litro agua Villavicencio sin gas.', 'img': '/assets/bebidas/agua-con-gas.png'},
    {'id': 8, 'nombre': 'Agua con gas (1L)', 'precio': 1500, 'descripcion': 'Botella 1 litro agua Saldan con gas.', 'img': '/assets/bebidas/agua-sin-gas.png'},
    {'id': 9, 'nombre': 'Aquarius Manzana (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de manzana.', 'img': '/assets/bebidas/aquarius-manzana.png'},
    {'id': 10, 'nombre': 'Aquarius Pomelo (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de pomelo.', 'img': '/assets/bebidas/aquarius-pomelo.png'},
    {'id': 11, 'nombre': 'Aquarius Naranja (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de naranja.', 'img': '/assets/bebidas/aquarius-naranja.png'},
    {'id': 12, 'nombre': 'Coca-Cola (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Coca-Cola.', 'img': '/assets/bebidas/coca-cola.png'},
    {'id': 13, 'nombre': 'Sprite (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Sprite.', 'img': '/assets/bebidas/sprite.png'},
];

let tragos = [
    {'id': 14, 'nombre': 'Campari', 'precio': 6000, 'descripcion': 'Vaso de Campari y jugo de naranja.', 'img': '/assets/tragos/campari.png'},
    {'id': 15, 'nombre': 'Fernet', 'precio': 7000, 'descripcion': 'Vaso de Coca-Cola y Fernet.', 'img': '/assets/tragos/fernet.png'},
    {'id': 16, 'nombre': 'Gancia', 'precio': 6000, 'descripcion': 'Vaso de Gancia y Sprite.', 'img': '/assets/tragos/gancia.png'},
    {'id': 17, 'nombre': 'Ron Havana Club', 'precio': 9000, 'descripcion': 'Vaso de Ron y Coca-Cola.', 'img': '/assets/tragos/ron.png'},
    {'id': 18, 'nombre': 'Daiquiri', 'precio': 7000, 'descripcion': 'Vaso de Daiquiri.', 'img': '/assets/tragos/daiquiri.png'},
];

// Array combinado para buscar productos por id
const todosLosProductos = [...hamburguesas, ...bebidas, ...tragos];


// =============================================
// FUNCIÓN mostrarProductos (punto 2a)
// =============================================

function mostrarProductos() {
    const ulHamburguesas = document.getElementById("listado-hamburguesas");

    hamburguesas.forEach((hamburguesa) => {
        ulHamburguesas.innerHTML += `
            <li class="li-hamburguesa">
                <img class="img-producto" src="${hamburguesa.img}" alt="${hamburguesa.nombre}">
                <h3 class="nombre-producto">${hamburguesa.nombre}</h3>
                <p class="precio-producto">$${hamburguesa.precio}</p>
                <p class="descripcion-producto">${hamburguesa.descripcion}</p>
                <button class="btn-sumar-a-carrito" onclick="sumarAlCarrito(${hamburguesa.id})"> + </button>
                <button class="btn-restar-a-carrito" onclick="restarDelCarrito(${hamburguesa.id})"> - </button>
            </li>
        `;
    }); 

    const ulBebidas = document.getElementById("listado-bebidas"); 

    bebidas.forEach((bebidas) => { 
        ulBebidas.innerHTML += `
        <li class="li-bebidas">
        <img class= "img-producto" src="${bebidas.img}" alt="${bebidas.nombre}">
        <h3 class="nombre-producto"> ${bebidas.nombre}</h3>
        <p class= "precio-producto">${bebidas.precio}</p>
        <p class="descripcion-producto">${bebidas.descripcion}</p>
        <button class="btn-sumar-a-carrito" onclick="sumarAlCarrito(${bebidas.id})"> + </button>
        <button class="btn-restar-a-carrito" onclick="restarDelCarrito(${bebidas.id})"> - </button>
            </li>
        `;
    });  
    const ulTragos = document.getElementById("listado-tragos"); 
    tragos.forEach((tragos) => { 
     ulTragos.innerHTML += `
        <li class="li-tragos">
            <img class= "img-producto" src="${tragos.img}" alt="${tragos.nombre}">
            <h3 class="nombre-producto"> ${tragos.nombre}</h3>
            <p class= "precio-producto">${tragos.precio}</p>
            <p class="descripcion-producto">${tragos.descripcion}</p>
            <button class="btn-sumar-a-carrito" onclick="sumarAlCarrito(${tragos.id})"> + </button>
            <button class="btn-restar-a-carrito" onclick="restarDelCarrito(${tragos.id})"> - </button>
        </li>
        `;
    });  

}


// =============================================
// FUNCIÓN sumarAlCarrito (puntos 2b, 2c, 2d, 2e, 2f, 2g)
// =============================================

function sumarAlCarrito(id) {
    const productoBuscado = todosLosProductos.find((producto) => producto.id === id); /* para buscar */
    
    let carrito = JSON.parse(localStorage.getItem(`carrito`)) || []; /*para ller/*/

    const indiceCarrito = carrito.findIndex((item) => item.id === id); 

    if (indiceCarrito === -1) {
        carrito.push({ id: productoBuscado.id, nombre: productoBuscado.nombre, precio: productoBuscado.precio, cantidad: 1 })
    } else {
        carrito[indiceCarrito].cantidad += 1; 
        }

    localStorage.setItem(`carrito` , JSON.stringify(carrito)); 
    
    alert( `Un/una: ${productoBuscado.nombre} fue agregado al carrito`)

    console.log("Carrito actual: ", carrito);
    
}

function restarDelCarrito(id) {
    const productoBuscado = todosLosProductos.find((producto) => producto.id === id); 
    let carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];

    if (carrito.length === 0) {
        alert("No hay ningun producto guardado")
        return; 
    }

    const indiceCarrito = carrito.findIndex((item) => item.id === id); 

    if (indiceCarrito === -1) {
        alert(`No hay mas ${productoBuscado.nombre} en el carrito`)
    } else {
        carrito[indiceCarrito].cantidad -= 1; 
        alert(`Un/Una ${productoBuscado.nombre} fue eliminado del carrito`)
        if (carrito[indiceCarrito].cantidad === 0){ 
            carrito.splice(indiceCarrito, 1)
            }
        } 
    
    localStorage.setItem(`carrito` , JSON.stringify(carrito)); 

    console.log("Carrito actual: ", carrito);

} 

function buscarHamburguesas(){
    const busqueda = document.getElementById("busqueda-hamburguesas").ariaValueMax.toLowerCase(); 
    const hamburguesas_filtradas = hamburguesas.filter((h) => h.nombre.toLowerCase().includes(busqueda)); 
    mostrarListado(hamburguesas_filtradas, "listado-hamburguesas"); 
} 

function buscarBebidas(){
    const busqueda = document.getElementById("busqueda-bebidas").ariaValueMax.toLowerCase(); 
    const bebidas_filtradas = bebidas.filter((h) => h.nombre.toLowerCase().includes(busqueda)); 
    mostrarListado(bebidas_filtradas, "listado-bebidas"); 

}  

function buscarTragos(){
    const busqueda = document.getElementById("busqueda-tragos").ariaValueMax.toLowerCase(); 
    const tragos_filtradas = tragos.filter((h) => h.nombre.toLowerCase().includes(busqueda)); 
    mostrarListado(tragos_filtradas, "listado-tragos"); 
} 

function ordenarHamburguesas(){
    const busqueda = document.getElementById("busqueda-hamburguesas").value.toLowerCase();
    let hamburguesas_filtradas = hamburguesas.filter((h) => h.nombre.toLowerCase().includes(busqueda));
    hamburguesas_filtradas.sort((a,b) => a.precio - b.precio); 
    mostrarListado(hamburguesas_filtradas, "listado-hamburguesas"); 
    } 

    function ordenarBebidas(){
    const busqueda = document.getElementById("busqueda-bebidas").value.toLowerCase();
    let bebidas_filtradas = bebidas.filter((b) => b.nombre.toLowerCase().includes(busqueda));
    bebidas_filtradas.sort((a,b) => a.precio - b.precio); 
    mostrarListado(bebidas_filtradas, "listado-bebidas"); 

    }

    function ordenarTragos(){
    const busqueda = document.getElementById("busqueda-tragos").value.toLowerCase();
    let tragos_filtradas = tragos.filter((t) => t.nombre.toLowerCase().includes(busqueda));
    tragos_filtradas.sort((a,b) => a.precio - b.precio); 
    mostrarListado(tragos_filtradas, "listado-tragos");  
    }


function mostrarListado(productos , idUL) {
    const ul = document.getElementById(idUL); 
    ul.innerHTML = "";
    
    productos.forEach((producto) => {
        const clase = idUL === "listado-hamburguesas" ? "li-hamburguesa" : (idUL === "listado-bebidas" ? "li-bebida" : "li-tragos"); 
        ul.innerHTML += `
            <li class="${clase}">
            <img class="img-producto" src="${producto.img}" alt="${producto.nombre}">
            <h3 class"nombre-producto">${producto.nombre}</h3>
            <p class="precio-producto">${producto.precio}</p>
            <p class="descripcion-producto">${producto.descripcion}</p>
            <button class"btn-agregar-carrito onclick="sumarAlCarrito(${producto.id})">Agregar al carrito </buttom>
            </li>
        `; 
    }); 
document.addEventListener("DOMContentLoaded" , () => {
    document.getElementById("busqueda-hamburguesas").addEventListener("input" , buscarHamburguesas); 
    document.getElementById("busqueda-bebidas").addEventListener("input" , buscarBebidas); 
    document.getElementById("busqueda-tragos").addEventListener("input" , buscarTragos); 

}); 
}

mostrarProductos();