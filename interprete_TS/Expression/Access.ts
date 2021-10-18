import { Expression } from "../Abstract/Expression";
import Environment from "../TableSymbol/Environment";
import Return, {Type} from "../TableSymbol/Return";

export default class Access extends Expression{

    constructor(private id:String ,public line:number,public column:number){
        super(line,column);
    }

    public execute(environment:Environment){
        let value = environment.getVar(this.id);
        if (value == null) console.log("La variable no existe");
        else return new Return(value.getValorSymbol(),value.getTypeSymbol());
    }
}