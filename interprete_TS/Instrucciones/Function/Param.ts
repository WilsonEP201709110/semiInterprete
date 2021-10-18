import { Instruction } from "../../Abstract/Instruction";
import Environment from "../../TableSymbol/Environment";

export default class Param extends Instruction{

    constructor(private idparam:String,public line : number , public column:number){
        super(line,column);
    }

    public execute(environment:Environment){
        return this
    }

    public getIdParam():String{
        return this.idparam;
    }
}