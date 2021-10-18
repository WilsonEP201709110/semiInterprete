import { Expression } from "../../Abstract/Expression";
import { Instruction } from "../../Abstract/Instruction";
import Environment from "../../TableSymbol/Environment";
import Return, {Type}  from "../../TableSymbol/Return";

export default class Declaracion extends Instruction{

    constructor(private id:String, private valor: Expression,private tipo:Type, public line:number, column:number){
        super(line,column);
    }

    public execute(environment:Environment){
        let valor = this.valor.execute(environment);
        if (valor.getType() == Type.NULO){
            environment.setVar(this.id,null,this.tipo);
        } else if(valor.getType() == this.tipo) {
            environment.setVar(this.id,valor. getValue(),this.tipo);
        }
    }

}
