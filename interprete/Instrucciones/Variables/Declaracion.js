"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instruction_1 = require("../../Abstract/Instruction");
const Return_1 = require("../../TableSymbol/Return");
class Declaracion extends Instruction_1.Instruction {
    constructor(id, valor, tipo, line, column) {
        super(line, column);
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
        this.line = line;
    }
    execute(environment) {
        let valor = this.valor.execute(environment);
        if (valor.getType() == Return_1.Type.NULO) {
            environment.setVar(this.id, null, this.tipo);
        }
        else if (valor.getType() == this.tipo) {
            environment.setVar(this.id, valor.getValue(), this.tipo);
        }
    }
}
exports.default = Declaracion;
