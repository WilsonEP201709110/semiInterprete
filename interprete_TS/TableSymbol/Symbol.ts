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

    public getValorSymbol():any{
        return this.valor;
    }

    public getTypeSymbol():Type{
        return this.tipo
    }

    public getidVarSymbol():String{
        return this.idVar;
    }
}