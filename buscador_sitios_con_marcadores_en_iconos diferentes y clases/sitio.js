export class Sitio {
    /**
     * Crea un objeto Sitio
     * @param {string} nombre 
     * @param {number} latitud 
     * @param {number} longitud 
     */
    constructor(nombre, latitud, longitud) {
        this.nombre = nombre;
        this.latitud = latitud;
        this.longitud = longitud;
    }
}