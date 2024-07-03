import { Sitio } from "./sitio.js";

function obtenerSitios(datos) {
    const sitios = [];
    for (const sitio of datos) {
        sitios.push(new Sitio(sitio.nombre, sitio.latitud, sitio.longitud, sitio.url));
    }
    return sitios;
}

export function obtenerBares(mostrarMarcadores) {
    fetch("bares.json")
    .then(respuesta => respuesta.json())
    .then(obtenerSitios)
    .then((sitios) => mostrarMarcadores(sitios, "bar.png"))
    .catch( e => window.alert(e));
}

export function obtenerTiendas(mostrarMarcadores) {
    fetch("tiendas.json")
    .then(respuesta => respuesta.json())
    .then(obtenerSitios)
    .then((sitios) => mostrarMarcadores(sitios, "tienda.png"))
    .catch( e => window.alert(e));
}

export function obtenerFarmacias(mostrarMarcadores) {
    fetch("farmacias.json")
    .then(respuesta => respuesta.json())
    .then(obtenerSitios)
    .then((sitios) => mostrarMarcadores(sitios, "farmacia.png"))
    .catch( e => window.alert(e));
}

