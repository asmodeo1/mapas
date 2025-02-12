let mapa = null;

function eliminarMarcadores() {
    // Recorremos todas las capas del mapa
    mapa.eachLayer((layer) => {
        // Comprobamos si la capa es un marcador
        if (layer instanceof L.Marker) {
            layer.remove();
        }
    });
}

function mostrarMarcadores(sitios) {
    eliminarMarcadores();
    for (const sitio of sitios) {
        const marcador = L.marker([sitio.latitud, sitio.longitud], { title: sitio.nombre });
        marcador.bindPopup(`<h1>${sitio.nombre}</h1>`);
        marcador.addTo(mapa);
    }
}

function mostrarSitios() {
    const tipoSitio = document.getElementById("tipoSitio");
    switch (tipoSitio.value) {
        case "0":
            mostrarMarcadores(tiendas);
            break;
        case "1":
            mostrarMarcadores(bares);
            break;
        case "2":
            mostrarMarcadores(farmacias);
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