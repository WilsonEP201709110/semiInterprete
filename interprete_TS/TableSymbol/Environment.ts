import Symbol from "./Symbol";
import {Type} from "./Return";

export default class Environment{

    private tableVar:Map<String,Symbol>;
    private tableFunc:Map<String,Symbol>
    private previous:Environment | any;


    constructor(previous?:Environment){
        this.previous= previous;
        this.tableVar = new Map<String,Symbol>();
        this.tableFunc = new Map<String,Symbol>();
    }

    public getPrevious(){
        return this.previous;
    }

    public getTableVar():Map<String,Symbol>{
        return this.tableVar;
    }

    public setTableVar(idVar:String,simbol:Symbol){
        this.tableVar.set(idVar,simbol);
    }

    public setVar(idVar:String,valueVar:any,typeVar:Type){
        const newSymbol:Symbol = new Symbol(idVar,valueVar,typeVar);
        for(var e:Environment = this; e != null;e = e.getPrevious()){
            if (e.getTableVar().has(idVar)){
                e.setTableVar(idVar,newSymbol);
                return
            }
        }
        this.setTableVar(idVar,newSymbol);
    }

    public getVar(idVar:String){
        for(let e:Environment = this; e != null ; e = e.getPrevious()){
            if (e.getTableVar().has(idVar)){
                return e.getTableVar().get(idVar);
            }
        }
        return null;
    }

    public getGloval():Environment | any{
        for (let e: Environment = this; e != null; e = e.getPrevious()) {
            if (e.getPrevious() == null) return e;
        }
    }

}