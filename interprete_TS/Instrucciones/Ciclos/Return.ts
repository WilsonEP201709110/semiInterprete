import { Instruction } from "../../Abstract/Instruction";
import { Expression } from "../../Abstract/Expression";
import Environment from "../../TableSymbol/Environment";
import Param from "../Function/Param";
import { Type } from "../../TableSymbol/Return";

export default  class Return extends Instruction{

    constructor(private expresion:Expression|null,public line:number,public column:number){
        super(line,column);
    }

    public execute(environment:Environment){
        return this
    }
}