import { Instruction } from "../../Abstract/Instruction";
import Environment from "../../TableSymbol/Environment";
import Param from "../Function/Param";


export default class Funtion extends Instruction{
 
    constructor(private id:String,private params:Param[],private instr:Instruction,public line : number , public column:number){
        super(line,column);
        console.log(params);
    }

    public  execute(environment:Environment){
        try{
            environment.setFunc(this.id,this);
        }catch(error){
            console.log("ubo un error al guardar la funcion");
        }
    }

    public getParams():Param[]{
        return this.params;
    }

    public getInstructions():Instruction{
        return this.instr;
    }
}
