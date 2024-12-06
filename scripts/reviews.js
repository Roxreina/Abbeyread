// Cargar las reseñas desde el archivo JSON
fetch('reviews.json')  // Revisar ruta correcta
    .then(response => response.json())  // Convertir la respuesta en formato JSON
    .then(data => {
        const reviewsContainer = document.getElementById('reviews-list'); // Contenedor donde se mostrarán las reseñas

        // Recorro las reseñas
        data.reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');  // Añado clase para darle estilo 

            reviewElement.innerHTML = `
                <p class="customer-name">${review.name}</p>
                <p class="review-text">${review.review}</p>
                <div class="rating">${'⭐'.repeat(review.rating)}</div>
            `;

            reviewsContainer.appendChild(reviewElement);  // Añado cada reseña al contenedor
        });
    })
    .catch(error => console.error('Error al cargar las reseñas:', error));  // Manejo de errores