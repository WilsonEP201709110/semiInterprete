"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Expression_1 = require("../../Abstract/Expression");
const Return_1 = __importStar(require("../../TableSymbol/Return"));
class ReturnF extends Expression_1.Expression {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
        this.line = line;
        this.column = column;
    }
    execute(environment) {
        try {
            if (this.expresion != null) {
                let expresion = this.expresion.execute(environment);
                return {
                    "value": expresion,
                    "type": Return_1.Type.RETURN
                };
            }
            else {
                return {
                    "value": new Return_1.default(null, Return_1.Type.NULO),
                    "type": Return_1.Type.RETURN
                };
            }
        }
        catch (error) {
            console.log("error en en return");
        }
    }
}
exports.default = ReturnF;
