"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Expression_1 = require("../Abstract/Expression");
const Return_1 = __importDefault(require("../TableSymbol/Return"));
class Access extends Expression_1.Expression {
    constructor(id, line, column) {
        super(line, column);
        this.id = id;
        this.line = line;
        this.column = column;
    }
    execute(environment) {
        let value = environment.getVar(this.id);
        if (value == null)
            console.log("La variable no existe");
        else
            return new Return_1.default(value.getValorSymbol(), value.getTypeSymbol());
    }
}
exports.default = Access;
