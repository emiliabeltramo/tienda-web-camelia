Mi primer proyecto

Este proyecto es una pagina web basica, una tienda online de cosmetica natural, desarrollada como parte de un curso de Front-End.
La pagina esta estructurada con HTML semantico y utiliza las etiquetas 'header', 'nav', 'main', 'section', 'article' y 'footer' para organizar el contenido.
La estructura del proyecto son cuatro paginas html de inicio, productos, contacto y carrito. Todas tienen una lista de navegacion con sus enlaces para recorrer las paginas.
En la pagina de inicio se incorporo un iframe desde youtube.
En la pagina contacto se implemento un formulario funcional de contacto con nombre, correo electronico y mensaje, que envia los datos a traves de formspree y desde js se implementaron funciones para validar que el campo nombre no quede vacio y el campo correo electronico ingrese un formato valido de correo.
Para la pagina de productos se utiliza un archivo JSON que contiene información sobre los productos. Los datos se obtienen mediante una solicitud fetch y se renderizan dinámicamente en la página HTML en formato cards organizado con flex y cada producto puede ser agregado al carrito. En esta pagina se incluye una seccion de reseñas ficticias estaticas, organizada con grid.
La pagina del carrito de compras permite visualizar los productos que se hayan agregado desde la pagina productos, y se puede modificar la cantidad de productos, eliminar un producto desde el mismo, visualizar el subtotal y el total, vaciar el carrito completamente o simular finalizar la compra. El estado del carrito se guarda en localStorage.
Se aplico estilos basicos mediante un css externo y el diseño es adaptable a diferentes tamaños de pantalla.
