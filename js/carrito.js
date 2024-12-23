//Carga de carrito desde localStorage, actualizacion por cada accion que se produzca (modificar cantidades, eliminar productos, calcular total y vaciar carrito)
function actualizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");
    listaCarrito.innerHTML = '';

    let total = 0;

    carrito.forEach((item) => {
        const subtotal = item.cantidad * item.precio;
        total += subtotal;

        const html = `
            <div><p>${item.id}</p></div>
            <div><p>${item.nombre}</p></div>
            <div>
                <button class="btn-decrementar" data-id="${item.id}">-</button>
                <span>${item.cantidad}</span>
                <button class="btn-incrementar" data-id="${item.id}">+</button>
            </div>
            <div><p>$${item.precio}</p></div>
            <div><p>$${subtotal}</p></div>
            <div><button class="btn-eliminar" data-id="${item.id}">Eliminar producto</button></div>
        `;
        listaCarrito.innerHTML += html;
    });

    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;

    agregarEventosContadores();
}

function agregarEventosContadores() {
    const botonesIncrementar = document.querySelectorAll('.btn-incrementar');
    const botonesDecrementar = document.querySelectorAll('.btn-decrementar');
    const botonesEliminar = document.querySelectorAll('.btn-eliminar');


    botonesIncrementar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            modificarCantidadProducto(id, 1);
        });
    });

    botonesDecrementar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            modificarCantidadProducto(id, -1);
        });
    });

    botonesEliminar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            eliminarProducto(id);
        });
    });
}

function modificarCantidadProducto(idProducto, cambio) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    console.log(carrito);
    const producto = carrito.find((item) => item.id === idProducto);
    
    if (producto) {
        producto.cantidad += cambio;

        if (producto.cantidad < 1) {
            producto.cantidad = 1;
        }
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
    console.log(carrito);
}

function eliminarProducto(idProducto) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const nuevoCarrito = carrito.filter((producto) => producto.id !== idProducto);

    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    actualizarCarrito();
}

document.getElementById("vaciar-carrito").addEventListener("click", () => {
    localStorage.removeItem("carrito");
    actualizarCarrito();
});

document.getElementById("finalizar-compra").addEventListener("click", () => {
    alert("Muchas gracias por su compra!");
    localStorage.removeItem("carrito");
    actualizarCarrito();
});

document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito();
});

