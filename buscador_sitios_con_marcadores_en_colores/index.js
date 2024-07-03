let mapa = null;

/**
 * Elimina todos los marcadores del mapa
 */
function eliminarMarcadores() {
    // Recorremos todas las capas del mapa
    mapa.eachLayer((layer) => {
        // Comprobamos si la capa es un marcador
        if (layer instanceof L.Marker) {
            layer.remove();
        }
    });
}

/**
 * Crea un marcador de color indicadio
 * @param {string} color - el color deseado (https://github.com/pointhi/leaflet-color-markers/tree/master/img)
 * @returns {L.Icon} - el icono creado
 */
function crearMarcador(color) {
    return new L.Icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41], // ancho y alto de icono
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
}

/**
 * Muestra en el mapa los marcadores
 * @param {[]} sitios - un array con los sitios a mostrar 
 * @param {string} color - color del marcador 
 */
function mostrarMarcadores(sitios, color) {
    eliminarMarcadores();
    for (const sitio of sitios) {
        const marcador = L.marker([sitio.latitud, sitio.longitud], { title: sitio.nombre, icon: crearMarcador(color) });
        marcador.bindPopup(`<h1>${sitio.nombre}</h1>`);
        marcador.addTo(mapa);
    }
}

function mostrarSitios() {
    const tipoSitio = document.getElementById("tipoSitio");
    switch (tipoSitio.value) {
        case "0":
            mostrarMarcadores(tiendas, "red");
            break;
        case "1":
            mostrarMarcadores(bares, "green");
            break;
        case "2":
            mostrarMarcadores(farmacias, "blue");
            break;
        case "-1":
            eliminarMarcadores();
    }
}

function iniciar() {
    mapa = L.map('mapa').setView([42.22149, -8.73205], 12);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa);

    document.getElementById("tipoSitio").addEventListener("click", mostrarSitios);
}

iniciar();