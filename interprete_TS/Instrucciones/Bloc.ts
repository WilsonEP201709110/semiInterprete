import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import Environment from "../TableSymbol/Environment";


export default class Bloc extends Instruction{

    constructor(private instrucs:Instruction[],public line:number, column:number){
        super(line,column);
    }

    public execute(environment:Environment){
        for( let inst of this.instrucs){
            let val = inst.execute(environment);
            if(val != null){
                return val
            }
        }
    }

}