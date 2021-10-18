"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Symbol {
    constructor(idVar, valor, tipo) {
        this.idVar = idVar;
        this.valor = valor;
        this.tipo = tipo;
    }
    getValorSymbol() {
        return this.valor;
    }
    getTypeSymbol() {
        return this.tipo;
    }
    getidVarSymbol() {
        return this.idVar;
    }
}
exports.default = Symbol;
