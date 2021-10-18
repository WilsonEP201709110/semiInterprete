"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instruction_1 = require("../../Abstract/Instruction");
const Return_1 = require("../../TableSymbol/Return");
class If extends Instruction_1.Instruction {
    constructor(condicion, instrucs, line, column, elseIF) {
        super(line, column);
        this.condicion = condicion;
        this.instrucs = instrucs;
        this.line = line;
        this.column = column;
        this.elseIF = elseIF;
    }
    execute(environment) {
        let condicion = this.condicion.execute(environment);
        if (condicion.getType() != Return_1.Type.BOOLEAN)
            console.log("La condicion debe de ser de tipo boolenana");
        if (condicion.getValue())
            return this.instrucs.execute(environment);
        else if (this.elseIF != null || undefined)
            return this.elseIF.execute(environment);
    }
}
exports.default = If;
