export class Cursos {

    id?: number;
    nombre: string;
    organizador: string;
    carga: number;
    anio: number;
    caracter: string;
    certificado: string;


    constructor(
        nombre: string,
        organizador: string,
        carga: number,
        anio: number,
        caracter: string,
        certificado: string,
    ) {
        this.nombre = nombre;
        this.organizador = organizador;
        this.carga = carga;
        this.anio = anio;
        this.caracter = caracter;
        this.certificado = certificado;

    }


}
