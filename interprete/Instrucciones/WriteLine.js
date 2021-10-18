"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instruction_1 = require("../Abstract/Instruction");
class WriteLine extends Instruction_1.Instruction {
    constructor(value, line, column) {
        super(line, column);
        this.value = value;
        this.line = line;
    }
    execute(environment) {
        let expresion = this.value.execute(environment);
        console.log(expresion.getValue());
    }
}
exports.default = WriteLine;
