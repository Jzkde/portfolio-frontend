export class Experiencia {

    id?: number;
    empresa: String;
    cargo: String;
    periodo: String;
    descricion: String;
    logo: String;

    constructor(
        empresa: String,
        cargo: String,
        periodo: String,
        descricion: String,
        logo: String,

    ) {
        this.empresa = empresa;
        this.cargo = cargo;
        this.periodo = periodo;
        this.descricion = descricion;
        this.logo = logo;
    }

}
