
    // Definimos los productos directamente en el script
    const productos = [
      { nombre: "Cuaderno A5", imagen: "cuaderno-a5.jpg", precio: 1500 },
      { nombre: "Cuaderno A4", imagen: "cuaderno-a4.jpg", precio: 2000 },
      { nombre: "Planner 2024", imagen: "planner-2024.jpg", precio: 2500 },
      { nombre: "Agenda de bolsillo", imagen: "agenda-bolsillo.jpg", precio: 1200 }
    ];

    // Obtenemos la lista del DOM
    const lista = document.getElementById('lista-productos');

    // Generamos el HTML dinámicamente
    productos.forEach(producto => {
      const item = document.createElement('li');
      item.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>Precio: $${producto.precio}</p>
      `;
      lista.appendChild(item);
    });

    // También mostramos en la consola
    productos.forEach(producto => {
      console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
    });
 
