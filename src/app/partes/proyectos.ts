export class Proyectos {

    id?: number;
    nombre: string;
    solicitante: string;
    descricion: string;
    imagen: string;
    anio: number;
    proy: string;
    repo: string;

    constructor(
        nombre: string,
        solicitante: string,
        descricion: string,
        imagen: string,
        anio: number,
        linkproy: string,
        linkrepo: string,
    ) {
        this.nombre = nombre;
        this.solicitante = solicitante;
        this.descricion = descricion;
        this.imagen = imagen;
        this.anio = anio;
        this.proy = linkproy;
        this.repo = linkrepo;
    }

}
