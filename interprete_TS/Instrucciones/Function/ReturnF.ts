import { Expression } from "../../Abstract/Expression";
import Environment from "../../TableSymbol/Environment";
import Return, {Type}  from "../../TableSymbol/Return";
import Param from "../Function/Param";

export default class ReturnF extends Expression{

    constructor(private expresion:Expression|null,public line : number , public column:number){
        super(line,column);
    }

    public execute(environment:Environment){
        try{
            if(this.expresion!= null){
                let expresion = this.expresion.execute(environment);
                return {
                    "value" : expresion,
                    "type" : Type.RETURN
                }
            }else {
                return {
                    "value" : new Return(null,Type.NULO),
                    "type" : Type.RETURN
                }
            }

        }catch(error){
            console.log("error en en return")
        }
    }
}