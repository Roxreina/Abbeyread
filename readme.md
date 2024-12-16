# Cuadernos Artesanales - Página Web

## Descripción

Esta es una página web diseñada para comercializar **cuadernos artesanales** hechos a mano. El objetivo principal es ofrecer a los usuarios una interfaz atractiva y funcional donde puedan explorar los productos disponibles, conocer más sobre la empresa, y contactar a los creadores para realizar compras o resolver inquietudes.

El diseño de la página utiliza **HTML5 semántico**,  **CSS3** y **JavaScript** para garantizar una estructura limpia, accesible y fácil de mantener, con funcionalidades dinámicas que mejoran la experiencia del usuario.

## Estructura del Proyecto

El proyecto está dividido en tres archivos principales:

1. **index.html**: Contiene la estructura HTML de la página, organizada en secciones que incluyen el encabezado, los productos, la descripción de la empresa, y la información de contacto.
   
2. **styles.css**: Archivo CSS para los estilos de la página. Define la presentación visual, como los colores, fuentes, márgenes, disposiciones y efectos visuales.

3. **productos.js**: Archivo JavaScript encargado de manejar la funcionalidad dinámica de la página, como la generación de productos, interacciones y eventos.

### Estructura HTML

- **Header**: Contiene el logotipo y el título de la página, junto con un menú de navegación.
- **Sección de inicio**: Breve descripción de la empresa y un aviso promocional.
- **Sección de productos**: Incluye un contenedor con tarjetas de producto, generadas dinámicamente desde un archivo de datos en JavaScript.
- **Sección de reseñas**: Incluye contenedores con reseñas de clientes, y valoracion con imagen de estrellas.
- **Sección sobre nosotros**: Texto que describe la misión y visión de la empresa.
- **Footer**: Información de contacto y derechos reservados.

### Estructura CSS

- **Tipografía**: Se utiliza la familia de fuentes Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif para asegurar una legibilidad óptima.
- **Diseño flexible**: Se emplean `flexbox` para alinear las tarjetas de producto y el contenido del encabezado.
- **Colores**: El esquema de colores está basado en tonos neutros y suaves para el fondo (`#f4f4f4`) y un esquema en verde en un tono medio para los elementos importantes como el header y footer (`857f56`).
- **Elementos destacados**: Los precios de los productos están resaltados en color rojo (`#e74c3c`) para hacerlos más visibles.

### Estructura JavaScript
El archivo productos.js tiene las siguientes partes principales:
1.	Definición de datos: Los productos se almacenan en arreglos como objetos con propiedades (nombre, precio, imagen, descripcion).
2.	Generación dinámica del contenido:
o	Uso de forEach para iterar sobre el arreglo y crear elementos HTML que se insertan en el DOM.
o	Los productos se renderizan directamente en las secciones correspondientes del HTML.
3.	Interactividad básica: o	Escucha de eventos para implementar futuras funcionalidades dinámicas.

## Requisitos

No se necesitan herramientas especiales para ver o modificar este proyecto. Solo se requiere un navegador web y un editor de texto para hacer cambios en los archivos HTML,  CSS y JavaScript.

## Instrucciones de uso

1. **Descargar el proyecto**: Clona este repositorio o descarga los archivos en tu computadora.
   ```bash
   git clone https://github.com/roxreina/abbeyread.git
