import {Type} from './Return';


export default class Symbol{

    private idVar:String;
    private valor:any;
    private tipo:Type;

    constructor(idVar:String, valor:any,tipo:Type){
        this.idVar = idVar;
        this.valor = valor;
        this.tipo = tipo;
    }

}