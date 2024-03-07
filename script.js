// Datos simulados de escritos (pueden ser dinámicos si se utiliza una base de datos)
const escritos = [
    { titulo: "Furia Matecaña", enlace: "furiamatecaña_index.html" },
    { titulo: "Los libros que soñé", enlace: "loslibrosquesoñe_index.html" },
    { titulo: "Échale ganas", enlace: "echaleganas_index.html" },
    { titulo: "Mi creador", enlace: "micreador_index.html" },
    { titulo: "They were", enlace: "theywere_index.html" },
    { titulo: "Fluir", enlace: "fluir_index.html" },
    { titulo: "Un poema no tiene que ser bonito", enlace: "unpoemanotiene_index.html" },
    { titulo: "Sobre regulación emocional", enlace: "sobreregulacionemocional_index.html" },
    { titulo: "Tres lunas", enlace: "treslunas_index.html" },
    { titulo: "Memorias sobre Olvido", enlace: "memoriassobreolvido_index.html" },
    { titulo: "Duelos del más acá", enlace: "duelosdelmasaca_index.html" },
    { titulo: "Mal lector", enlace: "mallector_index.html" },
    { titulo: "Amor y hierbas", enlace: "amoryhierbas_index.html" },
    { titulo: "Las flores de Maya", enlace: "lasfloresdemaya_index.html" },
    { titulo: "Tráfico de órganos", enlace: "traficodeorganos_index.html" },
    { titulo: "Respawn 2022, 2023", enlace: "respawn2022_index.html" },
    { titulo: "Analogía", enlace: "analogia_index.html" },
    { titulo: "Un pedacito de neas en la maleza", enlace: "pedacitoneasenlamaleza_index.html" },
    { titulo: "Un pedacito de Pateperro", enlace: "pedacitopateperro_index.html" },
    { titulo: "Colombia A.K.A. Recaída", enlace: "colombiakarecaida_index.html" }
    // Agrega más escritos según sea necesario
];
function generarTarjetas() {
    const contenedorSlider = document.querySelector('.slider');

    // Clona y agrega todas las tarjetas al final del slider
    escritos.forEach(escrito => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <div class="contenido">
                <h2 class="titulo">${escrito.titulo}</h2>
                <a href="${escrito.enlace}" class="boton-ver-mas">Seguir leyendo</a>
            </div>
        `;

        contenedorSlider.appendChild(tarjeta);
    });
}

// Llama a la función para generar las tarjetas cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', generarTarjetas);
