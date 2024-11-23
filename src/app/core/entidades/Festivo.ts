import { Tipo } from "./TIpo";

export interface Festivo{
    id: number;
    nombre: string;
    dia: number;
    mes: number;
    diasPascua: number;
    idTipo: number;
    tipo: Tipo;
}