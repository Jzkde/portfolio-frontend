export class Hardskills {


    id?: number;
    nombre: String;
    grado: number;
    nivel: String;
    logo: String;

    constructor(
        nombre: String,
        grado: number,
        nivel: String,
        logo: String,
    ) {
        this.nombre = nombre;
        this.grado = grado;
        this.nivel = nivel;
        this.logo = logo;
    }

}
