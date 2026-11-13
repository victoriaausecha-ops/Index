
let total = 0;

function agregar(nombre, precio) {

    let lista = document.getElementById("lista-carrito");

    let producto = document.createElement("li");

    producto.textContent = nombre + " - $" +
        precio.toLocaleString("es-CO");

    lista.appendChild(producto);

    total = total + precio;

    document.getElementById("total").textContent =
        total.toLocaleString("es-CO");
}

function vaciarCarrito() {

    document.getElementById("lista-carrito").innerHTML = "";

    total = 0;

    document.getElementById("total").textContent = "0";
}
