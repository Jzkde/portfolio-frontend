export class Acercade {

    id?: number;
    nombre: string;
    titulo: string;
    email: string;
    descricion: string;
    imagen: string;

    constructor(
        nombre: string,
        titulo: string,
        email: string,
        descricion: string,
        imagen: string,
    ){
        this.nombre = nombre;
        this.titulo = titulo;
        this.email = email;
        this.descricion = descricion;
        this.imagen = imagen;
    }


}
