
// Renderizar el carrito
function actualizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = '';

    carrito.forEach((item) => {
        const html = `
            <div><p>${item.id}</p></div>
            <div><p>${item.nombre}</p></div>
            <div>
                <button class="btn-decrementar" data-id="${item.id}">-</button>
                <span>${item.cantidad}</span>
                <button class="btn-incrementar" data-id="${item.id}">+</button>
            </div>
            <div><p>$${item.precio}</p></div>
            <div><p>$${item.cantidad * item.precio}</p></div>
            <div><button class="btn-eliminar" data-id="${item.id}">Eliminar producto</button></div>
        `;
        listaCarrito.innerHTML += html;
    });

    // Asignar eventos a botones de incrementar, decrementar y eliminar
    agregarEventosContadores();
}

// Asignar eventos a los botones de incrementar/decrementar y eliminar
function agregarEventosContadores() {
    const botonesIncrementar = document.querySelectorAll('.btn-incrementar');
    const botonesDecrementar = document.querySelectorAll('.btn-decrementar');
    const botonesEliminar = document.querySelectorAll('.btn-eliminar');

    // Evento para incrementar
    botonesIncrementar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            modificarCantidadProducto(id, 1);
        });
    });

    // Evento para decrementar
    botonesDecrementar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            modificarCantidadProducto(id, -1);
        });
    });

    // Evento para eliminar
    botonesEliminar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            eliminarProducto(id);
        });
    });
}

// Modificar cantidad del producto
function modificarCantidadProducto(idProducto, cambio) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    console.log(carrito);
    const producto = carrito.find((item) => item.id === idProducto);
    
    if (producto) {
        producto.cantidad += cambio;

        // Evitar que la cantidad sea menor que 1
        if (producto.cantidad < 1) {
            producto.cantidad = 1;
        }
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
    console.log(carrito);
}

// Función para eliminar un producto del carrito
function eliminarProducto(idProducto) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const nuevoCarrito = carrito.filter((producto) => producto.id !== idProducto);

    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    actualizarCarrito();
}

// Vaciar completamente el carrito
document.getElementById("vaciar-carrito").addEventListener("click", () => {
    localStorage.removeItem("carrito");
    actualizarCarrito();
});

// Inicializar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito();
});

