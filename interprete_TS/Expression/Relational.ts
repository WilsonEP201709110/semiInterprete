import { Expression } from "../Abstract/Expression";
import Environment from "../TableSymbol/Environment";
import Return, {Type} from "../TableSymbol/Return";

export default class Relational extends Expression{

    private left:Expression;
    private right:Expression;
    private ope: RelationalOption;
    public line:number;
    public column:number

    // 344 + 343

    constructor(left:Expression,right:Expression,operacion:RelationalOption,line:number,column:number){
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
            case RelationalOption.MAYOR:
                if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.ENTERO){
                    var result = Boolean(Number(izquierdo.getValue()) > Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.ENTERO){
                    var result = Boolean(Number(izquierdo.getValue()) > Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.DOUBLE){
                    var result = Boolean(Number(izquierdo.getValue()) > Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.DOUBLE){
                    var result = Boolean(Number(izquierdo.getValue()) > Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                }
            break;
            case RelationalOption.MAYORIGUAL:
                if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.ENTERO){
                    var result = Boolean(Number(izquierdo.getValue()) >= Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.ENTERO){
                    var result = Boolean(Number(izquierdo.getValue()) >= Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.DOUBLE){
                    var result = Boolean(Number(izquierdo.getValue()) >= Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.DOUBLE){
                    var result = Boolean(Number(izquierdo.getValue()) >= Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                }
            break;
            case RelationalOption.MENOR:
                if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.ENTERO){
                    var result = Boolean(Number(izquierdo.getValue()) < Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.ENTERO){
                    var result = Boolean(Number(izquierdo.getValue()) < Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.DOUBLE){
                    var result = Boolean(Number(izquierdo.getValue()) < Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.DOUBLE){
                    var result = Boolean(Number(izquierdo.getValue()) < Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                }
            break;
            case RelationalOption.MENORIGUAL:
                if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.ENTERO){
                    var result = Boolean(Number(izquierdo.getValue()) <= Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.ENTERO){
                    var result = Boolean(Number(izquierdo.getValue()) <= Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.DOUBLE){
                    var result = Boolean(Number(izquierdo.getValue()) <= Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.DOUBLE){
                    var result = Boolean(Number(izquierdo.getValue()) <= Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                }
            break;
            case RelationalOption.IGUAL:
                if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.ENTERO){
                    var result = Boolean(Number(izquierdo.getValue()) == Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.ENTERO){
                    var result = Boolean(Number(izquierdo.getValue()) == Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.DOUBLE){
                    var result = Boolean(Number(izquierdo.getValue()) == Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.DOUBLE){
                    var result = Boolean(Number(izquierdo.getValue()) ==  Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                }
            break;
            case RelationalOption.DIFERENTE:
                if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.ENTERO){
                    var result = Boolean(Number(izquierdo.getValue()) != Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.ENTERO){
                    var result = Boolean(Number(izquierdo.getValue()) != Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.ENTERO && derecho.getType() == Type.DOUBLE){
                    var result = Boolean(Number(izquierdo.getValue()) != Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                } else if(izquierdo.getType() == Type.DOUBLE && derecho.getType() == Type.DOUBLE){
                    var result = Boolean(Number(izquierdo.getValue()) !=  Number(derecho.getValue()));  
                    return new Return(result, Type.BOOLEAN);
                }
            break;
        }

        return new Return(false, Type.BOOLEAN);
    }
}

export enum RelationalOption{
    MAYOR,
    MENOR,
    MAYORIGUAL,
    MENORIGUAL,
    IGUAL,
    DIFERENTE
}