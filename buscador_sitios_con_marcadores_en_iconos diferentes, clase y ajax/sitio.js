export class Sitio {
    /**
     * Crea un objeto Sitio
     * @param {string} nombre 
     * @param {number} latitud 
     * @param {number} longitud 
     * @param {string} url 
     */
    constructor(nombre, latitud, longitud, url) {
        this.nombre = nombre;
        this.latitud = latitud;
        this.longitud = longitud;
        this.url = url;
    }
}