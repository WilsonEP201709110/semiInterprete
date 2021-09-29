import { Expression } from "../Abstract/Expression";
import Environment from "../TableSymbol/Environment";
import Return, {Type} from "../TableSymbol/Return";


export default class Primitive extends Expression{

    constructor(private idValue: any, private typeValue : Type , public line : number , public column : number){
        super(line,column);
    }
    
    public execute(environment:Environment){     
        return new Return(this.idValue, this.typeValue);
    }

}


