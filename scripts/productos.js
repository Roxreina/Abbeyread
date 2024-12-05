// Función para cargar el archivo JSON y mostrar los productos

console.log("Archivo JavaScript cargado correctamente"); 

async function cargarProductos() {
    try {
    const respuesta = await fetch('productos.json');
    if (!respuesta.ok) {
        throw new Error(`Error al cargar el JSON: ${respuesta.statusText}`);
    }
    const productos = await respuesta.json();

      // Mostrar los productos en la página
    const lista = document.getElementById('lista-productos');
    productos.forEach(producto => {
        const item = document.createElement('li');
        item.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.imagen}" width="100" />
        <h2>${producto.nombre}</h2>
        <p> $${producto.precio}</p>
        `;
        lista.appendChild(item);
    });

    } catch (error) {
    console.error('Error:', error);
    }
}

  // Ejecutar la función
cargarProductos();
