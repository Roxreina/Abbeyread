  // Defino los productos en el script
  const productos = [
    { nombre: "Cuaderno Brotes", imagen: "img/cuaderno1.jpg", precio: 9600 },
    { nombre: "Cuaderno Horizonte", imagen: "img/cuaderno2.jpg", precio: 9400 },
    { nombre: "Cuaderno Pinky", imagen: "img/cuaderno3.jpg", precio: 8500 },
    { nombre: "Planner", imagen: "img/planner.jpg", precio: 7200 }
    ];

    const lista = document.getElementById('lista-productos');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    let total = 0;

    // Genero el HTML dinámicamente
    productos.forEach((producto, index) => {
    const item = document.createElement('li');
    item.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>Precio: $${producto.precio}</p>
        <button class="boton-agregar" data-index="${index}">Agregar al carrito</button>
    `;
    lista.appendChild(item);
    });

    // Evento para manejar el carrito
    lista.addEventListener('click', (e) => {
    if (e.target.classList.contains('boton-agregar')) {
        const index = e.target.getAttribute('data-index');
        const producto = productos[index];

        // Agregar producto al carrito
        const itemCarrito = document.createElement('li');
        itemCarrito.innerHTML = `
        ${producto.nombre} - $${producto.precio}
        <button class="boton-eliminar" data-precio="${producto.precio}">Eliminar</button>
        `;
        listaCarrito.appendChild(itemCarrito);

        // Actualizar total
        total += producto.precio;
        totalElement.textContent = `Total: $${total}`;
    }
    });

    // Evento para eliminar productos del carrito
    listaCarrito.addEventListener('click', (e) => {
    if (e.target.classList.contains('boton-eliminar')) {
        const precio = parseInt(e.target.getAttribute('data-precio'));
        
        // Eliminar el producto del DOM
        e.target.parentElement.remove();

        // Actualizar total
        total -= precio;
        totalElement.textContent = `Total: $${total}`;
    }
    });
