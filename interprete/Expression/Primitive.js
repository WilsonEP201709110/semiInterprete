"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Expression_1 = require("../Abstract/Expression");
const Return_1 = __importDefault(require("../TableSymbol/Return"));
class Primitive extends Expression_1.Expression {
    constructor(idValue, typeValue, line, column) {
        super(line, column);
        this.idValue = idValue;
        this.typeValue = typeValue;
        this.line = line;
        this.column = column;
    }
    execute(environment) {
        return new Return_1.default(this.idValue, this.typeValue);
    }
}
exports.default = Primitive;
