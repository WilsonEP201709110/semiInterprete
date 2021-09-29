import Environment from "../TableSymbol/Environment";

export abstract class Expression{

    constructor(public line:number , public column : number){}

    public abstract execute(environment:Environment):any;
}