import { Expression } from "../Abstract/Expression";
import Environment from "../TableSymbol/Environment";
import Return, {Type} from "../TableSymbol/Return";

export default class CallFunc extends Expression{

    constructor(private id:String, private params:Expression[],public line:number,public column:number){
        super(line,column);
    }

    public execute(environment:Environment){
        try{
            let func = environment.getFunc(this.id);
            if (func != null){
                let newEnv = new Environment(environment.getGloval());
                var j = 0;
                
                for ( let i  of this.params){
                    let value = i.execute(environment);
                    newEnv.setVar(func.getParams()[j++].getIdParam(),value.getValue(),value.getType());
                }
                let ret = func.getInstructions().execute(newEnv);
                if (ret != null){
                    if( ret["type"] == Type.RETURN) return ret["value"];
                    else{
                        return ret;
                    } 
                }
            }
        }catch(error){
            console.log("Error al llamar ala funcion");
        }
    }
}
    
