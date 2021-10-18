"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instruction_1 = require("../../Abstract/Instruction");
class Funtion extends Instruction_1.Instruction {
    constructor(id, params, instr, line, column) {
        super(line, column);
        this.id = id;
        this.params = params;
        this.instr = instr;
        this.line = line;
        this.column = column;
        console.log(params);
    }
    execute(environment) {
        try {
            environment.setFunc(this.id, this);
        }
        catch (error) {
            console.log("ubo un error al guardar la funcion");
        }
    }
    getParams() {
        return this.params;
    }
    getInstructions() {
        return this.instr;
    }
}
exports.default = Funtion;
