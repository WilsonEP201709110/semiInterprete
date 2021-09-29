export enum Type{
    ENTERO,
    STRING,
    BOOLEAN,
    DOUBLE
}


export default class Return{

    private value:any;
    private tipo:Type;

    constructor(value:any,tipo:Type ){
        this.value = value;
        this.tipo = tipo;
    }

    public  getValue():any{
        return this.value;
    }

    public getType():Type{
        return this.tipo;
    }
}