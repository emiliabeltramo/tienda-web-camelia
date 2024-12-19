//Cargar los productos en la pagina productos desde un json
let productos = [];

const cargarProductos = async () => {
    try {
        const response = await fetch("../productos.json");
        productos = await response.json();

        mostrarProductos();
    }   catch (error) {
        console.error(error);
        }
};

document.addEventListener("DOMContentLoaded", cargarProductos);

const mostrarProductos = () => {
    const listadoProductos = document.querySelector(".listado-productos");

    listadoProductos.innerHTML = "";

    productos.forEach((producto) => {
        const html = `
            <article data-id="${producto.id}" data-nombre="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <img src="./img/${producto.imagen}" alt="${producto.nombre}" />
                <p>${producto.descripcion}</p>
                <p>$ ${producto.precio}</p>
                <button type="button" class="btn-agregar">Agregar al carrito</button>
            </article>
        `;

        listadoProductos.innerHTML += html;
    });
};

//agregar productos al carrito
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-agregar")) {
        const id = event.target.closest("article").dataset.id;

        const index = carrito.findIndex((item) => item.id == id);

        if (index == -1) {
        const elemento = productos.find((producto) => producto.id == id);
        console.log(elemento);

        const { nombre, precio } = elemento;

        const producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: 1,
        };

        carrito.push(producto);
        alert("Producto añadido al carrito");
    } else {
        const producto = carrito[index];
        producto.cantidad++;
        alert("Producto añadido al carrito");
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    }
});