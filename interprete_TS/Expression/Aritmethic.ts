import { Expression } from "../Abstract/Expression";
import Environment from "../TableSymbol/Environment";
import Return, {Type} from "../TableSymbol/Return";

export default class Aritmethic extends Expression{

    private left:Expression;
    private right:Expression;
    private ope: AritmethicOption;
    public line:number;
    public column:number

    // 344 + 343

    constructor(left:Expression,right:Expression,operacion:AritmethicOption,line:number,column:number){
            super(line,column);
            this.left = left;
            this.right = right;
            this.ope = operacion;
            this.line = line;
            this.column = column;
    }

    public execute(environment:Environment):any{
        var izquierdo = this.left.execute(environment); 
        var derecho = this.right.execute(environment);

        switch (this.ope){
            case AritmethicOption.PLUS:
                if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.ENTERO){
                    var result = Number(izquierdo.getValue()) + Number(derecho.getValue()) ;  
                    return new Return(result, Type.ENTERO);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.ENTERO){
                    var result = Number(izquierdo.getValue()) + Number(derecho.getValue()) ;  
                    return new Return(result, Type.DOUBLE);
                } else if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.DOUBLE){
                    var result = Number(izquierdo.getValue()) + Number(derecho.getValue()) ;  
                    return new Return(result, Type.DOUBLE);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.DOUBLE){
                    var result = Number(izquierdo.getValue()) + Number(derecho.getValue()) ;  
                    return new Return(result, Type.DOUBLE);
                }
            break;
            case AritmethicOption.MINUS:
                if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.ENTERO){
                    var result = Number(izquierdo.getValue()) - Number(derecho.getValue()) ;  
                    return new Return(result, Type.ENTERO);
                }
            break;
            case AritmethicOption.TIMES:
                if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.ENTERO){
                    var result = Number(izquierdo.getValue()) * Number(derecho.getValue()) ;  
                    return new Return(result, Type.ENTERO);
                }
            break;
            case AritmethicOption.DIV:
                if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.ENTERO){
                    var result = Number(izquierdo.getValue()) / Number(derecho.getValue()) ;  
                    return new Return(result, Type.ENTERO);
                }
            break;
            case AritmethicOption.MOD:
                if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.ENTERO){
                    var result = Number(izquierdo.getValue()) % Number(derecho.getValue()) ;  
                    return new Return(result, Type.ENTERO);
                }
            break;
        }

        return new Return(1, Type.ENTERO);
    }
}

export enum AritmethicOption{
    PLUS,
    MINUS,
    TIMES,
    DIV,
    MOD,
    POW
}