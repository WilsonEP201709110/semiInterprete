"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instruction_1 = require("../../Abstract/Instruction");
class Param extends Instruction_1.Instruction {
    constructor(idparam, line, column) {
        super(line, column);
        this.idparam = idparam;
        this.line = line;
        this.column = column;
    }
    execute(environment) {
        return this;
    }
    getIdParam() {
        return this.idparam;
    }
}
exports.default = Param;
