import { Instruction } from "../../Abstract/Instruction";
import { Expression } from "../../Abstract/Expression";
import Environment from "../../TableSymbol/Environment";
import Param from "../Function/Param";
import { Type } from "../../TableSymbol/Return";

export default class If extends Instruction{
    
    constructor(private condicion:Expression, private instrucs:Instruction,public line : number , public column:number,
        private elseIF ?: Instruction|any){
        super(line,column);
    }

    public execute(environment:Environment){
        let condicion = this.condicion.execute(environment);

        if(condicion.getType() != Type.BOOLEAN)
            console.log("La condicion debe de ser de tipo boolenana");
        
        if (condicion.getValue()) return this.instrucs.execute(environment);
        else if (this.elseIF != null||undefined) return this.elseIF.execute(environment);
    }
}