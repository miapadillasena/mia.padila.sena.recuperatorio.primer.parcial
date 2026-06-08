

function mostrarCarrito() {

    const tablaCarrito = document.getElementById("tabla-carrito");    
    let carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];

    tablaCarrito.innerHTML = "";
    
    carrito.forEach((item) => {
        if (item.cantidad > 0 ) {
            tablaCarrito.innerHTML += `
        <tr>
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>${item.precio}</td> 
            <td>
                <button class="btn-accion btn-agregar" onclick="agregarDelCarrito"($)">+</button>
                <button class="btn-accion btn-eliminar" onclick="eliminarDelCarrito($)">-</button>
            </td> 
        </tr>
        `; 
        };
    }); 
    

}

function limpiarCarrito() {
    localStorage.clear(); 
    alert("Carrito limpiado correctamente")
    document.getElementById("tabla-carrito").innerHTML = ""; 
    document.getElementById("total").innerHTML = "El valor final a pagar es de: $0"; 

}

function calcularTotal() {
    
    let carrito = JSON.parse(localStorage.getItem(`carrito`)) || [] ;
    let total = 0  

    carrito.forEach((item) => {
        if (item.cantidad > 0 ) {
        total += item.precio * item.cantidad; 
         }
        });
    
    document.getElementById("total").innerHTML = `El valor final a pagar es de: $${total}`;
        
} 

function agregarDelCarrito(id){
    let carrito =JSON.parse(localStorage.getItem(`carrito`)) || [] ;
    const indiceCarrito = carrito.findIndex((item) => item.id === id); 
    if (indiceCarrito !== -1) {
        carrito[indiceCarrito].cantidad += 1; 
        localStorage.setItem(`carrito` , JSON.stringify(carrito)); 
        mostrarCarrito(); 
        calcularTotal();    
    }
 } 

function eliminarDelCarrito(id){
    let carrito =JSON.parse(localStorage.getItem(`carrito`)) || [] ;
    const indiceCarrito = carrito.findIndex((item) => item.id === id); 

    if (indiceCarrito !== -1) {
         carrito[indiceCarrito].cantidad -=1; 

         if ( carrito[indiceCarrito].cantidad === 0) {
            const confirmacion = confirm("¿Desea eliminar este producto del carrito?"); 
            if (confirmacion) {
                carrito.splice(indiceCarrito , 1); 
            } else {
                carrito[indiceCarrito].cantidad = 1; 
            }
         }
         localStorage.setItem(`carrito` , JSON.stringify(carrito)); 
         mostrarCarrito(); 
         calcularTotal(); 

    }
}
mostrarCarrito(); 
calcularTotal();