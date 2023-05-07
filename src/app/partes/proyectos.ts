export class Proyectos {

    id?: number;
    nombre: String;
    solicitante: String;
    descricion: String;
    imagen: String;

    constructor(
        nombre: String,
        solicitante: String,
        descricion: String,
        imagen: String

    ) {
        this.nombre = nombre;
        this.solicitante = solicitante;
        this.descricion = descricion;
        this.imagen = imagen;
    }


}
