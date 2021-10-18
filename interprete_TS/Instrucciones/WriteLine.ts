import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import Environment from "../TableSymbol/Environment";

export default class WriteLine extends Instruction{

    constructor(private value:Expression, public line:number, column:number){
        super(line,column);
    }

    public execute(environment:Environment){
        let expresion = this.value.execute(environment);
        console.log(expresion.getValue());
    }
}