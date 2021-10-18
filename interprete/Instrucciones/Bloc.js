"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instruction_1 = require("../Abstract/Instruction");
class Bloc extends Instruction_1.Instruction {
    constructor(instrucs, line, column) {
        super(line, column);
        this.instrucs = instrucs;
        this.line = line;
    }
    execute(environment) {
        for (let inst of this.instrucs) {
            let val = inst.execute(environment);
            if (val != null) {
                return val;
            }
        }
    }
}
exports.default = Bloc;
