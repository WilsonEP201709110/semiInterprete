"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Symbol_1 = __importDefault(require("./Symbol"));
class Environment {
    constructor(previous) {
        this.previous = previous;
        this.tableVar = new Map();
        this.tableFunc = new Map();
    }
    getPrevious() {
        return this.previous;
    }
    getTableVar() {
        return this.tableVar;
    }
    setTableVar(idVar, simbol) {
        this.tableVar.set(idVar, simbol);
    }
    setVar(idVar, valueVar, typeVar) {
        const newSymbol = new Symbol_1.default(idVar, valueVar, typeVar);
        for (var e = this; e != null; e = e.getPrevious()) {
            if (e.getTableVar().has(idVar)) {
                e.setTableVar(idVar, newSymbol);
                return;
            }
        }
        this.setTableVar(idVar, newSymbol);
    }
    getVar(idVar) {
        for (let e = this; e != null; e = e.getPrevious()) {
            if (e.getTableVar().has(idVar)) {
                return e.getTableVar().get(idVar);
            }
        }
        return null;
    }
    /**===== Para las funciones =====================*/
    getTableFunc() {
        return this.tableFunc;
    }
    /*guardar funcion */
    setFunc(idFunc, functio) {
        if (this.tableFunc.has(idFunc)) {
            console.log("la funcion ya existe");
            return;
        }
        this.tableFunc.set(idFunc, functio);
    }
    /**obtener funcion */
    getFunc(idFunc) {
        if (this.getGloval().getTableFunc().has(idFunc)) {
            return this.getGloval().getTableFunc().get(idFunc);
        }
        return null;
    }
    /**===== ============================================================*/
    getGloval() {
        for (let e = this; e != null; e = e.getPrevious()) {
            if (e.getPrevious() == null)
                return e;
        }
    }
}
exports.default = Environment;
